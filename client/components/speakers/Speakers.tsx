import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import bgModal from "../../public/img/bgModal-min.jpg";
import downSVG from "../../public/img/speakersSvg.svg";
import styles from "./styles.module.scss";
import Image from "next/image";

import SpeakerState, { SpeakerType } from "../../state/speakersState";
import { observer } from "mobx-react-lite";
import headerState from "../../state/headerState";

const Speakers = () => {
  const [expert, setExpert] = useState(0);
  const [expertModal, setExpertModal] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    SpeakerState.getOnceExperts();
    if (ref.current) {
      headerState.setSpeakerOffsetTop(ref.current?.offsetTop);
    }
    let interval: any = null;
    interval = setInterval(() => {
      if (ref.current) {
        headerState.setSpeakerOffsetTop(ref.current?.offsetTop);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div ref={ref} className={styles.speakers + " mx-auto"}>
      <h1 className="titleH1 mx-auto">ЭКСПЕРТЫ</h1>
      <div className={styles.speakersContainer}>
        <div className="flexx gap32 w100">
          {SpeakerState.first.map((speaker, index) => {
            return (
              <div
                className={styles.speaker}
                key={speaker.id}
                onClick={() => {
                  setExpert(speaker.id);
                  setExpertModal(true);
                }}
              >
                <Image
                  width={250}
                  height={350}
                  src={speaker.img}
                  alt={speaker.alt}
                />
                <div>
                  <p>{speaker.firstName}</p>
                  <p>{speaker.middleName}</p>
                  <p>{speaker.lastName}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flexx gap32 w100">
          {SpeakerState.second.map((speaker, index) => {
            return (
              <div
                className={styles.speaker}
                key={speaker.id}
                onClick={() => {
                  setExpert(speaker.id);
                  setExpertModal(true);
                }}
              >
                <Image
                  width={250}
                  height={350}
                  src={speaker.img}
                  alt={speaker.alt}
                />
                <div>
                  <p>{speaker.firstName}</p>
                  <p>{speaker.middleName}</p>
                  <p>{speaker.lastName}</p>
                </div>
              </div>
            );
          })}
        </div>
        {SpeakerState.three.map((speaker, index) => {
          return (
            <div
              className={styles.speaker}
              key={speaker.id}
              onClick={() => {
                setExpert(speaker.id);
                setExpertModal(true);
              }}
            >
              <Image
                width={250}
                height={350}
                src={speaker.img}
                alt={speaker.alt}
              />
              <div>
                <p>{speaker.firstName}</p>
                <p>{speaker.middleName}</p>
                <p>{speaker.lastName}</p>
              </div>
            </div>
          );
        })}
      </div>
      {SpeakerState.page < 6 && (
        <div className={styles.speakerDownloadContainer}>
          <button
            onClick={() => {
              SpeakerState.getExperts(SpeakerState.page);
            }}
            className={styles.speakerDownload}
          >
            <Image alt="download" src={downSVG.src} width={27} height={53} />
          </button>
        </div>
      )}
      <motion.div
        // style={{ display: expertModal ? "block" : "none" }}
        initial={{ opacity: 0, clipPath: "circle(0%)" }}
        animate={{
          opacity: expertModal ? 1 : 0,
          clipPath: expertModal ? "circle(100%)" : "circle(0%)",
        }}
        exit={{ clipPath: expertModal ? "circle(0%)" : "circle(100%)" }}
        transition={{ duration: 2, type: "spring" }}
        onClick={() => {
          setExpertModal(false);
        }}
        className="posFix blackBG"
      ></motion.div>
      {SpeakerState.all.length > 0 && (
        <motion.div
          style={{
            background: `url(${bgModal.src}) no-repeat #fff`,
            backgroundSize: "contain",
          }}
          initial={{ opacity: 0, clipPath: "circle(0%)" }}
          animate={{
            opacity: expertModal ? 1 : 0,
            clipPath: expertModal ? "circle(100%)" : "circle(0%)",
          }}
          exit={{ clipPath: expertModal ? "circle(0%)" : "circle(100%)" }}
          transition={{ duration: 2, type: "spring" }}
          className={styles.speakersModal + " posFix"}
        >
          <div>
            <Image
              width={300}
              height={530}
              src={SpeakerState.all[expert].img}
              alt={SpeakerState.all[expert].alt}
              className={styles.speakersModalImage}
            />
          </div>
          <div>
            <p className={styles.speakerFullName}>
              {SpeakerState.all[expert].firstName}
              <br />
              {SpeakerState.all[expert].middleName}
              <br />
              {SpeakerState.all[expert].lastName}
            </p>
            <ul className="flex-column">
              {SpeakerState.all[expert].acDegree.length > 0 && (
                <li>
                  <h3 className={styles.speakerLiTitle}>УЧЕНАЯ СТЕПЕНЬ: </h3>
                  <p className={styles.speakerLiPr}>
                    {SpeakerState.all[expert].acDegree}
                  </p>
                </li>
              )}
              {SpeakerState.all[expert].acTitle.length > 0 && (
                <li>
                  <h3 className={styles.speakerLiTitle}>УЧЕНОЕ ЗВАНИЕ:</h3>
                  <p className={styles.speakerLiPr}>
                    {SpeakerState.all[expert].acTitle}
                  </p>
                </li>
              )}
              {SpeakerState.all[expert].honorTitle.length > 0 && (
                <li>
                  <h3 className={styles.speakerLiTitle}>ПОЧЕТНОЕ ЗВАНИЕ:</h3>
                  <p className={styles.speakerLiPr}>
                    {SpeakerState.all[expert].honorTitle}
                  </p>
                </li>
              )}
              {SpeakerState.all[expert].position.length > 0 && (
                <li>
                  <h3 className={styles.speakerLiTitle}>ДОЛЖНОСТЬ:</h3>
                  <p className={styles.speakerLiPr}>
                    {SpeakerState.all[expert].position}
                  </p>
                </li>
              )}
              {SpeakerState.all[expert].description.length > 0 && (
                <li>
                  <h3 className={styles.speakerLiTitle}>ДОПОЛНИТЕЛЬНО:</h3>
                  <p className={styles.speakerLiPr}>
                    {SpeakerState.all[expert].description}
                  </p>
                </li>
              )}
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default observer(Speakers);
