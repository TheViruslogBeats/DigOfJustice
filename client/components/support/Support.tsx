import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

import img1 from "../../public/img/support/1.png";
import img2 from "../../public/img/support/2.png";
import img3 from "../../public/img/support/3.png";
import img4 from "../../public/img/support/4.png";
import img5 from "../../public/img/support/5.png";
import img6 from "../../public/img/support/6.png";
import img7 from "../../public/img/support/7.png";
import tgsvg from "../../public/img/TGSVG.svg";

interface Props {}

const Support = (props: Props) => {
  const [support, setSupport] = useState([
    { img: img1.src, firstName: "Иванов", lastName: "Сергей", tg: "" },
    { img: img2.src, firstName: "Занин", lastName: "Вадим", tg: "" },
    {
      img: img3.src,
      firstName: "Антипин",
      lastName: "Владислав",
      tg: "victoquo",
    },
    { img: img4.src, firstName: "Борздых", lastName: "Мария", tg: "law2024" },
  ]);
  const [techSupport, setTechSupport] = useState([
    {
      img: img5.src,
      firstName: "Котилевец",
      lastName: "Игорь",
      tg: "ikotilevets",
    },
    {
      img: img6.src,
      firstName: "Хаметзянов",
      lastName: "Александр",
      tg: "AKhametzyanov",
    },
    { img: img7.src, firstName: "Шматов", lastName: "Егор", tg: "theviruslog" },
  ]);
  return (
    <div className={styles.supportContainer + " flex-column mx-auto gap16"}>
      <div className={styles.supportWrapper}>
        <h2>Консультанты</h2>
        <div className={styles.supportBlocks}>
          {support.map((sup, index) => {
            return (
              <div key={index} className={styles.support + " flex-column"}>
                <Image alt="support" src={sup.img} width={100} height={100} />
                <p>{sup.firstName}</p>
                <p>{sup.lastName}</p>
                {sup.tg.length > 0 && (
                  <div className={styles.supportContact}>
                    <Image alt="TG" src={tgsvg.src} width={27} height={24} />
                    <a href={"https://t.me/" + sup.tg} target="_blank" rel="noreferrer">
                      @{sup.tg}
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.supportWrapper}>
        <h2>Техническая поддержка</h2>
        <div className={styles.supportBlocks}>
          {techSupport.map((sup, index) => {
            return (
              <div key={index} className={styles.support + " flex-column"}>
                <Image alt="support" src={sup.img} width={100} height={100} />
                <p>{sup.firstName}</p>
                <p>{sup.lastName}</p>
                <div className={styles.supportContact}>
                  <Image alt="TG" src={tgsvg.src} width={27} height={24} />
                  <a href={"https://t.me/" + sup.tg} target="_blank" rel="noreferrer">
                    @{sup.tg}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Support;
