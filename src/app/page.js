"use client";
// import './reset.css'
import { YandexMetricaProvider } from 'next-yandex-metrica'
import styless from "./reset.css";
import styles from "./globals.css";
import style from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

//
import AskList from "@/components/quiz/AskList";
import Contact from "@/components/contactForm/Contact";
///1 блок
import logo from "../../photo/photo-1/Логотип2.png";
import Keram_block from "../../photo/photo-1/Керамические блоки.png";
import Min_phone from "../../photo/photo-1/min-phone.png";
import Min_ph from "../../photo/photo-1/min-phone.png";
import Min_mess from "../../photo/photo-1/min-message.png";
import Min_message from "../../photo/photo-1/min-message.png";
import logo_watsupp from "../../photo/photo-1/logo_watsupp.png";
import kirpich from "../../photo/photo-1/Кирпичи.png";
//2 блок
import block_11 from "../../photo/photo-2/1 Кружок.png";
import block_22 from "../../photo/photo-2/2 Кружок.png";
import block_33 from "../../photo/photo-2/Vremy Postavki.png";
import block_44 from "../../photo/photo-2/4 Кружок.png";
///4 блок
import Telephone from "../../photo/photo-4/Telephone.png";
import Telephone_big from "../../photo/photo-4/Telephone.png";

import watsupp from "../../photo/photo-4/watsupp.png";
//5 блок
import five_1 from "../../photo/photo-5/1.png";
import five_2 from "../../photo/photo-5/2.png";
import five_3 from "../../photo/photo-5/3.png";
import five_4 from "../../photo/photo-5/4.png";
import five_5 from "../../photo/photo-5/5.png";
import five_6 from "../../photo/photo-5/6.png";
import five_7 from "../../photo/photo-5/allBLOCK.png";
///6 блок

import six_1 from "../../photo/photo-6/footer-wats.png";
import six_2 from "../../photo/photo-6/footer.png";
import { useState } from "react";
////партнеры

import one from "../../photo/photo-6/one.jpg";
import two from "../../photo/photo-6/two.jpg";
import three from "../../photo/photo-6/four.jpg";
import four from "../../photo/photo-6/three.jpg";
import five from "../../photo/photo-6/six.jpg";
import six from "../../photo/photo-6/five.jpg";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from "next/navigation";

