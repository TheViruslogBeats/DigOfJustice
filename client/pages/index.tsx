import React, { useRef, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/header/Header";
import ConfInfo from "../components/confInfo/ConfInfo";
import bgModal from "../public/img/bgModal.svg";
import { motion } from "framer-motion";

export default function Home() {
  const [works, setWorks] = useState(0);
  const [programm, setProgramm] = useState(0);
  const [section, setSection] = useState(0);
  const [expert, setExpert] = useState(0);
  const [expertModal, setExpertModal] = useState(false);
  // Refs
  const fullName = useRef<HTMLInputElement | null>(null);
  const workPlace = useRef<HTMLInputElement | null>(null);
  const studyPlace = useRef<HTMLInputElement | null>(null);
  const acDegree = useRef<HTMLInputElement | null>(null);
  const docTheme = useRef<HTMLInputElement | null>(null);
  const fullNameSupervisor = useRef<HTMLInputElement | null>(null);
  const acDegreeSupervisor = useRef<HTMLInputElement | null>(null);
  const supervisorPosition = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const phNum = useRef<HTMLInputElement | null>(null);
  const formPartic = useRef<HTMLSelectElement | null>(null);

  let speakers = [
    {
      id: 0,
      src: "https://cdn.discordapp.com/attachments/934798571688054914/1042091128838705272/Rectangle_7.png",
      alt: "speaker",
      firstName: "Бакаев",
      middleName: "Анатолий",
      lastName: "Александрович",
    },
    {
      id: 1,
      src: "https://cdn.discordapp.com/attachments/934798571688054914/1042091128838705272/Rectangle_7.png",
      alt: "speaker",
      firstName: "Бакаев",
      middleName: "Анатолий",
      lastName: "Александрович",
    },
    {
      id: 2,
      src: "https://cdn.discordapp.com/attachments/934798571688054914/1042091128838705272/Rectangle_7.png",
      alt: "speaker",
      firstName: "Бакаев",
      middleName: "Анатолий",
      lastName: "Александрович",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>ЦИФРОВИЗАЦИЯ ПРАВОСУДИЯ</title>
        <meta
          name="description"
          content="Национальная научно-практическая конференция «Цифровизация правосудия: проблемы и перспективы» - уникальная площадка для диалога ученых и практиков об актуальных вопросах цифровой трансформации и информационной безопасности правосудия, разработки пилотных проектов использования цифровых технологий и платформенных решений в судебной деятельности. Соединяя информационные технологии и правосудие мы неизбежно сталкиваемся с проблемой определения предела допустимости использования искусственного интеллекта, семантики машиночитаемого права, этики искусственного интеллекта в судебной деятельности, ответственности за решения, принятые автономным интеллектуальным агентом, митигирования сопряженных с цифровой трансформацией форм судебной деятельности рисков на фоне сложной многогранной природы правосудия, его дискреционной, правоинтерпретационной и нормотворческой составляющей. Доктрина цифровизации судебной системы требует точных определений трансграничных понятий и категорий, диалога ученых и практиков в сфере IT, информационной безопасности, права. Мы презентуем результаты научно-исследовательских работ и проектов учебно-научного цента «Этика искусственного интеллекта в судебной деятельности», созданные междисциплинарными научными группами. Мы не выбираем дорогу, мы определяем путь"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ConfInfo />
      <div className={styles.programm}>
        <h1 className="titleH1">ПРОГРАММА</h1>
        <div className={styles.programmButtons}>
          <button
            className={
              programm === 0
                ? styles.programmButton + " " + styles.programmButtonActive
                : styles.programmButton
            }
            onClick={() => {
              setProgramm(0);
            }}
          >
            СЕКЦИИ
          </button>
          <button
            className={
              programm === 1
                ? styles.programmButton + " " + styles.programmButtonActive
                : styles.programmButton
            }
            onClick={() => {
              setProgramm(1);
            }}
          >
            КРУГЛЫЙ СТОЛ
          </button>
          <button
            className={
              programm === 2
                ? styles.programmButton + " " + styles.programmButtonActive
                : styles.programmButton
            }
            onClick={() => {
              setProgramm(2);
            }}
          >
            ПАНЕЛЬНАЯ ДИСКУССИЯ
          </button>
        </div>
        {programm === 0 ? (
          <div className={styles.programmContainer}>
            <div className={styles.programmMainContainer}>
              <div className={styles.programmMainContainer1}>
                <p>Торжественное открытие</p>
                <p>Малый зал Ученого совета</p>
              </div>
              <div className={styles.programmMainContainer2}>
                <p>9 ДЕКАБРЯ</p>
                <p>10.00</p>
              </div>
            </div>
            <div className={styles.programmMainContainer}>
              <div className={styles.programmMainContainer1}>
                <p>Торжественное открытие</p>
                <p>Малый зал Ученого совета</p>
              </div>
              <div className={styles.programmMainContainer2}>
                <p>9 ДЕКАБРЯ</p>
                <p>10.00</p>
              </div>
            </div>
            <div className={styles.programmMainContainer}>
              <div className={styles.programmMainContainer1}>
                <p>Торжественное открытие</p>
                <p>Малый зал Ученого совета</p>
              </div>
              <div className={styles.programmMainContainer2}>
                <p>9 ДЕКАБРЯ</p>
                <p>10.00</p>
              </div>
            </div>
            <div className={styles.programmSectionbtns}>
              <button
                onClick={() => {
                  setSection(0);
                }}
                className={
                  section === 0
                    ? styles.programmSectionbtn +
                      " " +
                      styles.programmSectionbtnActive
                    : styles.programmSectionbtn
                }
              >
                Свободное программное обеспечение и цифровая трансформация права
              </button>
              <button
                className={
                  section === 1
                    ? styles.programmSectionbtn +
                      " " +
                      styles.programmSectionbtnActive
                    : styles.programmSectionbtn
                }
                onClick={() => {
                  setSection(1);
                }}
              >
                Цифровые технологии в судебной системе и защита данных в сфере
                судопроизводства
              </button>
              <button
                className={
                  section === 2
                    ? styles.programmSectionbtn +
                      " " +
                      styles.programmSectionbtnActive
                    : styles.programmSectionbtn
                }
                onClick={() => {
                  setSection(2);
                }}
              >
                Цифровые и интеллектуальные методы принятия решений в судебной
                деятельности
              </button>
              <button
                className={
                  section === 3
                    ? styles.programmSectionbtn +
                      " " +
                      styles.programmSectionbtnActive
                    : styles.programmSectionbtn
                }
                onClick={() => {
                  setSection(3);
                }}
              >
                Современные технологии мониторинга и анализа данных в цифровой
                криминалистике
              </button>
              <button
                className={
                  section === 4
                    ? styles.programmSectionbtn +
                      " " +
                      styles.programmSectionbtnActive
                    : styles.programmSectionbtn
                }
                onClick={() => {
                  setSection(4);
                }}
              >
                Предметно-ориентированные информационные системы в правосудии:
                возможности, проблемы, перспективы
              </button>
              <button
                className={
                  section === 5
                    ? styles.programmSectionbtn +
                      " " +
                      styles.programmSectionbtnActive
                    : styles.programmSectionbtn
                }
                onClick={() => {
                  setSection(5);
                }}
              >
                Облачные технологии и ЦОД: перспективы использования в судебной
                деятельности
              </button>
              <button
                className={
                  section === 6
                    ? styles.programmSectionbtn +
                      " " +
                      styles.programmSectionbtnActive
                    : styles.programmSectionbtn
                }
                onClick={() => {
                  setSection(6);
                }}
              >
                Анализ и мониторинг социальных сетей: аспекты применения и
                актуальность
              </button>
            </div>
          </div>
        ) : programm === 1 ? (
          <div className={styles.programmContainer}>3</div>
        ) : programm === 2 ? (
          <div className={styles.programmContainer}>4</div>
        ) : null}
      </div>
      <div className={styles.speakers}>
        <h1 className="titleH1">ЭКСПЕРТЫ</h1>
        <div className={styles.speakersContainer}>
          {speakers.map((speaker) => {
            return (
              <div
                className={styles.speaker}
                key={speaker.id}
                onClick={() => {
                  setExpert(speaker.id);
                  setExpertModal(true);
                }}
              >
                <img src={speaker.src} alt={speaker.alt} />
                <div>
                  <p>{speaker.firstName}</p>
                  <p>{speaker.middleName}</p>
                  <p>{speaker.lastName}</p>
                </div>
              </div>
            );
          })}
        </div>
        <motion.div
          // style={{ display: expertModal ? "block" : "none" }}
          initial={{ opacity: 0, clipPath: "circle(0%)" }}
          animate={{
            opacity: expertModal ? 1 : 0, 
            clipPath: expertModal ? "circle(100%)" : "circle(0%)"
          }}
          exit={{clipPath: expertModal ? "circle(0%)" : "circle(100%)" }}
          transition={{ duration: 2, type: "spring" }}
          onClick={() => {
            setExpertModal(false);
          }}
          className={styles.speakersBlackBG}
        ></motion.div>
        <div
          style={{
            display: expertModal ? "block" : "none",
            background: `url(${bgModal.src}) no-repeat #fff`,
          }}
          className={styles.speakersModal}
        >
          <img
            src={speakers[expert].src}
            alt={speakers[expert].alt}
            className={styles.speakersModalImage}
          />
        </div>
      </div>
      <div className={styles.register}>
        <h1 className="titleH1">РЕГИСТРАЦИЯ</h1>
        <form className={styles.registerForm}>
          <input
            type="text"
            placeholder="ФИО"
            className={styles.registerInput}
            ref={fullName}
          />
          <select
            placeholder="Чем в данный момент занимаетесь?"
            className={styles.registerInput}
            value={works}
            onChange={(e) => {
              setWorks(parseInt(e.target.value));
            }}
          >
            <option value="0">Учусь</option>
            <option value="1">Работаю</option>
          </select>
          {works === 1 ? (
            <>
              <input
                type="text"
                placeholder="Место работы и должность"
                className={styles.registerInput}
                ref={workPlace}
              />
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Место обучения и специальность"
                className={styles.registerInput}
                ref={studyPlace}
              />
            </>
          )}
          <input
            type="text"
            placeholder="Учёная степень или учёное звание"
            className={styles.registerInput}
            ref={acDegree}
          />
          <input
            type="text"
            placeholder="Тема доклада"
            className={styles.registerInput}
            ref={docTheme}
          />
          <input
            type="text"
            placeholder="ФИО научного руководителя"
            className={styles.registerInput}
            ref={fullNameSupervisor}
          />
          <input
            type="text"
            placeholder="Звание научного руководителя"
            className={styles.registerInput}
            ref={acDegreeSupervisor}
          />
          <input
            type="text"
            placeholder="Должность научного руководителя"
            className={styles.registerInput}
            ref={supervisorPosition}
          />
          <input
            type="email"
            placeholder="Почта"
            className={styles.registerInput}
            ref={email}
          />
          <input
            type="tel"
            className={styles.registerInput}
            placeholder="Номер телефона"
            ref={phNum}
          />
          <select
            placeholder="Формат участия"
            className={styles.registerInput}
            ref={formPartic}
          >
            <option value="1">Очно</option>
            <option value="2">Онлайн</option>
          </select>
          <button className={styles.registerButton}>РЕГИСТРАЦИЯ</button>
        </form>
      </div>
    </div>
  );
}
