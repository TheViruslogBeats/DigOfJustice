//modules
import { useEffect, useRef, useState } from "react";
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
  const progRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    headerState.getProgramm();
    if (progRef.current?.offsetTop) {
      headerState.setProgOffsetTop(progRef.current?.offsetTop);
    }
  }, []);

  return (
    <div ref={progRef} className={styles.programm + " mx-auto"}>
      <h2 className="titleH1 mx-auto">ПРОГРАММА</h2>
      <div>
        {headerState.program.programs?.map((program) => {
          return <ProgrammItem key={program.id} prog={program} />;
        })}
        <div className={styles.programmSections}>
          <div className={styles.programmSectionbtns + " flex-column gap16"}>
            {headerState.program.sections?.map((button) => {
              return <SectionButtons key={button.id} button={button} />;
            })}
          </div>

          <ul className={styles.programmSectionList + " flex-column gap16"}>
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