export default function Home() {
  const [activeBurger, setActiveBurger] = useState(false);

  const showBurger = () => {
    activeBurger ? setActiveBurger(false) : setActiveBurger(true);
  };

  const router = useRouter();

  const watsAppHandler = () => {
    router.push("https://wa.me/+79683514994");
  };

  return (
    <YandexMetricaProvider
      tagID={94142911}
      initParameters={{ clickmap: true, trackLinks: true, accurateTrackBounce: true }}
    >
    <div id="#containerFlexbox">
      <div id="first-container">
        <div
          className={styles.firstContainerPanelContent}
          id="firstContainerPanelContent">
          <Image width={200} alt="Logotip" id="logotip_main_1" src={logo} />

          <div
            onClick={showBurger}
            className={style.burgerStandart}
            id="showBurger">
            {activeBurger ? (
              <RxCross1></RxCross1>
            ) : (
              <RxHamburgerMenu></RxHamburgerMenu>
            )}
          </div>

          <nav className={styles.navbar} id="nav">
            <div className={styles.container} id="nak">
              <div className={styles.navbar__wrap} id="nal">
                <div className={styles.hamb} id="nad">
                  <div className={styles.hamb__field} id="hamb">
                    <span className={styles.bar}></span>{" "}
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                  </div>
                </div>
                <ul className={styles.menu} id="menu">
                  <li>
                    <a id="menu" href="#two-container">
                      ПРЕИМУЩЕСТВА
                    </a>
                  </li>
                  <li>
                    <a id="menu" href="#three-container">
                      СТОИМОСТЬ
                    </a>
                  </li>
                  <li>
                    <a id="menu-22" href="#five-container">
                      НАШИ ПАРТНЕРЫ
                    </a>
                  </li>
                  <li id="menu-phone-container-1">
                    <Image
                      alt="Icon_watsup"
                      id="logotip_main"
                      src={Min_message}
                    />
                    <a id="menu-1" href="">
                      rubrick@list.ru
                    </a>
                  </li>
                  <li id="menu-phone-container-2">
                    <Image alt="" id="logotip_main" src={Min_ph} />
                    <a id="menu-101" href="">
                      +7 937 512-35-50
                    </a>
                  </li>
                  <li>
                    <a id="menu" href="" onClick={watsAppHandler}>
                      <Image alt="LOGO" id="logotip_wutsup" src={logo_watsupp} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className={styles.popup} id="popup"></div>
        </div>
        <div
          className={activeBurger ? style.contentScroll : ""}
          onClick={showBurger}></div>
        {activeBurger && (
          <div className={style.burgerColntainer}>
            <div className={styles.menu} id="menu-111">
              <a href="#twoContainerSize">Преимущества</a>
            </div>
            <div className={styles.menu} id="menu-111">
              <a href="#containerSizeThree">Расчет стоимости</a>
            </div>
            <div className={styles.menu} id="menu-111">
              {" "}
              <a href="#five-container"> Наши партнеры</a>
            </div>
            <div className={styles.menu} id="menu-114">
              <a href="#sixContainerRight">
                {" "}
                <Image alt="Почта" id="lgotip_logotip_logotip" src={Min_mess} />
                rubrick@list.ru
              </a>
            </div>
            <div className={styles.menu} id="menu-115">
              <a href="#containerSizeFour">
                <Image alt="Телефон" id="lgotip_logotip_logotip" src={Min_ph} />{" "}
                +7 937 512-35-50
              </a>
            </div>
          </div>
        )}
        <div
          className={styles.firstContainerDown_main}
          id="firstContainerDown_main">
          <div className={styles.firstContainerDown} id="firstContainerDown1">
            <a href="#" className={styles.logo} id="logo">
              <Image
                alt="<brend_name"
                id="logotip_main_main"
                src={Keram_block}
              />
            </a>
            <p id="firstContainerRightNAme-top">
              ТЁПЛАЯ КЕРАМИКА ДЛЯ ЛЮБЫХ СТРОИТЕЛЬНЫХ ЗАДАЧ
              <br />
              ВЫБОР ИЗ ШЕСТИ ПОПУЛЯРНЫХ БРЕНДОВ В НАЛИЧИИ
            </p>
            <a id="linkAr" href="#threeContainerLeft">
              <button className={styles.button_111} id="button_111">
                Рассчитать
              </button>
            </a>
          </div>

          <div id="firstContainerLight" className={styles.firstContainerLight}>
            <Image alt="Brend" id="logotip_1" src={kirpich} />
          </div>
          <div className={styles.firstbuttcontainer} id="firstbuttcontainer">
            <a id="linkArror" href="#threeContainerLeft">
              <button className={styles.button_222} id="button_222">
                Рассчитать{" "}
              </button>
            </a>
          </div>
        </div>
      </div>

      <div id="two-container">
        <div id="containerSize" className={styles.containerSize}>
          <div id="twoContainerSize" className={styles.twoContainerSize}>
            <Image id="logotip_2" alt="Блок-1" src={block_11} />
            <Image id="logotip_2" alt="Блок-2" src={block_22} />
            <Image id="logotip_2" alt="Блок-3" src={block_33} />
            <Image id="logotip_2" alt="Блок-4" src={block_44} />
          </div>
        </div>
      </div>
      <div id="three-container">
        <div className={styles.containerSizeThree} id="containerSizeThree">
          <div className={styles.threeContainerLeft} id="threeContainerLeft">
            <h1 id="h1-three-container">Расчет стоимости</h1>
            <p id="h1-three-container-text">
              Ответьте на несколько простых
              <br />
              вопросов и получите стоимость
              <br />
              блоков с доставкой до вашего
              <br />
              <b id="black">объекта c выгодой до 20%</b>
            </p>
          </div>
          <AskList id="Askitlist001"></AskList>
        </div>
      </div>
      <div className={styles.Four_container} id="Four_container">
        <div className={styles.containerSizeFour} id="containerSizeFour">
          <div className={styles.fourContainerFirst} id="fourContainerFirst">
            <h1 id="four-container-text">Заявка на звонок</h1>
            <p id="p-2">
              Оставьте ваши контактные данные
              <br />и наши специалисты свяжутся с вами
            </p>
            {/* <form id="form-1">
              <div className={styles.fourContainerLeftForm}>
                <input type="text" id="form-control-four" placeholder="Имя" />
                <input
                  type="text"
                  id="form-control-four"
                  placeholder="+7 910 154-10-59"
                />
              </div>
              <div className={styles.fourContainerLeftFormNum}>
                <button id="button-2">ОТПРАВИТЬ ЗАЯВКУ</button>
              </div>
            </form> */}
            <Contact></Contact>
          </div>
          <div className={styles.fourContainerTwo} id="Telephone">
            <Image
              id="Telephone_big "
              alt="Блок с ТЕЛЕФОн для связи"
              src={Telephone_big}
            />
          </div>

          <div className={styles.wats} id="watsupp_class">
            {" "}
            <a
              id="WWWWW"
              href="https://api.whatsapp.com/send/?phone=%2B79683514994&text&type=phone_number&app_absent=0">
              <Image
                id="watsupp"
                alt="Картинка Для свзя по Телефону"
                src={watsupp}
              />
              <p id="watsup_text">Написать в Ватсап</p>
            </a>
          </div>
        </div>
      </div>
      <div id="five-container">
        <div id="containerSize" className={styles.containerSize}>
          <div id="fiveContainerDiv" className={styles.fiveContainerDiv}>
            <h2 id="text-five">
              <b>
                Наши
                <br /> партнёры
                <div id="partner_class" className={styles.partner}>
                  <Image id="one" alt="Наш партнер" src={one} />
                  <Image id="one" alt="Наш партнер" src={two} />
                  <Image id="one" alt="Наш партнер" src={three} />
                  <Image id="one" alt="Наш партнер" src={four} />
                  <Image id="one" alt="Наш партнер" src={five} />
                </div>
              </b>
            </h2>
            <Image id="logotip_3" alt="Наш партнер" src={five_7} />
          </div>
        </div>
      </div>
      <div id="main-six-container">
        <div className={styles.containerSizeSix} id="containerSizeSix">
          <div id="sixContainerLeft" className={styles.sixContainerLeft}>
            <p id="rubr">ООО “РуБрик”</p>
            <p>г. Москва, ул. Николоямская</p>
            <br /> <p>д. 43, к. 4, пом. 3/9</p>
            <Image id="log" alt="Иконка бренда" src={six_2} />
          </div>

          <div id="sixContainerRight" className={styles.sixContainerRight}>
            <p>
              ИНН: 9709090610
              <br /> КПП: 770901001
              <br /> ОГРН: 1237700105323
            </p>
            <Image id="log" alt="Иконка бренда" src={six_1} />
            <p>rubrick@list.ru</p>
            <p>+7 937 512-35-50</p>
          </div>
        </div>
      </div>
      {/* <AskList></AskList>
      <Contact></Contact> */}
    </div>
    </YandexMetricaProvider>
  );
}
