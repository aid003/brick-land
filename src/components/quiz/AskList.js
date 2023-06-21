"use client";

import { useEffect, useState } from "react";
import styles from "./askList.module.css";
import { sendContactForm } from "../utils/api";

import logo from "../../../photo/photo-1/logo_watsupp.png";
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
      questionText: "Выберите производителя",
      answer: [
        { id: 1, answerText: "Винербергер (Поротерм)" },
        { id: 2, answerText: "Термоблок (Сталинград)" },
        { id: 3, answerText: "Гжель" },
        { id: 4, answerText: "Керакам" },
        { id: 5, answerText: "Радошковичи" },
        { id: 6, answerText: "ЛСР" },
      ],
    },
    {
      questionText: "Тип и размер кирпича",
      answer: [
        { id: 7, answerText: "Блок крупноформатный 12,3 НФ 440мм" },
        { id: 8, answerText: "Блок крупноформатный 10,7 НФ 380 мм" },
        { id: 9, answerText: "Блок крупноформатный 14,3 НФ 510мм" },
        { id: 10, answerText: "Блок крупноформатный 10,7 НФ 250 мм" },
        { id: 11, answerText: "Камень поризованный 2,1НФ" },
        { id: 12, answerText: "Керамический камень 6,8НФ" },
        { id: 13, answerText: "Нужна консультация" },
      ],
    },
    {
      questionText: "Количество",
      answer: [
        { id: 14, answerText: "до 1000 шт" },
        { id: 15, answerText: "до 5000 шт" },
        { id: 16, answerText: "до 10000 шт" },
        { id: 17, answerText: "до 20000 шт" },
        { id: 18, answerText: "более 20000 шт" },
        { id: 19, answerText: "Нужна консультация" },
      ],
    },
    {
      questionText: "Контактные данные",
      answer: [
        { id: 24, answerTextInput: "Ваше имя", other: "name" },
        { id: 25, answerTextInput: "Телефон", other: "phone" },
        {
          id: 26,
          answerTextInput: "Адрес доставки или город",
          other: "country",
        },
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
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);

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
    console.log(currentQuestion, questions.length);
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
    <div>
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
            className={i?.answerTextInput ? styles.fiveSlide : ""}>
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
                placeholder={i.answerTextInput}
                className={styles.input}
                name={i.other}
                onChange={inputChangeHandler}></input>
            )}
          </div>
        ))}
      </div>

      {lastQuestion && currentQuestion + 1 != questions.length ? (
        <button
          className={styles.submitButton}
          type="submit"
          onClick={onSubmit}>
          End Next
        </button>
      ) : currentQuestion + 1 != questions.length ? (
        <button className={styles.nextButton} onClick={nextQuestionHandler}>
          Далее
        </button>
      ) : (
        ""
      )}
      {currentQuestion + 1 != questions.length ? (
        <button className={styles.backButton} onClick={backQuestionHandler}>
          Назад
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default AskList;
