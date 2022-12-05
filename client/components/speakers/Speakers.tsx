import { motion } from "framer-motion";
import React, { useState } from "react";
import bgModal from "../../public/img/bgModal.svg";
import styles from "./styles.module.scss";
import Image from "next/image";

let speakers = [
  {
    id: 13,
    src: "https://api.virusbeats.ru/img/speakers/(1).png",
    alt: "speaker",
    firstName: "Кашицин",
    middleName: "Владимир",
    lastName: "Петрович",
    acDegree: "кандидат педагогических наук",
    acTitle: "",
    honorTitle: "",
    position:
      "Советник Генерального директора, Департамент цифровизации образования, АО «Рт Лабс»",
    description: "",
  },
  {
    id: 1,
    src: "https://api.virusbeats.ru/img/speakers/(2).png",
    alt: "speaker",
    firstName: "Иванова",
    middleName: "Ирина",
    lastName: "Алексеевна",
    acDegree: "Кандидат технических наук",
    acTitle: "Доцент",
    honorTitle: "",
    position:
      "заведующий кафедрой «Цифровые технологии обработки данных» Института кибербезорасности и цифровых технологий",
    description:
      "Специалист в области анализа данных,эксперт в области анализа данных и искусственного интеллекта,эксперт проекта «Инженеры будущего»,эксперт платформы Национальная техническая инициатива",
  },
  {
    id: 2,
    src: "https://api.virusbeats.ru/img/speakers/(3).png",
    alt: "speaker",
    firstName: "Козачок ",
    middleName: "Александр",
    lastName: "Васильевич",
    acDegree: "Доктор технических наук",
    acTitle: "",
    honorTitle: "",
    position:
      "Сотрудник Академии Федеральной службы безопасности Российской Федерации»",
    description: "",
  },
  {
    id: 3,
    src: "https://api.virusbeats.ru/img/speakers/(4).png",
    alt: "speaker",
    firstName: "Сальников ",
    middleName: "Константин ",
    lastName: "Евгеньевич",
    acDegree: "",
    acTitle: "Доцент",
    honorTitle: "",
    position:
      "Директор АНО Центр судебных исследований «Экспертология», доцент кафедры «экономической экспертизы и финансового мониторинга» (кафедра ЭЭиФМ) Института кибербезорасности и цифровых технологий",
    description:
      "Имеет медали «За безупречную службу» III степени, благодарность Председателя СК России А.И. Бастрыкина от 09.11.2015 ",
  },
  {
    id: 4,
    src: "https://api.virusbeats.ru/img/speakers/(5).png",
    alt: "speaker",
    firstName: "Кулагин",
    middleName: "Владимир",
    lastName: "Петрович",
    acDegree: "доктор технических наук,  кандидат юридических наук",
    acTitle: "",
    honorTitle: "",
    position:
      "Заведующий кафедрой «Аппаратного, программного и математического обеспечения вычислительных систем, Институт информационных технологий»",
    description:
      "Премия Президента Российской Федерации в области образования за 2002 год за инновационную работу для учебных заведений высшего профессионального образования и органов управления образованием субъектов Российской Федерации «Разработка и внедрение информационно-образовательного комплекса по геоинформатике и геоинформационным технологиям» (2002 год)",
  },
  {
    id: 5,
    src: "https://api.virusbeats.ru/img/speakers/(6).png",
    alt: "speaker",
    firstName: "Тымбай ",
    middleName: "Сергей ",
    lastName: "Алексеевич",
    acDegree: "",
    acTitle: "",
    honorTitle: "",
    position:
      "Директор по обеспечению цифровой трансформации, Заместитель старшего директора по цифровой трансформации НИУ ВШЭ",
    description: "",
  },
  {
    id: 6,
    src: "https://api.virusbeats.ru/img/speakers/(7).png",
    alt: "speaker",
    firstName: "Смирнов ",
    middleName: "Алексей ",
    lastName: "Владимирович",
    acDegree: "",
    acTitle: "",
    honorTitle: "",
    position: "Генеральный директор «Базальт СПО»",
    description: "Член правления «Руссофт»",
  },
  {
    id: 7,
    src: "https://api.virusbeats.ru/img/speakers/(8).png",
    alt: "speaker",
    firstName: "Сибирская",
    middleName: "Е",
    lastName: "В",
    acDegree: "",
    acTitle: "",
    honorTitle: "",
    position: "",
    description: "",
  },
  {
    id: 8,
    src: "https://api.virusbeats.ru/img/speakers/(9).png",
    alt: "speaker",
    firstName: "Степанова",
    middleName: "И",
    lastName: "В",
    acDegree: "",
    acTitle: "",
    honorTitle: "",
    position: "",
    description: "",
  },
  {
    id: 9,
    src: "https://api.virusbeats.ru/img/speakers/(10).png",
    alt: "speaker",
    firstName: "Никульчев",
    middleName: "Евгений",
    lastName: "Витальевич",
    acDegree: "Доктор технических наук,  кандидат юридических наук",
    acTitle: "ПРОФЕССОР",
    honorTitle:
      "Заслуженный юрист Российской Федерации, Почётный работник высшего профессионального образования",
    position:
      "Проректор по научной работе НОУ ВПО Московский технологический институт «ВТУ»",
    description: "Обладатель почётного учёного звания «Профессор РАО»",
  },
  {
    id: 10,
    src: "https://api.virusbeats.ru/img/speakers/(11).png",
    alt: "speaker",
    firstName: "Плешаков",
    middleName: "Владимир",
    lastName: "Андреевич",
    acDegree: "Кандидат педагогических наук",
    acTitle: "Доцент",
    honorTitle:
      "Заслуженный юрист Российской Федерации, Почётный работник высшего профессионального образования",
    position:
      "Доцент кафедры социальной педагогики и психологии факультета педагогики и психологии ФГБОУ ВПО «Московский педагогический государственный университет»",
    description:
      "Ученый секретарь диссертационного совета при МПГУ, соучредитель, научный консультант и тренер компании «Искусство тренинга», лауреат именной стипендии Правительства РФ (2000), Президента РФ (2001) за научные успехи, победитель конкурса на право получения грантов Президента РФ (2010)",
  },
  {
    id: 11,
    src: "https://api.virusbeats.ru/img/speakers/(12).png",
    alt: "speaker",
    firstName: "Халабия",
    middleName: "Рустам",
    lastName: "Фарук",
    acDegree: "Кандидат технических наук",
    acTitle: "Доцент",
    honorTitle:
      "Заслуженный юрист Российской Федерации, Почётный работник высшего профессионального образования",
    position: `Доцент - Кафедра КБ-5 «Аппаратного, программного и математического обеспечения вычислительных систем »`,
    description: "",
  },
  {
    id: 12,
    src: "https://api.virusbeats.ru/img/speakers/(13).png",
    alt: "speaker",
    firstName: "Богатырев",
    middleName: "Сергей",
    lastName: "Индрисович",
    acDegree: "Кандидат экономических наук",
    acTitle: "Доцент",
    honorTitle:
      "Почетный сотрудник органов налоговой полиции,  почетный сотрудник органов наркоконтроля",
    position:
      "Заведующий кафедрой «экономической экспертизы и финансового мониторинга» (кафедра ЭЭиФМ) Института кибербезопасности и цифровых технологий",
    description: "Генерал-майор полиции",
  },
  {
    id: 0,
    src: "https://api.virusbeats.ru/img/speakers/(14).png",
    alt: "speaker",
    firstName: "Бакаев",
    middleName: "Анатолий",
    lastName: "Александрович",
    acDegree: "Доктор исторических наук,  кандидат юридических наук",
    acTitle: "ПРОФЕССОР",
    honorTitle:
      "Заслуженный юрист Российской Федерации, Почётный работник высшего профессионального образования",
    position:
      "Директор Института кибербезопасности и цифровых технологий, заведующий кафедрой «Правовое обеспечение национальной безопасности»",
    description:
      "Академик РАЕН, Председатель Координационного совета Института кибербезорасности и цифровых технологий и Московского городского суда",
  },
];

