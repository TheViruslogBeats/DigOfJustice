import React from "react";
import styles from "../styles.module.scss";

import { SectionButtonsType } from "../../../state/state";

interface Props extends SectionButtonsType {
  setSection: (value: React.SetStateAction<number>) => void;
  section: number;
}

const SectionButton: React.FC<Props> = (props) => {
  return (
    <button
      onClick={() => {
        props.setSection(props.id);
      }}
      className={
        props.section === props.id
          ? styles.programmSectionbtn + " " + styles.programmSectionbtnActive
          : styles.programmSectionbtn
      }
    >
      {props.text}
    </button>
  );
};

export default SectionButton;
