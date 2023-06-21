"use client";
import styles from "./globals.css";
import style from "./page.module.css";
import Image from "next/image";
//
import AskList from "@/components/quiz/AskList";
import Contact from "@/components/contactForm/Contact";
///1 блок
import logo from "../../photo/photo-1/Логотип2.png";
import Keram_block from "../../photo/photo-1/Керамические блоки.png";
import Min_phone from "../../photo/photo-1/min-phone.png";
import Min_message from "../../photo/photo-1/min-message.png";
import logo_watsupp from "../../photo/photo-1/logo_watsupp.png";
import kirpich from "../../photo/photo-1/Кирпичи.png";
//2 блок
import block_11 from "../../photo/photo-2/1блок.png";
import block_22 from "../../photo/photo-2/2 блок.png";
import block_33 from "../../photo/photo-2/3блок.png";
import block_44 from "../../photo/photo-2/4 блок.png";
///4 блок
import Telephone from "../../photo/photo-4/Telephone.png";
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

import { RxHamburgerMenu } from "react-icons/rx";
import {RxCross1} from "react-icons/rx";

export default function Home() {
  const [activeBurger, setActiveBurger] = useState(false);

  const showBurger = () => {
    activeBurger ? setActiveBurger(false) : setActiveBurger(true);
  };

  return (
    
      <div id="#containerFlexbox">
        <div id="first-container">
          <div
            className={styles.firstContainerPanelContent}
            id="firstContainerPanelContent">
            <Image width={200} alt="" id="logotip_main_1" src={logo} />

            <div onClick={showBurger} className={style.burgerStandart}>
              {activeBurger ? <RxCross1></RxCross1> :<RxHamburgerMenu></RxHamburgerMenu>}
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
                        Преимущества
                      </a>
                    </li>
                    <li>
                      <a id="menu" href="#three-container">
                        Стоимость
                      </a>
                    </li>
                    <li>
                      <a id="menu-22" href="#five-container">
                        Наши партнеры
                      </a>
                    </li>
                    <li id="menu-phone-container-1">
                      <Image alt="" id="logotip_main" src={Min_phone} />
                      <a id="menu-1" href="#four-container">
                        rubrick@list.ru
                      </a>
                    </li>
                    <li id="menu-phone-container-2">
                      <Image alt="" id="logotip_main" src={Min_message} />
                      <a id="menu-1" href="">
                        +7 937 512-35-50
                      </a>
                    </li>
                    <li>
                      <a id="menu" href="#main-six-container">
                        <Image alt="" id="logotip_wutsup" src={logo_watsupp} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div className={styles.popup} id="popup"></div>
          </div>
          <div className={activeBurger ? style.contentScroll : ''} onClick={showBurger}></div>
          {activeBurger && <div className={style.burgerColntainer}>ddd</div>}
          <div
            className={styles.firstContainerDown_main}
            id="firstContainerDown_main">
            <div className={styles.firstContainerDown} id="firstContainerDown1">
              <a href="#" className={styles.logo} id="logo">
                <Image alt="" id="logotip_main" src={Keram_block} />
              </a>
              <p id="firstContainerRightNAme-top">
                ТЁПЛАЯ КЕРАМИКА ДЛЯ ЛЮБЫХ СТРОИТЕЛЬНЫХ ЗАДАЧ
                <br />
                ВЫБОР ИЗ ШЕСТИ ПОПУЛЯРНЫХ БРЕНДОВ В НАЛИЧИИ
              </p>
              <button id="button_111">Рассчитать</button>
            </div>

            <div className={styles.firstContainerLight}>
              <Image alt="" id="logotip_1" src={kirpich} />
            </div>
          </div>
        </div>

        <div id="two-container">
          <div id="containerSize" className={styles.containerSize}>
            <div id="twoContainerSize" className={styles.twoContainerSize}>
              <Image id="logotip_2" src={block_11} />
              <Image id="logotip_2" src={block_22} />
              <Image id="logotip_2" src={block_33} />
              <Image id="logotip_2" src={block_44} />
            </div>
          </div>
        </div>
        <div id="three-container">
          <div className={styles.containerSizeThree} id="containerSizeThree">
            <div className={styles.threeContainerLeft} id="threeContainerLeft">
              <h1 id="h1-three-container">Расчет стоимости</h1>
              <li id="h1-three-container-text">
                Ответьте на несколько простых
                <br />
                вопросов и получите стоимость
                <br />
                блоков с доставкой до вашего
                <br />
                объекта выгодой до 20%
              </li>
            </div>
            <div id="AskList" className={styles.threeContainerRight}>
              <AskList></AskList>
            </div>
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
              <Image id="Telephone" src={Telephone} />
            </div>

            <div className={styles.wats} id="watsupp_class">
              <Image id="watsupp" src={watsupp} />
              <p>Написать в Ватсап</p>
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
                </b>
              </h2>
              <Image id="logotip_3" src={five_7} />
            </div>
          </div>
        </div>
        <div id="main-six-container">
          <div className={styles.containerSizeSix} id="containerSizeSix">
            <div id="sixContainerLeft" className={styles.sixContainerLeft}>
              <p id="rubr">ООО “РуБрик”</p>
              <p>г. Москва, ул. Николоямская</p>
              <br /> <p>д. 43, к. 4, пом. 3/9</p>
              <Image id="log" src={six_2} />
            </div>

            <div id="sixContainerRight" className={styles.sixContainerRight}>
              <p>
                ИНН: 9709090610
                <br /> КПП: 770901001
                <br /> ОГРН: 1237700105323
              </p>
              <Image id="log" src={six_1} />
              <p>order@block.ru</p>
              <p>+7 495 534-32-90</p>
            </div>
          </div>
        </div>
        {/* <AskList></AskList>
      <Contact></Contact> */}
      </div>
    
  );
}
