import React from "react";
import styles from "../styles.module.scss";
import { observer } from "mobx-react-lite";

import headerState, { SectionButtonsType } from "../../../state/headerState";

interface Props {
  button: SectionButtonsType;
}

const SectionButton: React.FC<Props> = (props) => {
  return (
    <button
      onClick={() => {
        console.log("sykablyat");

        headerState.setCurrentButtonAndList(
          props.button.id,
          props.button.sectionList
        );
      }}
      className={
        headerState.currentButton === props.button.id
          ? styles.programmSectionbtn + " " + styles.programmSectionbtnActive
          : styles.programmSectionbtn
      }
    >
      {props.button.text}
    </button>
  );
};

export default observer(SectionButton);
