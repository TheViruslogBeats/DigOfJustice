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

import { HiMenu } from "react-icons/hi";
import { motion } from "framer-motion";

const Programm = () => {
  const [menu, setMenu] = useState(false);
  const progRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    headerState.getProgramm();
    let interval: any = null;
    if (progRef.current?.offsetTop) {
      headerState.setProgOffsetTop(progRef.current?.offsetTop);
    }
    interval = setInterval(() => {
      if (progRef.current?.offsetTop) {
        headerState.setProgOffsetTop(progRef.current?.offsetTop);
      }
    }, 3000);
    return ()=> {
      clearInterval(interval)
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
          <button
            onClick={() => {
              setMenu(!menu);
            }}
            className={styles.programmSectionbtnMobile}
          >
            <HiMenu />
          </button>
          <motion.div
            onClick={() => {
              setMenu(false);
            }}
            initial={{ opacity: 0, clipPath: "circle(0%)" }}
            animate={{
              opacity: menu ? 1 : 0,
              clipPath: menu ? "circle(100%)" : "circle(0%)",
            }}
            transition={{ duration: 1, type: "spring" }}
            className={styles.programmSectionBlackBg}
          ></motion.div>
          <motion.div
            initial={{
              left: "-100%",
            }}
            animate={{
              left: menu ? "0%" : "-100%",
            }}
            transition={{ duration: 1, type: "spring" }}
            className={styles.programmSectionbtns + " flex-column gap16"}
          >
            {headerState.program.sections?.map((button) => {
              return (
                <SectionButtons
                  setMenu={setMenu}
                  key={button.id}
                  button={button}
                />
              );
            })}
          </motion.div>

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
