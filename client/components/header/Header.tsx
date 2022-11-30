import styles from "./styles.module.scss";
import bgimg from "../../public/img/bg2.svg";
import image1 from "../../public/img/image1.svg";
import image2 from "../../public/img/image2.svg";
import { HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header
      className={styles.header}
      style={{
        background: ` url(${bgimg.src}) no-repeat`,
        backgroundSize: "cover",
        backgroundPositionX: "center",
      }}
    >
      <div className={styles.bgHeader}>
        <div className={styles.topBar}>
          <div className={styles.topBarLeft}>
            <Image src={image1} alt="Суд" />
            <p style={{ width: "126px" }} className={styles.headerP}>
              МОСКОВСКИЙ ГОРОДСКОЙ СУД
            </p>
            <div className={styles.Vline}></div>
            <Image src={image2} alt="МИРЭА" />
            <p style={{ width: "259px" }} className={styles.headerP}>
              РОССИЙСКИЙ ТЕХНОЛОГИЧЕСКИЙ УНИВЕРСИТЕТ - МИРЭА
            </p>
          </div>
          <div className={styles.topBarRight}>
            <button className={styles.topBarButton}>О КОНФЕРЕНЦИИ</button>
            <button className={styles.topBarButton}>НАПРАВЛЕНИЯ</button>
            <button className={styles.topBarButton}>СПИКЕРЫ</button>
            <button className={styles.topBarButton}>ОРГАНИЗАТОРЫ</button>
            <button className={styles.topBarButton}>ТРЕБОВАНИЯ</button>
          </div>
        </div>
        <div className={styles.headerInfo}>
          <p className={styles.leftInfo}>
            I НАЦИОНАЛЬНАЯ НАУЧНО - ПРАКТИЧЕСКАЯ КОНФЕРЕНЦИЯ{" "}
            <b>ЦИФРОВИЗАЦИЯ ПРАВОСУДИЯ: ПРОБЛЕМЫ И ПЕРСПЕКТИВЫ</b>
          </p>
          <div className={styles.rightInfo}>
            <div>
              <HiOutlineLocationMarker />
              <p style={{ width: "228px" }}>
                <b>МЕСТО ВСТРЕЧИ:</b> МОСКВА, СТРОМЫНКА, 20 ПРОСПЕКТ
                ВЕРНАДСКОГО, 78 КОРПУС Е
              </p>
            </div>
            <div style={{ alignSelf: "end" }}>
              <p style={{ width: "195px", textAlign: "right" }}>
                <b>ДАТА ПРОВЕДЕНИЯ:</b> Декабрь 9/12/13/14 2022
              </p>
              <HiOutlineCalendar />
            </div>
            <button>РЕГИСТРАЦИЯ</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
