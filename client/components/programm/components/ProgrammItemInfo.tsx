import Image from "next/image";
import React from "react";
import { programInform } from "../../../state/headerState";
import styles from "../styles.module.scss";
interface Props {
  progInform: programInform;
}

const ProgrammItemInfo = (props: Props) => {
  return (
    <div key={props.progInform.id} className={styles.programmInfoContainer + " gap16"}>
      <div className={styles.programmInformation + " flex-column"}>
        <Image width={72} height={72} src={props.progInform.img} alt={props.progInform.img} />
        <p>{props.progInform.fio}</p>
      </div>
      <p className={styles.programmInfoText}>{props.progInform.text}</p>
    </div>
  );
};

export default ProgrammItemInfo;
