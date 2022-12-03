import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import ProgrammItem from "./components/ProgrammItem";
import SectionButtons from "./components/SectionButton";
import SectionItem from "./components/SectionItem";
import {
  programsArray,
  sectionButtonsArray,
  sectionListArray,
} from "../../state/state";

const Programm = () => {
  const [section, setSection] = useState(0);
  const [programs, setPrograms] = useState(programsArray);
  const [sectionList, setSectionList] = useState(sectionListArray);
  const [sectionArray, setSectionArray] = useState(sectionList[section]);
  const [sectionButtons, setSectionButtons] = useState(
    sectionButtonsArray.sort((a, b) => a.text.length - b.text.length)
  );

  useEffect(() => {
    setSectionArray(sectionList[section]);
  }, [section]);

  const setSectionOpened = (id: number) => {
    setSectionArray(
      sectionArray.map((section) => {
        if (section.id === id) {
          section.opened = !section.opened;
        }
        return section;
      })
    );
  };

  const setOpened = (id: number) => {
    setPrograms(
      programs.map((prog) => {
        if (prog.id === id) {
          prog.infoOpened = !prog.infoOpened;
        }
        return prog;
      })
    );
  };

  return (
    <div className={styles.programm}>
      <h2 className="titleH1">ПРОГРАММА</h2>
      <div className={styles.programmContainer}>
        {programs.map((prog, index) => {
          return <ProgrammItem key={index} prog={prog} setOpened={setOpened} />;
        })}
        <div className={styles.programmSections}>
          <div className={styles.programmSectionbtns}>
            {sectionButtons.map((button, index) => {
              return (
                <SectionButtons
                  key={index}
                  id={button.id}
                  text={button.text}
                  setSection={setSection}
                  section={section}
                />
              );
            })}
          </div>

          <ul className={styles.programmSectionList}>
            {sectionArray.map((section, index) => {
              return (
                <SectionItem
                  key={index}
                  section={section}
                  setSectionOpened={setSectionOpened}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Programm;
