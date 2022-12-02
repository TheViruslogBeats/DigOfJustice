import { motion } from "framer-motion";
import React from "react";
import { FaArrowDown } from "react-icons/fa";
import styles from "../styles.module.scss";

interface Props {
  section: section;
  setSectionOpened: (id: number) => void;
}

interface section {
  id: number;
  title: string;
  date: string;
  time: string;
  place: string;
  showArrow: boolean;
  opened: boolean;
  hQuesions: boolean;
  questions: string[];
  hReports: boolean;
  reports: any[];
}

const SectionItem = (props: Props) => {
  return (
    <li key={props.section.id}>
      <motion.div
        initial={{ marginBottom: "0px" }}
        animate={{ marginBottom: props.section.opened ? "32px" : "0px" }}
        className={styles.programmSectionListMainContainer}
        transition={{ duration: 1, type: "spring" }}
      >
        <div className={styles.programmSectionListMainContainer1}>
          <p>
            <b>{props.section.title}</b>
          </p>
          {props.section.place.length > 0 && <p>{props.section.place}</p>}
        </div>
        <div className={styles.programmSectionListMainContainer2}>
          <div>
            {props.section.date.length > 0 && (
              <p>
                <b>{props.section.date}</b>
              </p>
            )}
            <p
              style={{
                marginRight: props.section.showArrow ? 0 : "64px",
              }}
            >
              {props.section.time}
            </p>
          </div>
          {props.section.showArrow && (
            <FaArrowDown
              className={
                props.section.opened
                  ? styles.programmSectionListMainSVG +
                    " " +
                    styles.programmSectionListMainSVGOpened
                  : styles.programmSectionListMainSVG
              }
              onClick={() => {
                console.log("click" + props.section.id);

                props.setSectionOpened(props.section.id);
                console.log(props.section.opened);
              }}
            />
          )}
        </div>
      </motion.div>
      <motion.div
        initial={{ height: 0, margin: "0px 32px" }}
        animate={{
          height: props.section.opened ? "auto" : 0,
          margin: props.section.opened ? "32px 32px" : "0px 32px",
        }}
        transition={{ duration: 1, type: "spring" }}
        className={styles.programmSectionListHiddenContainer}
      >
        {props.section.hQuesions && (
          <>
            <p>
              <b>Вопросы к обсуждению:</b>
            </p>
            <ol className={styles.programmSectionListQA}>
              {props.section.questions.map((q, index) => {
                return (
                  <li key={index}>
                    <p>{q}</p>
                  </li>
                );
              })}
            </ol>
          </>
        )}
        {props.section.hReports && (
          <div className={styles.programmSectionListPeapCtn}>
            <p className={styles.programmSectionListPeapTitle}>Доклады</p>
            <ul className={styles.programmSectionListPeap}>
              <li className={styles.programmSectionListPeapLi}>
                <p>
                  передача финансовому управляющему доступа к криптокошельку;
                  квалификация формы контракта, заключенного через
                  блокчейн-платформу; цифровое администрирование договоров
                </p>
                <div className={styles.programmSectionListPeapLiCtn}>
                  <div>
                    <p>
                      <b>Охаси Ивао (Ohashi Iwao)</b>
                    </p>
                    <p>
                      Советник по Японии и странам АТР, Ассоциация
                      индустриальных парков России
                    </p>
                  </div>
                  <div>
                    <p>Офлайн</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        )}
      </motion.div>
    </li>
  );
};

export default SectionItem;
