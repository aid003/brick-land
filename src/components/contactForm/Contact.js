"use client";
import { useEffect, useState } from "react";
import { sendContactForm } from "../utils/api";

import styles from './contact.css';
const initialValues = {
  email: "",
  message: ""
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
    <div id="form_otprav_first" >
      <form id="form_otprav_main"  >
        <div  >
            <input 
              className="inputLeft"
              type="email"
              name="email"
              placeholder="Ваше имя"
              value={values.email}
              onChange={handleChange}
            />
        </div>
        <div  >
          <input id="form_otprav-two"
            type="text"
            name="message"
            placeholder="+7 939-210-27"
            value={values.name}
            onChange={handleChange}
          />
        </div>
        
      </form>
      <button onClick={onSubmit} id="button-11"> Продолжить </button>
    </div>
  );
};

export default Contact;
