import { motion } from "framer-motion";
import React, { useState } from "react";
import bgModal from "../../public/img/bgModal.svg";
import styles from "./styles.module.scss";
import Image from "next/image"

let speakers = [
  {
    id: 0,
    src: "https://cdn.discordapp.com/attachments/934798571688054914/1042091128838705272/Rectangle_7.png",
    alt: "speaker",
    firstName: "Бакаев",
    middleName: "Анатолий",
    lastName: "Александрович",
  },
  {
    id: 1,
    src: "https://cdn.discordapp.com/attachments/934798571688054914/1042091128838705272/Rectangle_7.png",
    alt: "speaker",
    firstName: "Бакаев",
    middleName: "Анатолий",
    lastName: "Александрович",
  },
  {
    id: 2,
    src: "https://cdn.discordapp.com/attachments/934798571688054914/1042091128838705272/Rectangle_7.png",
    alt: "speaker",
    firstName: "Бакаев",
    middleName: "Анатолий",
    lastName: "Александрович",
  },
];

const Speakers = () => {
  const [expert, setExpert] = useState(0);
  const [expertModal, setExpertModal] = useState(false);

  return (
    <div className={styles.speakers}>
      <h1 className="titleH1">ЭКСПЕРТЫ</h1>
      <div className={styles.speakersContainer}>
        {speakers.map((speaker) => {
          return (
            <div
              className={styles.speaker}
              key={speaker.id}
              onClick={() => {
                setExpert(speaker.id);
                setExpertModal(true);
              }}
            >
              <img src={speaker.src} alt={speaker.alt} />
              <div>
                <p>{speaker.firstName}</p>
                <p>{speaker.middleName}</p>
                <p>{speaker.lastName}</p>
              </div>
            </div>
          );
        })}
      </div>
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
        className={styles.speakersBlackBG}
      ></motion.div>
      <div
        style={{
          display: expertModal ? "block" : "none",
          background: `url(${bgModal.src}) no-repeat #fff`,
        }}
        className={styles.speakersModal}
      >
        <img
          src={speakers[expert].src}
          alt={speakers[expert].alt}
          className={styles.speakersModalImage}
        />
      </div>
    </div>
  );
};

export default Speakers;
