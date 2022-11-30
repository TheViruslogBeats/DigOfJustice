import { useState } from "react";
import styles from "./styles.module.scss"

const Programm = () => {
  const [section, setSection] = useState(0);
  
  return (
    <div className={styles.programm}>
        <h1 className="titleH1">ПРОГРАММА</h1>
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
      </div>
  )
}

export default Programm