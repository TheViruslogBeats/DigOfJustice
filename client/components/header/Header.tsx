import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./styles.module.scss";

import { SERVER_URL } from "../../state/api";
import image1 from "../../public/img/image1.png";
import image2 from "../../public/img/image2.png";

import { HiMenu } from "react-icons/hi";
import { HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";

import headerState from "../../state/headerState";

import PartnerBlock from "./components/PartnerBlock";

interface props {
  regOpened: boolean;
}

const Header = (props: props) => {
  const [modal, setModal] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [colorOpacity, setColorOpacity] = useState(0);
  const [backdropBlur, setBackdropBlur] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  const calculatePercents = (max: number, maxpercent: number, now: number) => {
    if ((now * maxpercent) / max > maxpercent) {
      return maxpercent;
    }
    return (now * maxpercent) / max;
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setColorOpacity(calculatePercents(500, 75, scroll));
      setBackdropBlur(calculatePercents(500, 5, scroll));
    }, 0);
    return () => clearTimeout(timeout);
  }, [scroll]);

  const [title, setTitle] = useState([
    {
      text: "I НАЦИОНАЛЬНАЯ НАУЧНО - ПРАКТИЧЕСКАЯ КОНФЕРЕНЦИЯ",
      bold: false,
    },
    {
      text: "ЦИФРОВИЗАЦИЯ ПРАВОСУДИЯ: ПРОБЛЕМЫ И ПЕРСПЕКТИВЫ",
      bold: true,
    },
  ]);

  const [place, setPlace] = useState([
    "МОСКВА, СТРОМЫНКА, 20",
    "ПРОСПЕКТ ВЕРНАДСКОГО, 78 КОРПУС Е",
  ]);

  const [date, setDate] = useState("ДЕКАБРЬ 9/12/13/14/15/16 2022");

  const [buttons, setButtons] = useState([
    {
      text: "О КОНФЕРЕНЦИИ",
      onclick: () => {
        headerState.goToElement(headerState.confoffsetTop);
      },
    },
    {
      text: "ПРОГРАММА",
      onclick: () => {
        headerState.goToElement(headerState.progoffsetTop);
      },
    },
    {
      text: "ЭКСПЕРТЫ",
      onclick: () => {
        headerState.goToElement(headerState.speakeroffsetTop);
      },
    },
    {
      text: "ТРЕБОВАНИЯ К ПУБЛИКАЦИИ",
      onclick: () => {
        headerState.downloadReq();
      },
    },
  ]);

  return (
    <div
      className={styles.header}
      style={{
        background: ` url(${SERVER_URL}/img/background/bg.jpg) no-repeat`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
      }}
    >
      <div className={styles.bgHeader}>
        <motion.header
          className={styles.topBar}
          initial={{
            translateY: "-30%",
            opacity: 0,
            backgroundColor: `hsl(196, 40%, 38%, 0)`,
            backdropFilter: `blur(0px)`,
          }}
          animate={{
            translateY: "0%",
            opacity: 1,
            backgroundColor: `hsl(196, 40%, 38%, 0.${colorOpacity})`,
            backdropFilter: `blur(${backdropBlur}px)`,
          }}
          transition={{ duration: 1, type: "spring" }}
        >
          <div className={styles.topBarLeft}>
            <div className={styles.topBarLeftCtn}>
              <Image src={image1} alt="Суд" />
              <p className={styles.headerP1}>МОСКОВСКИЙ ГОРОДСКОЙ СУД</p>
            </div>
            <div className={styles.Vline}></div>
            <div className={styles.topBarLeftCtn}>
              <Image src={image2} alt="МИРЭА" />
              <p className={styles.headerP2}>
                ИНСТИТУТ КИБЕРБЕЗОПАСНОСТИ И ЦИФРОВЫХ ТЕХНОЛОГИЙ
              </p>
            </div>
            <button
              className={styles.topBarButton + " " + styles.topBarButtonPartner}
              onClick={() => {
                setModal(true);
              }}
            >
              ПАРТНЕРЫ
            </button>
          </div>
          <nav className={styles.topBarRight}>
            {buttons.map((b, i) => {
              return (
                <button key={i} className={styles.topBarButton} onClick={b.onclick}>
                  {b.text}
                </button>
              );
            })}
            {/* <button
              className={styles.topBarButton}
              onClick={() => {
                headerState.goToElement(headerState.confoffsetTop);
              }}
            >
              О КОНФЕРЕНЦИИ
            </button>
            <button
              onClick={() => {
                headerState.goToElement(headerState.progoffsetTop);
              }}
              className={styles.topBarButton}
            >
              ПРОГРАММА
            </button>
            <button
              onClick={() => {
                headerState.goToElement(headerState.speakeroffsetTop);
              }}
              className={styles.topBarButton}
            >
              ЭКСПЕРТЫ
            </button>
            <button
              onClick={() => {
                headerState.downloadReq();
              }}
              className={styles.topBarButton}
            >
              ТРЕБОВАНИЯ К ПУБЛИКАЦИИ
            </button> */}
            <button
              onClick={() => {
                setSidebar(true);
              }}
              className={styles.topBarButtonMobile}
            >
              <HiMenu />
            </button>
          </nav>
        </motion.header>
        <div className={styles.headerInfo + " mx-auto"}>
          <motion.p
            initial={{ translateX: "-20%", opacity: 0 }}
            animate={{ translateX: "0%", opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            className={styles.leftInfo}
          >
            {title.map((t) => {
              if (t.bold) {
                return (
                  <>
                    <b>{t.text}</b>
                    <br />
                  </>
                );
              } else {
                return (
                  <>
                    {t.text}
                    <br />
                  </>
                );
              }
            })}
          </motion.p>
          <motion.div
            initial={{ translateX: "20%", opacity: 0 }}
            animate={{ translateX: "0%", opacity: 1 }}
            transition={{ duration: 3, type: "spring" }}
            className={styles.rightInfo + " flex-column"}
          >
            <div>
              <HiOutlineLocationMarker />
              <p style={{ width: "228px" }}>
                <b>МЕСТО ВСТРЕЧИ:</b> <br />
                {place.map((t) => (
                  <>
                    {t}
                    <br />
                  </>
                ))}
              </p>
            </div>
            <div style={{ alignSelf: "end" }}>
              <p style={{ width: "220px", textAlign: "right" }}>
                <b>ДАТЫ ПРОВЕДЕНИЯ:</b> <br /> {date}
              </p>
              <HiOutlineCalendar />
            </div>
            <button
              onClick={() => {
                headerState.goToElement(headerState.regoffsetTop);
              }}
              disabled={!props.regOpened}
            >
              {props.regOpened ? "РЕГИСТРАЦИЯ" : "РЕГИСТРАЦИЯ ЗАКРЫТА"}
            </button>
          </motion.div>
        </div>
      </div>
      <motion.div
        onClick={() => {
          setModal(false);
          setSidebar(false);
        }}
        initial={{ opacity: 0, clipPath: "circle(0%)" }}
        animate={{
          opacity: modal || sidebar ? 1 : 0,
          clipPath: modal || sidebar ? "circle(100%)" : "circle(0%)",
        }}
        transition={{ duration: 1, type: "spring" }}
        className="posFix blackBG"
      ></motion.div>
      <motion.div
        className={styles.mobileSidebar + " flex-column gap16"}
        initial={{ transform: "translate(100%, -50%)", opacity: 0 }}
        animate={{
          transform: sidebar ? "translate(0%, -50%)" : "translate(100%, -50%)",
          opacity: sidebar ? 1 : 0,
        }}
        transition={{ duration: 0.25, type: "tween" }}
      >
        <h2>МЕНЮ</h2>
        <button
          className={styles.topBarButtonSidebar}
          onClick={() => {
            setSidebar(false);
            headerState.goToElement(headerState.confoffsetTop);
          }}
        >
          О КОНФЕРЕНЦИИ
        </button>
        <button
          onClick={() => {
            setSidebar(false);
            headerState.goToElement(headerState.progoffsetTop);
          }}
          className={styles.topBarButtonSidebar}
        >
          ПРОГРАММА
        </button>
        <button
          onClick={() => {
            setSidebar(false);
            headerState.goToElement(headerState.speakeroffsetTop);
          }}
          className={styles.topBarButtonSidebar}
        >
          ЭКСПЕРТЫ
        </button>
        <button
          onClick={() => {
            setSidebar(false);
            headerState.downloadReq();
          }}
          className={styles.topBarButtonSidebar}
        >
          ТРЕБОВАНИЯ К ПУБЛИКАЦИИ
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, clipPath: "circle(0%)" }}
        animate={{
          opacity: modal ? 1 : 0,
          clipPath: modal ? "circle(100%)" : "circle(0%)",
        }}
        transition={{ duration: 2, type: "spring" }}
        className={styles.PartnerModal + " posFix"}
      >
        <PartnerBlock />
      </motion.div>
    </div>
  );
};

export default Header;
