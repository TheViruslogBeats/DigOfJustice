import { useState } from "react";
import styles from "./styles.module.scss";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const Programm = () => {
  const [section, setSection] = useState(0);
  const [programs, setPrograms] = useState([
    {
      id: 0,
      title: "Торжественное открытие",
      where: "Малый зал Ученого совета",
      date: "9 ДЕКАБРЯ",
      time: "10:00",
      info: true,
      infoOpened: false,
      inform: [
        {
          img: "https://cdn.discordapp.com/attachments/934798571688054914/1042091128838705272/Rectangle_7.png",
          fio: "Бакаев Анатолий Александрович",
          text: "Приветственное слово Директора Института кибербезопасности и цифровых технологий РТУ МИРЭА, доктор исторических наук, кандидат юридических наук, Заслуженный юрист России, Почётный работник высшего профессионального образования, Академик РАЕН, председателя Координационного совета ИКБ и Московского городского суда. ",
        },
        {
          img: "https://cdn.discordapp.com/attachments/1047864383759458355/1047912597862764574/-1.png",
          fio: "Ивченко Максим Николаевич",
          text: "Приветственное слово заместителя председателя Московского городского суда",
        },
      ],
    },
    {
      id: 1,
      title: "Кофе-брейк",
      where: "",
      date: "9 ДЕКАБРЯ",
      time: "10:30",
      info: false,
      infoOpened: false,
      inform: [],
    },
    {
      id: 2,
      title: "Пленарное заседание",
      where: "Малый зал Ученого совета",
      date: "9 ДЕКАБРЯ",
      time: "10:50",
      info: false,
      infoOpened: false,
      inform: [],
    },
  ]);

  const [sectionList, setSectionList] = useState([
    [
      {
        time: "10:25",
        date: "9 декабря",
        place: "АУДИТОРИЯ 35A",
      },
    ],
  ]);

  const setOpened = (id: number) => {
    setPrograms(
      programs.map((prog) => {
        if (prog.id === id) {
          prog.infoOpened = !prog.infoOpened;
        }
        return prog;
      })
    );
  };

  return (
    <div className={styles.programm}>
      <h2 className="titleH1">ПРОГРАММА</h2>
      <div className={styles.programmContainer}>
        {programs.map((prog) => {
          return (
            <>
              <div className={styles.programmMainContainer}>
                <div className={styles.programmMainContainer1}>
                  <p>{prog.title}</p>
                  <p>{prog.where}</p>
                </div>
                <div className={styles.programmMainContainer2}>
                  <p>{prog.date}</p>
                  <p>{prog.time}</p>
                </div>
                {prog.info && (
                  <div className={styles.programmMainContainer3}>
                    <FaArrowDown
                      className={
                        prog.infoOpened
                          ? styles.programmMainContainerSVG +
                            " " +
                            styles.programmMainContainerSVGOpened
                          : styles.programmMainContainerSVG
                      }
                      onClick={() => {
                        setOpened(prog.id);
                      }}
                    />
                  </div>
                )}
              </div>
              {prog.info && (
                <motion.div
                  initial={{ height: 0, marginBottom: 0 }}
                  animate={{
                    height: prog.infoOpened ? "auto" : 0,
                    marginBottom: prog.infoOpened ? "64px" : 0,
                  }}
                  transition={{ duration: 1, type: "spring" }}
                  className={styles.programmInfoContainers}
                >
                  {prog.inform.map((infos) => {
                    return (
                      <div className={styles.programmInfoContainer}>
                        <div className={styles.programmInformation}>
                          <img src={infos.img} alt={infos.img} />
                          <p>{infos.fio}</p>
                        </div>
                        <p className={styles.programmInfoText}>{infos.text}</p>
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </>
          );
        })}
        <h3 className="titleH1">СЕКЦИИ</h3>
        <div className={styles.programmSections}>
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
              Стратегическая сессия
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
              Предметно-ориентированные информационные системы в правосудии:
              возможности, проблемы, перспективы
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
              Свободное программное обеспечение и цифровая трансформация
              правосудия
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
              Панельная дискуссия
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
              Круглый стол
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
              Цифровые и интеллектуальные методы принятия решений в судебной
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
              Современные технологии мониторинга и анализа данных в цифровой
              криминалистике
            </button>
            <button
              className={
                section === 7
                  ? styles.programmSectionbtn +
                    " " +
                    styles.programmSectionbtnActive
                  : styles.programmSectionbtn
              }
              onClick={() => {
                setSection(7);
              }}
            >
              Мероприятие-сателлит – Презентация платформы Веримаг
            </button>
            <button
              className={
                section === 8
                  ? styles.programmSectionbtn +
                    " " +
                    styles.programmSectionbtnActive
                  : styles.programmSectionbtn
              }
              onClick={() => {
                setSection(8);
              }}
            >
              Цифровые технологии в судебной системе и защита данных в сфере
              судопроизводства
            </button>
            <button
              className={
                section === 9
                  ? styles.programmSectionbtn +
                    " " +
                    styles.programmSectionbtnActive
                  : styles.programmSectionbtn
              }
              onClick={() => {
                setSection(9);
              }}
            >
              Заседание
            </button>
          </div>

          <ul className={styles.programmSectionList}>
            <li>
              <div>
                <p className={styles.programmSectionListMainInfo}>
                  передача финансовому управляющему доступа к криптокошельку;
                  квалификация формы контракта, заключенного через
                  блокчейн-платформу; цифровое администрирование договоров
                </p>
                <br />
                <p className={styles.programmSectionListSecondInfo}>
                  <b>Охаси Ивао (Ohashi Iwao)</b>
                  <br /> Советник по Японии и странам АТР, <br /> Ассоциация
                  индустриальных парков России
                </p>
              </div>
              <div className={styles.programmSectionListPlace}>
                <p>АУДИТОРИЯ 35А</p>
              </div>
              <p className={styles.programmSectionListTime}>
                10:25 <br /> 9 ДЕКАБРЯ
              </p>
            </li>
            <li>
              <div>
                <p className={styles.programmSectionListMainInfo}>
                  передача финансовому управляющему доступа к криптокошельку;
                  квалификация формы контракта, заключенного через
                  блокчейн-платформу; цифровое администрирование договоров
                </p>
                <br />
                <p className={styles.programmSectionListSecondInfo}>
                  <b>Охаси Ивао (Ohashi Iwao)</b>
                  <br /> Советник по Японии и странам АТР, <br /> Ассоциация
                  индустриальных парков России
                </p>
              </div>
              <div className={styles.programmSectionListPlace}>
                <p>АУДИТОРИЯ 35А</p>
              </div>
              <p className={styles.programmSectionListTime}>
                10:25 <br /> 9 ДЕКАБРЯ
              </p>
            </li>
            <li>
              <div>
                <p className={styles.programmSectionListMainInfo}>
                  передача финансовому управляющему доступа к криптокошельку;
                  квалификация формы контракта, заключенного через
                  блокчейн-платформу; цифровое администрирование договоров
                </p>
                <br />
                <p className={styles.programmSectionListSecondInfo}>
                  <b>Охаси Ивао (Ohashi Iwao)</b>
                  <br /> Советник по Японии и странам АТР, <br /> Ассоциация
                  индустриальных парков России
                </p>
              </div>
              <div className={styles.programmSectionListPlace}>
                <p>АУДИТОРИЯ 35А</p>
              </div>
              <p className={styles.programmSectionListTime}>
                10:25 <br /> 9 ДЕКАБРЯ
              </p>
            </li>
            <li>
              <div>
                <p className={styles.programmSectionListMainInfo}>
                  передача финансовому управляющему доступа к криптокошельку;
                  квалификация формы контракта, заключенного через
                  блокчейн-платформу; цифровое администрирование договоров
                </p>
                <br />
                <p className={styles.programmSectionListSecondInfo}>
                  <b>Охаси Ивао (Ohashi Iwao)</b>
                  <br /> Советник по Японии и странам АТР, <br /> Ассоциация
                  индустриальных парков России
                </p>
              </div>
              <div className={styles.programmSectionListPlace}>
                <p>АУДИТОРИЯ 35А</p>
              </div>
              <p className={styles.programmSectionListTime}>
                10:25 <br /> 9 ДЕКАБРЯ
              </p>
            </li>
            <li>
              <div>
                <p className={styles.programmSectionListMainInfo}>
                  передача финансовому управляющему доступа к криптокошельку;
                  квалификация формы контракта, заключенного через
                  блокчейн-платформу; цифровое администрирование договоров
                </p>
                <br />
                <p className={styles.programmSectionListSecondInfo}>
                  <b>Охаси Ивао (Ohashi Iwao)</b>
                  <br /> Советник по Японии и странам АТР, <br /> Ассоциация
                  индустриальных парков России
                </p>
              </div>
              <div className={styles.programmSectionListPlace}>
                <p>АУДИТОРИЯ 35А</p>
              </div>
              <p className={styles.programmSectionListTime}>
                10:25 <br /> 9 ДЕКАБРЯ
              </p>
            </li>
            <li>
              <div>
                <p className={styles.programmSectionListMainInfo}>
                  передача финансовому управляющему доступа к криптокошельку;
                  квалификация формы контракта, заключенного через
                  блокчейн-платформу; цифровое администрирование договоров
                </p>
                <br />
                <p className={styles.programmSectionListSecondInfo}>
                  <b>Охаси Ивао (Ohashi Iwao)</b>
                  <br /> Советник по Японии и странам АТР, <br /> Ассоциация
                  индустриальных парков России
                </p>
              </div>
              <div className={styles.programmSectionListPlace}>
                <p>АУДИТОРИЯ 35А</p>
              </div>
              <p className={styles.programmSectionListTime}>
                10:25 <br /> 9 ДЕКАБРЯ
              </p>
            </li>
            <li>
              <div>
                <p className={styles.programmSectionListMainInfo}>
                  передача финансовому управляющему доступа к криптокошельку;
                  квалификация формы контракта, заключенного через
                  блокчейн-платформу; цифровое администрирование договоров
                </p>
                <br />
                <p className={styles.programmSectionListSecondInfo}>
                  <b>Охаси Ивао (Ohashi Iwao)</b>
                  <br /> Советник по Японии и странам АТР, <br /> Ассоциация
                  индустриальных парков России
                </p>
              </div>
              <div className={styles.programmSectionListPlace}>
                <p>АУДИТОРИЯ 35А</p>
              </div>
              <p className={styles.programmSectionListTime}>
                10:25 <br /> 9 ДЕКАБРЯ
              </p>
            </li>
            <li>
              <div>
                <p className={styles.programmSectionListMainInfo}>
                  передача финансовому управляющему доступа к криптокошельку;
                  квалификация формы контракта, заключенного через
                  блокчейн-платформу; цифровое администрирование договоров
                </p>
                <br />
                <p className={styles.programmSectionListSecondInfo}>
                  <b>Охаси Ивао (Ohashi Iwao)</b>
                  <br /> Советник по Японии и странам АТР, <br /> Ассоциация
                  индустриальных парков России
                </p>
              </div>
              <div className={styles.programmSectionListPlace}>
                <p>АУДИТОРИЯ 35А</p>
              </div>
              <p className={styles.programmSectionListTime}>
                10:25 <br /> 9 ДЕКАБРЯ
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Programm;
