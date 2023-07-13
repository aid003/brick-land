"use client";

import { useEffect, useState } from "react";
import styles from "./askList.module.css";
import { sendContactForm } from "../utils/api";
// import YandexMetrika from "next-yandex-metrika";

import logo from "../../../photo/photo-6/WIN.png";
import Image from "next/image";
import { useMetrica } from "next-yandex-metrica";

const initialValues = {
  name: "",
  phone: "",
  country: "",
  answer: "",
};

const initialState = { values: initialValues };

const AskList = () => {
  let questions = [
    {
      questionText:
        "Какой производитель Вам необходим? (Можно выбрать несколько вариантов)",
      answer: [
        { id: 1, answerText: "Винербергер (Поротерм)" },
        { id: 2, answerText: "Гжель" },
        { id: 3, answerText: "Термоблок (Сталинград)" },
        { id: 4, answerText: "Керакам" },
        { id: 5, answerText: "ЛСР" },
        { id: 6, answerText: "Радошковичи" },
        { id: 7, answerText: "Нужна консультация" },
      ],
    },
    {
      questionText: "Размер блока (Можно выбрать несколько вариантов)",
      answer: [
        { id: 8, answerText: "Камень поризованный - 2,1НФ (250х120х140)" },
        { id: 9, answerText: "Блок крупноформатный 12 - 6,8НФ (510х120x219)" },
        {
          id: 10,
          answerText: "Блок крупноформатный 25 - 10,7НФ (250x380x219)",
        },
        {
          id: 11,
          answerText: "Блок крупноформатный 38 - 10,7НФ (380x250x219)",
        },
        {
          id: 12,
          answerText: "Блок крупноформатный 44 - 12,3НФ (250x440x219)",
        },
        {
          id: 13,
          answerText: "Блок крупноформатный 51 - 14,3НФ (250х510х219)",
        },
      ],
    },
    {
      questionText: "Количество (Можно указать общее количество всех размеров)",
      answer: [
        { id: 14, answerText: "до 1000 шт" },
        { id: 15, answerText: "от 1000шт до 3000шт" },
        { id: 16, answerText: "от 3000шт до 5000шт" },
        { id: 17, answerText: "от 5000шт до 10000шт" },
        { id: 18, answerText: "от 10000шт до 20000шт" },
      ],
    },
    {
      questionText:
        "Укажите адрес доставки для расчета стоимости доставки (Можно указать ближайший крупный населенный пункт)",
      answer: [
        {
          id: 19,
          answerTextInput: "Адрес доставки или город",
          other: "country",
        },
      ],
    },
    {
      questionText: "Укажите где Вам удобнее получить ответ",
      answer: [
        { id: 20, answerText: "WhatsApp" },
        { id: 21, answerText: "Telegram" },
        { id: 22, answerText: "Телефонный разговор (Нужна консультация)" },
      ],
    },
    {
      questionText: "Укажите Ваши контакты и получите расчет",
      answer: [
        { id: 23, answerTextInput: "Ваше имя", other: "name" },
        { id: 24, answerTextInput: "Телефон", other: "phone" },
      ],
    },
    {
      questionText: "Благодарим за заявку",
      answer: [
        {
          id: 28,
          picture: logo,
          answerTextWithOutCheckBox: "Мы свяжемся с вами в ближайшее время",
        },
      ],
    },
  ];

  const [state, setState] = useState(initialState);
  const { values } = state;
  const [answer, setAnswer] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [lastQuestion, setLastQuestion] = useState(false);
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7]);

  const [invalidCountry, setInvalidCountry] = useState(false);
  const [invalidName, setInvalidName] = useState(false);
  const [invalidPhone, setInvalidPhone] = useState(false);

  const { reachGoal } = useMetrica();

  const changeChoseHandler = (text) => {
    if (answer.includes(text)) {
      answer.splice(answer.indexOf(text), 1);
    } else {
      answer.push(text);
    }
  };

  const nextQuestionHandler = (e) => {
    // e.preventDefault();
    console.log(currentQuestion, questions.length, lastQuestion);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }

    if (currentQuestion + 3 === questions.length) {
      setLastQuestion(true);
    }
  };

  const backQuestionHandler = (e) => {
    e.preventDefault();
    if (currentQuestion === 0 || currentQuestion < 0) {
    } else {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const inputChangeHandler = ({ target }) => {
    //console.log(target.name, target.value);
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
        answer: answer,
      },
    }));
  };

  useEffect(() => {
    state.values.country.length > 0
      ? setInvalidCountry(false)
      : setInvalidCountry(true);

    state.values.name.length > 0 ? setInvalidName(false) : setInvalidName(true);

    state.values.phone.length > 0
      ? setInvalidPhone(false)
      : setInvalidPhone(true);
  }, [state]);

  const onSubmit = async (e) => {
    // e.preventDefault()
    console.log(values);
    setState((prev) => ({
      ...prev,
    }));
    nextQuestionHandler();
    setLastQuestion(false);
    try {
      await sendContactForm(values);
    } catch (error) {
      reachGoal("form_error");
    }
    reachGoal("form_send");
  };

  return (
    <div className={styles.askWrapper}>
      <div className={styles.numbersContainer}>
        {arr.map((i) => (
          <div className={styles.lineContainer} key={300 + i}>
            {i != 1 ? <span className={styles.line} key={200 + i}></span> : ""}
            <p
              className={
                currentQuestion + 1 === i ? styles.active : styles.number
              }
              key={i + 100}>
              {i}
            </p>
          </div>
        ))}
      </div>
      <p className={styles.questionText}>
        {questions[currentQuestion].questionText}
      </p>
      <div>
        {questions[currentQuestion].answer.map((i) => (
          <div
            key={i.id}
            className={i?.answerTextInput ? styles.fiveSlide : styles.basicAsk}>
            {i?.answerText && !i?.answerTextWithOutCheckBox ? (
              <input
                onClick={() => {
                  changeChoseHandler(i.answerText);
                }}
                className={styles.checkBox}
                type="checkbox"></input>
            ) : (
              ""
            )}
            <p
              className={styles.askItem}
              key={i.id}
              onClick={() => {
                changeChoseHandler(i.answerText);
              }}>
              {i?.answerText || i?.answerTextWithOutCheckBox}
              {i?.picture && (
                <p className={styles.Akitem_img}>
                  {" "}
                  <Image
                    key={"picture"}
                    alt="БЛАГОДАРНОСТЬ"
                    width={100}
                    src={logo}
                  />
                </p>
              )}
            </p>
            {i?.other && (
              <input
                placeholder={i.answerTextInput}
                className={invalidCountry ? styles.inputError : styles.input}
                name={i.other}
                onChange={inputChangeHandler}></input>
            )}
          </div>
        ))}
      </div>
      <div className={styles.button001}>
        {lastQuestion && currentQuestion + 1 != questions.length ? (
          <button
            className={styles.submitButton}
            type="submit"
            onClick={(e) => {
              invalidPhone && invalidName ? () => {} : onSubmit(e);
            }}>
            Далее →
          </button>
        ) : currentQuestion + 1 != questions.length ? (
          <button
            className={styles.nextButton}
            onClick={(e) => {
              !invalidCountry
                ? nextQuestionHandler(e)
                : currentQuestion != 3
                ? nextQuestionHandler(e)
                : () => {};
            }}>
            Далее →
          </button>
        ) : (
          ""
        )}
        {currentQuestion + 1 != questions.length ? (
          <button className={styles.backButton} onClick={backQuestionHandler}>
            ← Назад
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default AskList;