const Speakers = () => {
  const [expert, setExpert] = useState(0);
  const [expertModal, setExpertModal] = useState(false);

  return (
    <div className={styles.speakers + " mx-auto"}>
      <h1 className="titleH1">ЭКСПЕРТЫ</h1>
      <div className={styles.speakersContainer}>
        {speakers
          .sort((a, b) => a.id - b.id)
          .map((speaker) => {
            return (
              <div
                className={styles.speaker}
                key={speaker.id}
                onClick={() => {
                  setExpert(speaker.id);
                  setExpertModal(true);
                }}
              >
                <Image width={340} height={457} src={speaker.src} alt={speaker.alt} />
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
          clipPath: expertModal ? "circle(100%)" : "circle(0%)",
        }}
        exit={{ clipPath: expertModal ? "circle(0%)" : "circle(100%)" }}
        transition={{ duration: 2, type: "spring" }}
        onClick={() => {
          setExpertModal(false);
        }}
        className={styles.speakersBlackBG}
      ></motion.div>
      <motion.div
        style={{
          background: `url(${bgModal.src}) no-repeat #fff`,
        }}
        initial={{ opacity: 0, clipPath: "circle(0%)" }}
        animate={{
          opacity: expertModal ? 1 : 0,
          clipPath: expertModal ? "circle(100%)" : "circle(0%)",
        }}
        exit={{ clipPath: expertModal ? "circle(0%)" : "circle(100%)" }}
        transition={{ duration: 2, type: "spring" }}
        className={styles.speakersModal}
      >
        <div>
          <Image
            width={300}
            height={530}
            src={speakers[expert].src}
            alt={speakers[expert].alt}
            className={styles.speakersModalImage}
          />
        </div>
        <div>
          <p className={styles.speakerFullName}>
            {speakers[expert].firstName}
            <br />
            {speakers[expert].middleName}
            <br />
            {speakers[expert].lastName}
          </p>
          <ul className="flex-column">
            {speakers[expert].acDegree.length > 0 && (
              <li>
                <h3 className={styles.speakerLiTitle}>УЧЕНАЯ СТЕПЕНЬ: </h3>
                <p className={styles.speakerLiPr}>
                  {speakers[expert].acDegree}
                </p>
              </li>
            )}
            {speakers[expert].acTitle.length > 0 && (
              <li>
                <h3 className={styles.speakerLiTitle}>УЧЕНОЕ ЗВАНИЕ:</h3>
                <p className={styles.speakerLiPr}>{speakers[expert].acTitle}</p>
              </li>
            )}
            {speakers[expert].honorTitle.length > 0 && (
              <li>
                <h3 className={styles.speakerLiTitle}>ПОЧЕТНОЕ ЗВАНИЕ:</h3>
                <p className={styles.speakerLiPr}>
                  {speakers[expert].honorTitle}
                </p>
              </li>
            )}
            {speakers[expert].position.length > 0 && (
              <li>
                <h3 className={styles.speakerLiTitle}>ДОЛЖНОСТЬ:</h3>
                <p className={styles.speakerLiPr}>
                  {speakers[expert].position}
                </p>
              </li>
            )}
            {speakers[expert].description.length > 0 && (
              <li>
                <h3 className={styles.speakerLiTitle}>ДОПОЛНИТЕЛЬНО:</h3>
                <p className={styles.speakerLiPr}>
                  {speakers[expert].description}
                </p>
              </li>
            )}
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Speakers;
