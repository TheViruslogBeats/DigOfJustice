import React from "react";
import styles from "../styles.module.scss";

interface Props {
  setSection: (value: React.SetStateAction<number>) => void;
  section: number;
  id: number;
  text: string;
}

const SectionButton = (props: Props) => {
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
