import { motion } from "framer-motion";
import React from "react";
import { FaArrowDown } from "react-icons/fa";
import styles from "../styles.module.scss";
import headerState, { SectionListType } from "../../../state/headerState";
import { observer } from "mobx-react-lite";
import SectionReportItem from "./SectionReportItem";
import SectionQItem from "./SectionQItem";
import Image from "next/image";

interface Props {
  section: SectionListType;
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
        <div
          className={
            styles.programmSectionListMainContainer1 + " flex-column gap16"
          }
        >
          <p>
            <b>{props.section.title}</b>
          </p>
          {props.section.place.length > 0 && <p>{props.section.place}</p>}
        </div>
        <div className={styles.programmSectionListMainContainer2}>
          <div className="flex-column">
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
                headerState.openList(props.section.id);
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
        {props.section.mainTheme.length > 0 && (
          <h3>{props.section.mainTheme}</h3>
        )}
        {props.section.hQuesions && (
          <>
            <p>
              <b>Вопросы к обсуждению:</b>
            </p>
            <ul className={styles.programmSectionListQA + " flex-column gap8"}>
              {props.section.questions.map((q, index) => {
                return <SectionQItem question={q} key={index} />;
              })}
            </ul>
          </>
        )}
        {props.section.members.length > 0 && (
          <>
            <h3 className={styles.membersTitle}>
              Участники
            </h3>
            <div className={styles.memberWrapper}>
              {props.section.members.map((member) => {
                return (
                  <div key={member.id} className={styles.memberContainer + " flex-column"}>
                    <Image
                      src={member.img}
                      alt={member.firstName}
                      width={60}
                      height={60}
                    />
                    <div className={styles.memberName}>
                      <p>{member.firstName}</p>
                      <p>{member.middleName}</p>
                      <p>{member.lastName}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
        {props.section.hReports && (
          <div className={styles.programmSectionListPeapCtn}>
            <p className={styles.programmSectionListPeapTitle}>Доклады</p>
            <ul className="flex-column gap16">
              {props.section.reports.map((report) => {
                return <SectionReportItem key={report.id} report={report} />;
              })}
            </ul>
          </div>
        )}
      </motion.div>
    </li>
  );
};

export default observer(SectionItem);
