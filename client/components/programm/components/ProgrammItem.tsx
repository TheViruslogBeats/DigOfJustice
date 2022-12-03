import { motion } from "framer-motion";
import styles from "../styles.module.scss";
import { FaArrowDown } from "react-icons/fa";
import headerState, { programsType } from "../../../state/headerState";
import ProgrammItemInfo from "./ProgrammItemInfo";

interface Props {
  prog: programsType;
}

const ProgrammItem = (props: Props) => {
  return (
    <>
      <div key={props.prog.id} className={styles.programmMainContainer}>
        <div className={styles.programmMainContainer1}>
          <p>{props.prog.title}</p>
          <p>{props.prog.where}</p>
        </div>
        <div className={styles.programmMainContainer2}>
          <p>{props.prog.date}</p>
          <p>{props.prog.time}</p>
        </div>
        {props.prog.info && (
          <div className={styles.programmMainContainer3}>
            <FaArrowDown
              className={
                props.prog.infoOpened
                  ? styles.programmMainContainerSVG +
                    " " +
                    styles.programmMainContainerSVGOpened
                  : styles.programmMainContainerSVG
              }
              onClick={() => {
                headerState.openProgram(props.prog.id);
              }}
            />
          </div>
        )}
      </div>
      {props.prog.info && (
        <motion.div
          initial={{ height: 0, marginBottom: 0 }}
          animate={{
            height: props.prog.infoOpened ? "auto" : 0,
            marginBottom: props.prog.infoOpened ? "64px" : 0,
          }}
          transition={{ duration: 1, type: "spring" }}
          className={styles.programmInfoContainers}
        >
          {props.prog.inform.map((infos) => {
            return <ProgrammItemInfo key={infos.id} progInform={infos} />;
          })}
        </motion.div>
      )}
    </>
  );
};

export default ProgrammItem;
