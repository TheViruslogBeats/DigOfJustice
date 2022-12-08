import { SetStateAction } from "react";
import styles from "../styles.module.scss";
import { observer } from "mobx-react-lite";

import headerState, { SectionButtonsType } from "../../../state/headerState";

interface Props {
  button: SectionButtonsType;
  setMenu: (value: SetStateAction<boolean>) => void;
}

const SectionButton: React.FC<Props> = (props) => {
  return (
    <button
      onClick={() => {
        console.log("sykablyat");
        props.setMenu(false)
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
