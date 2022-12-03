import { motion } from "framer-motion";
import React from "react";
import { FaArrowDown } from "react-icons/fa";
import styles from "../styles.module.scss";
import { SectionListType } from "../../../state/state";

interface Props extends SectionListType {
  section: SectionListType;
  setSectionOpened: (id: number) => void;
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
            <p>{props.section.time}</p>
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
              {props.reports.map((report) => {
                return (
                  <li className={styles.programmSectionListPeapLi}>
                    <p>{report.topic}</p>
                    <div className={styles.programmSectionListPeapLiCtn}>
                      <div>
                        <p>
                          <b>{report.fullName}</b>
                        </p>
                        <p>
                          {report.studyPlaceAndSpecialy.length > 0 &&
                            report.studyPlaceAndSpecialy}
                          {report.workPlaceAndPosition.length > 0 &&
                            report.workPlaceAndPosition}
                        </p>
                      </div>
                      <div>
                        <p>{report.activityType}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </motion.div>
    </li>
  );
};

export default SectionItem;
