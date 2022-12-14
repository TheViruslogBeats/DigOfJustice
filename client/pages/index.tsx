import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";

import { motion } from "framer-motion";

//components
// import Header from "../components/header/Header";
// import ConfInfo from "../components/confInfo/ConfInfo";
// import Programm from "../components/programm/Programm";
// import Speakers from "../components/speakers/Speakers";
// import Register from "../components/register/Register";
// import PartnerBlock from "../components/header/components/PartnerBlock";
// import Support from "../components/support/Support";
import Footer from "../components/footer/Footer";

import dynamic from "next/dynamic";

export default function Home() {
  const [techWorks, setTechWorks] = useState(true);
  const Header = dynamic(() => import("../components/header/Header"));
  const ConfInfo = dynamic(() => import("../components/confInfo/ConfInfo"));
  const Programm = dynamic(() => import("../components/programm/Programm"));
  const Speakers = dynamic(() => import("../components/speakers/Speakers"));
  const Register = dynamic(() => import("../components/register/Register"));
  const PartnerBlock = dynamic(
    () => import("../components/header/components/PartnerBlock")
  );
  const Support = dynamic(() => import("../components/support/Support"));
  const Footer = dynamic(() => import("../components/footer/Footer"));
  return techWorks ? (
    <>
      <div className="modalTechWorks">
        <h1>Ведутся временные технические работы</h1>
        <p>Сайт продолжит свою работу в 00:00</p>
      </div>
    </>
  ) : (
    <div className={styles.container + " mx-auto"}>
      <Head>
        <title>ЦИФРОВИЗАЦИЯ ПРАВОСУДИЯ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Национальная научно-практическая конференция «Цифровизация правосудия: проблемы и перспективы» - уникальная площадка для диалога ученых и практиков об актуальных вопросах цифровой трансформации и информационной безопасности правосудия, разработки пилотных проектов использования цифровых технологий и платформенных решений в судебной деятельности. Соединяя информационные технологии и правосудие мы неизбежно сталкиваемся с проблемой определения предела допустимости использования искусственного интеллекта, семантики машиночитаемого права, этики искусственного интеллекта в судебной деятельности, ответственности за решения, принятые автономным интеллектуальным агентом, митигирования сопряженных с цифровой трансформацией форм судебной деятельности рисков на фоне сложной многогранной природы правосудия, его дискреционной, правоинтерпретационной и нормотворческой составляющей. Доктрина цифровизации судебной системы требует точных определений трансграничных понятий и категорий, диалога ученых и практиков в сфере IT, информационной безопасности, права. Мы презентуем результаты научно-исследовательских работ и проектов учебно-научного цента «Этика искусственного интеллекта в судебной деятельности», созданные междисциплинарными научными группами. Мы не выбираем дорогу, мы определяем путь"
        />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="РТУ МИРЭА, официальный сайт РТУ МИРЭА, МИРЭА - Российский технологический университет, государственный вуз, РТУ МИРЭА Цифровизация правосудия, Цифровизация правосудия, конференция, РТУ МИРЭА Конференция, Суд, РТУ МИРЭА Суд"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ConfInfo />
      <Programm />
      <Speakers />
      <Register />
      <div style={{ margin: "100px auto", width: "1240px" }}>
        <PartnerBlock />
      </div>
      <Support />
      <Footer />
    </div>
  );
}
