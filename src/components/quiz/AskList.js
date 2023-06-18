"use client";

import { useEffect, useState } from "react";
import styles from '../manda.module.css'

export let data = [];

const AskList = () => {
  let questions = [
    {
      questionText: "Выберите производителя",
      answer: [
        { id: 1, answerText: "Что то там" },
        { id: 2, answerText: "Что то там2" },
        { id: 3, answerText: "Что то там3" },
        { id: 4, answerText: "Что то там4" },
      ],
    },
    {
      questionText: "Выберите производителя 2",
      answer: [
        { id: 1, answerText: "Что то там 1 1" },
        { id: 2, answerText: "Что то там 2 2" },
        { id: 3, answerText: "Что то там 3 4" },
        { id: 4, answerText: " 4 5" },
      ],
    },
  ];

  const [answer, setAnswer] = useState([]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [lastQuestion, setLastQuestion] = useState(false);

  const changeChoseHandler = (text) => {
    if (answer.includes(text)) {
      answer.splice(answer.indexOf(text), 1);
    } else {
      answer.push(text);
    }

    data = answer;

    console.log(answer);
  };

  const nextQuestionHandler = (e) => {
    e.preventDefault();
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
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

  return (
    <div>
      <p>{questions[currentQuestion].questionText}</p>
      <div>
        {questions[currentQuestion].answer.map((i) => (
          <p
            key={i.id}
            onClick={() => {
              changeChoseHandler(i.answerText);
            }}>
            {i.answerText}
          </p>
        ))}
      </div>
      <button onClick={nextQuestionHandler}>Далее</button>
      <button onClick={backQuestionHandler}>Назад</button>
    </div>
  );
};

export default AskList;
