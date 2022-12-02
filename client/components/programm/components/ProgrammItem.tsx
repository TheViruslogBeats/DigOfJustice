import { motion } from "framer-motion";
import styles from "../styles.module.scss";
import { FaArrowDown } from "react-icons/fa";

interface Props {
  prog: prog;
  setOpened: (id: number) => void;
  key: number
}

interface prog {
  id: number;
  title: string;
  where: string;
  date: string;
  time: string;
  info: boolean;
  infoOpened: boolean;
  inform: inform[];
}

interface inform {
  img: string;
  fio: string;
  text: string;
}

const ProgrammItem = (props: Props) => {
  return (
    <>
      <div key={props.key} className={styles.programmMainContainer}>
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
                props.setOpened(props.prog.id);
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
          {props.prog.inform.map((infos, index) => {
            return (
              <div key={index} className={styles.programmInfoContainer}>
                <div className={styles.programmInformation}>
                  <img src={infos.img} alt={infos.img} />
                  <p>{infos.fio}</p>
                </div>
                <p className={styles.programmInfoText}>{infos.text}</p>
              </div>
            );
          })}
        </motion.div>
      )}
    </>
  );
};

export default ProgrammItem;
