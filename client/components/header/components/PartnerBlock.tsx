import styles from "./styles.module.scss";
import Image from "next/image";
import { RefObject, useRef } from "react";

import inf1 from "../../../public/img/partners/inf1.png";

import org1 from "../../../public/img/partners/org1.png";
import org2 from "../../../public/img/partners/org2.png";

import str1 from "../../../public/img/partners/str1.png";
import str2 from "../../../public/img/partners/str2.png";
import str3 from "../../../public/img/partners/str3.png";
import str4 from "../../../public/img/partners/str4.png";

interface Props {}

const PartnerBlock = (props: Props) => {
  const ref1 = useRef<HTMLAnchorElement>(null);
  const ref2 = useRef<HTMLAnchorElement>(null);
  const ref3 = useRef<HTMLAnchorElement>(null);
  const ref4 = useRef<HTMLAnchorElement>(null);
  const ref5 = useRef<HTMLAnchorElement>(null);
  const ref6 = useRef<HTMLAnchorElement>(null);
  const ref7 = useRef<HTMLAnchorElement>(null);

  const OpenLink = (ref: RefObject<HTMLAnchorElement>) => ref.current?.click();

  return (
    <div className={styles.PartnerBlock}>
      <a
        ref={ref1}
        className={styles.hiddenA}
        href="https://www.mirea.ru"
        target="_blank"
        rel="noreferrer"
      ></a>
      <a
        ref={ref2}
        className={styles.hiddenA}
        href="https://mos-gorsud.ru"
        target="_blank"
        rel="noreferrer"
      ></a>
      <a
        ref={ref3}
        className={styles.hiddenA}
        href="https://tssltd.ru/"
        target="_blank"
        rel="noreferrer"
      ></a>
      <a
        ref={ref4}
        className={styles.hiddenA}
        href="https://nanosemantics.ai"
        target="_blank"
        rel="noreferrer"
      ></a>
      <a
        ref={ref5}
        className={styles.hiddenA}
        href="http://www.metrogiprotrans.ru"
        target="_blank"
        rel="noreferrer"
      ></a>
      <a
        ref={ref6}
        className={styles.hiddenA}
        href="https://rarus.ru"
        target="_blank"
        rel="noreferrer"
      ></a>
      <a
        ref={ref7}
        className={styles.hiddenA}
        href="https://www.consultant.ru"
        target="_blank"
        rel="noreferrer"
      ></a>
      <div className="flex-column">
        <h3>ОРГАНИЗАТОРЫ</h3>
        <div className="flex-column">
          <Image
            alt="kek"
            src={org1.src}
            onClick={() => {
              OpenLink(ref1);
            }}
            width={274}
            height={62}
          />
          <Image
            alt="kek"
            src={org2.src}
            onClick={() => {
              OpenLink(ref2);
            }}
            width={207}
            height={61}
          />
        </div>
      </div>
      <div className="flex-column">
        <h3>СТРАТЕГИЧЕСКИЕ ПАРТНЕРЫ</h3>
        <div className="flex-column">
          <Image
            alt="kek"
            src={str1.src}
            onClick={() => {
              OpenLink(ref3);
            }}
            width={181}
            height={37}
          />
          <Image
            alt="kek"
            src={str2.src}
            onClick={() => {
              OpenLink(ref4);
            }}
            width={203}
            height={43}
          />
          <Image
            alt="kek"
            src={str3.src}
            onClick={() => {
              OpenLink(ref5);
            }}
            width={208}
            height={45}
          />
          <Image
            alt="kek"
            src={str4.src}
            onClick={() => {
              OpenLink(ref6);
            }}
            width={203}
            height={43}
          />
        </div>
      </div>
      <div className="flex-column">
        <h3>ИНФОРМАЦИОННЫЕ ПАРТНЕРЫ</h3>
        <div className="flex-column">
          <Image
            alt="kek"
            src={inf1.src}
            onClick={() => {
              OpenLink(ref7);
            }}
            width={172}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerBlock;
