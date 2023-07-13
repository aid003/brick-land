// import YandexMetrika from "next-yandex-metrika";

export const sendContactForm = async (data) => {
    fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((res) =>{
    !res ? YandexMetrika(94142911,'reachGoal','form_error') : ""
  })
  
};
