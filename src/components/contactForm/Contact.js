"use client";
import { useEffect, useState } from "react";
import { sendContactForm } from "../utils/api";

import styles from "./contact.css";
import { useMetrica } from 'next-yandex-metrica';
const initialValues = {
  email: "",
  message: "",
};

const initialState = { values: initialValues };

const Contact = () => {
  const [state, setState] = useState(initialState);
  const { reachGoal } = useMetrica();

  const { values } = state;

  const handleChange = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  };

  const onSubmit = async (e) => {
    // e.preventDefault()
    setState((prev) => ({
      ...prev,
    }));

    try {
      await sendContactForm(values);
    } catch (error) {
      reachGoal("form_error");
    }
  };

  return (
    <div id="form_otprav_first">
      <form id="form_otprav_main">
        <div id="classONclass">
          <input
            className="inputLeft"
            type="email"
            name="email"
            placeholder="Ваше имя"
            value={values.email}
            onChange={handleChange}
          />

          <input
            id="form_otprav-two"
            type="text"
            name="message"
            placeholder="+7 123-45-67-89"
            value={values.name}
            onChange={handleChange}
          />
        </div>
      </form>
      <button onClick={onSubmit} id="button-11">
        {" "}
        ОТПРАВИТЬ ЗАЯВКУ{" "}
      </button>
    </div>
  );
};

export default Contact;
