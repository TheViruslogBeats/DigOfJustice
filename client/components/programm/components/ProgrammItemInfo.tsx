import React from "react";
import { programInform } from "../../../state/headerState";
import styles from "../styles.module.scss";
interface Props {
  progInform: programInform;
}

const ProgrammItemInfo = (props: Props) => {
  return (
    <div key={props.progInform.id} className={styles.programmInfoContainer}>
      <div className={styles.programmInformation}>
        <img src={props.progInform.img} alt={props.progInform.img} />
        <p>{props.progInform.fio}</p>
      </div>
      <p className={styles.programmInfoText}>{props.progInform.text}</p>
    </div>
  );
};

export default ProgrammItemInfo;
