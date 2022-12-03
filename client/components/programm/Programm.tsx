//modules
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
//styles
import styles from "./styles.module.scss";
//state
import headerState from "../../state/headerState";

//components
import ProgrammItem from "./components/ProgrammItem";
import SectionButtons from "./components/SectionButton";
import SectionItem from "./components/SectionItem";

const Programm = () => {

  useEffect(() => {
    headerState.getProgramm();
  }, []);

  return (
    <div className={styles.programm}>
      <h2 className="titleH1">ПРОГРАММА</h2>
      <div className={styles.programmContainer}>
        {headerState.program.programs?.map((program) => {
          return <ProgrammItem key={program.id} prog={program} />;
        })}
        <div className={styles.programmSections}>
          <div className={styles.programmSectionbtns}>
            {headerState.program.sections?.map((button) => {
              return <SectionButtons key={button.id} button={button} />;
            })}
          </div>

          <ul className={styles.programmSectionList}>
            {headerState.currentList.map((section) => {
              return <SectionItem key={section.id} section={section} />;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default observer(Programm);