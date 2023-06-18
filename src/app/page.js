
import Image from "next/image";
import styles from "./page.module.css";
import AskList from "@/components/quiz/AskList";
import Contact from "@/components/contactForm/Contact";

import logo from "../../photo/photo-1/Логотип2.png";

export default function Home() {
  return (
    <div className={styles.containerFlexbox}>
      <div id="first-container">
        <div className={styles.firstContainerPanelContent}>
          <Image width={200} alt="" id="logotip_main" src={logo} />

          <nav className={styles.navbar}>
            <div className={styles.container}>
              <div className={styles.navbar__wrap}>
                <div className={styles.hamb}>
                  <div className={styles.hamb__field} id="hamb">
                    <span className={styles.bar}></span> <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                  </div>
                </div>
                <a href="#" className={styles.logo} id="logo">
                  <img id="logotip_main" src="/photo/photo-1/Логотип2.png" />
                </a>
                <ul className={styles.menu} id="menu">
                  <li>
                    <a id="menu" href="#two-container">
                      Преимущества
                    </a>
                  </li>
                  <li>
                    <a id="menu" href="#two-container">
                      Стоимость
                    </a>
                  </li>
                  <li>
                    <a id="menu-22" href="#three-container">
                      Наши партнеры
                    </a>
                  </li>
                  <li id="munu-phone-container-1">
                    <img
                      id="logotip_WWW"
                      src="/photo/photo-1/min-message.png"
                    />
                    <a id="menu-1" href="#four-container">
                      rubrick@list.ru
                    </a>
                  </li>
                  <li id="munu-phone-container-2">
                    <img id="logotip_WWW" src="/photo/photo-1/min-phone.png" />
                    <a id="menu-1" href="#five-container">
                      +7 937 512-35-50
                    </a>
                  </li>
                  <li>
                    <a id="menu" href="main-six-container">
                      <img
                        id="logotip_wutsup"
                        src="/photo/photo-1/logo_watsupp.png"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className={styles.popup} id="popup"></div>
        </div>

        <div className={styles.firstContainerDown}>
          <div className={styles.firstContainerLeft}>
            <img id="logotip_1" src="/photo/photo-1/Group 61.png" />
            <div className={styles.firstContainerLeftName}>
              <p id="">
                Теплая керамика для любых строительных задач
                <br />
                Выбор из шести популярных брендов в наличии
              </p>
              <button id="button-1">Рассчитать</button>
            </div>
          </div>
          <img id="logotip_12" src="/photo/photo-1/Group 65.png" />
        </div>
      </div>

      <div id="two-container">
        <div className={styles.containerSize}>
          <div className={styles.twoContainerSize}>
            <img id="logotip_2" src="/photo/photo-2/1блок.png " />
            <img id="logotip_2" src="/photo/photo-2/2 блок.png " />
            <img id="logotip_2" src="/photo/photo-2/3блок.png" />
            <img id="logotip_2" src="/photo/photo-2/6 блок.png" />
          </div>
        </div>
      </div>
      <div id="three-container">
        <div className={styles.containerSizeThree}>
          <div className={styles.threeContainerLeft}>
            <h1 id="h1-three-container">Расчет стоимости</h1>
            <p id="h1-three-container-text">
              Ответьте на несколько простых
              <br />
              вопросов и получите стоимость
              <br />
              блоков с доставкой до вашего
              <br />
              <p id="green-text">объекта с выгодой до 20%</p>
            </p>
          </div>
          <div className={styles.threeContainerRight}>QWIZ</div>
        </div>
      </div>
      <div id="four-container">
        <div className={styles.containerSizeFour}>
          <div className={styles.fourContainerFirst}>
            <h1 id="four-container-text">
              Заявка
              <br />
              на звонок
            </h1>
            <p id="p-2">
              Оставьте ваши контактные данные
              <br />и наши специалисты свяжутся с вами
            </p>
            <form id="form-1">
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
            </form>
          </div>
          <div className={styles.fourContainerTwo}>
            <img id="logotip_3" src="/photo/photo-4/Telephone.png" />
          </div>

          <div className={styles.wats}>
            <img id="logotip_40" src="/photo/photo-4/watsupp.png" />
            <p>Написать в Ватсап</p>
          </div>
        </div>
      </div>
      <div id="five-container">
        <div className={styles.containerSize}>
          <div className={styles.fiveContainerDiv}>
            <h2 id="text-five">
              <b>
                Наши
                <br /> партнёры
              </b>
            </h2>
            <img id="logotip_4" src="/photo/photo-5/allBLOCK.png" />
          </div>
        </div>
      </div>
      <div id="main-six-container">
        <div className={styles.containerSizeSix}>
          <div className={styles.sixContainerLeft}>
            <p>ООО “РуБрик”</p>
            <p>г. Москва, ул. Николоямская</p>
            <br /> <p>д. 43, к. 4, пом. 3/9</p>
            <img id="logotip_10" src="/photo/photo-6/footer.png" />
          </div>

          <div className={styles.sixContainerRight}>
            <p>
              ИНН: 9709090610
              <br /> КПП: 770901001
              <br /> ОГРН: 1237700105323
            </p>
            <img id="logotip_10" src="/photo/photo-6/footer-wats.png" />
            <p>order@block.ru</p>
            <p>+7 495 534-32-90</p>
          </div>
        </div>
      </div>
      <AskList></AskList>
      <Contact></Contact>
    </div>
  );
}
