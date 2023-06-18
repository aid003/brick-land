"use client";
import { useEffect, useState } from "react";
import { sendContactForm } from "../utils/api";
import { data } from "../quiz/AskList";
import styles from '../manda.module.css'

const initialValues = {
  email: "",
  message: "",
  data: "",
};

const initialState = { values: initialValues };

const Contact = () => {
  const [state, setState] = useState(initialState);

  const { values } = state;

  const handleChange = ({ target }) => {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
        data: data,
      },
    }));
  };

  const onSubmit = async (e) => {
    // e.preventDefault()
    setState((prev) => ({
      ...prev,
    }));
    await sendContactForm(values);
  };

  return (
    <div>
      <form>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Ваш Email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          name="message"
          placeholder="Ваш пароль"
          value={values.name}
          onChange={handleChange}
        />
        <button onClick={onSubmit}>Продолжить</button>
      </form>
    </div>
  );
};

export default Contact;
