"use client";

import { useEffect, useState } from "react";
import styles from "./askList.module.css";
import { sendContactForm } from "../utils/api";

import logo from "../../../photo/photo-6/WIN.png";
import Image from "next/image";

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
        { id: 8, answerText: "Камень поризованный - 2,1НФ (250х120х140" },
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
      questionText:
        "3 Вопрос - Количество (Можно указать общее количество всех размеров)",
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
        "4 Вопрос - Укажите адрес доставки для расчета стоимости доставки (Можно указать ближайший крупный населенный пункт)",
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
  ];

  const [state, setState] = useState(initialState);
  const { values } = state;
  const [answer, setAnswer] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [lastQuestion, setLastQuestion] = useState(false);
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6]);
  const [errorInput, setErrorInput] = useState(false)

  const changeChoseHandler = (text) => {
    if (answer.includes(text)) {
      answer.splice(answer.indexOf(text), 1);
    } else {
      answer.push(text);
    }

    console.log(answer);
  };

  const nextQuestionHandler = (e) => {
    // e.preventDefault();
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }

    if (currentQuestion + 2 === questions.length) {
      setLastQuestion(true);
    }
    console.log(currentQuestion, questions.length, lastQuestion);
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

  const onSubmit = async (e) => {
    // e.preventDefault()
    console.log(values);
    setState((prev) => ({
      ...prev,
    }));
    nextQuestionHandler();
    setLastQuestion(false);
    await sendContactForm(values);
  };

  console.log(arr);

  return (
    <div className={styles.askWrapper}>
      <div className={styles.numbersContainer}>
        {arr.map((i) => (
          <div className={styles.lineContainer} key={300 + i}>
            {i != 1 ? <span className={styles.line} key={200 + i}></span> : ""}

            <p
              id="sphere"
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
      <div id="sphere">
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
                <Image key={"picture"} alt="" width={100} src={logo} />
              )}
            </p>
            {i?.other && (
              <input
                id="sphere"
                placeholder={i.answerTextInput}
                className={styles.input}
                name={i.other}
                onChange={inputChangeHandler}></input>
            )}
          </div>
        ))}
      </div>
      <div className={styles.button001}>
        {lastQuestion && currentQuestion != questions.length ? (
          <button
            className={styles.submitButton}
            type="submit"
            onClick={onSubmit}>
            Отправить →
          </button>
        ) : currentQuestion + 1 != questions.length ? (
          <button className={styles.nextButton} onClick={nextQuestionHandler}>
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
