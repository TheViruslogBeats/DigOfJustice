import styles from "./styles.module.scss";
import Image from "next/image";

import inf1 from "../../../public/img/partners/inf1.png";

import org1 from "../../../public/img/partners/org1.png";
import org2 from "../../../public/img/partners/org2.png";

import str1 from "../../../public/img/partners/str1.png";
import str2 from "../../../public/img/partners/str2.png";
import str3 from "../../../public/img/partners/str3.png";
import str4 from "../../../public/img/partners/str4.png";

interface Props {}

const PartnerBlock = (props: Props) => {
  return (
    <div className={styles.PartnerBlock}>
      <div className="flex-column">
        <h3>ОРГАНИЗАТОРЫ</h3>
        <div className="flex-column">
          <Image alt="kek" src={org1.src} width={274} height={62} />
          <Image alt="kek" src={org2.src} width={207} height={61} />
        </div>
      </div>
      <div className="flex-column">
        <h3>СТРАТЕГИЧЕСКИЕ ПАРТНЕРЫ</h3>
        <div className="flex-column">
          <Image alt="kek" src={str1.src} width={181} height={37} />
          <Image alt="kek" src={str2.src} width={203} height={43} />
          <Image alt="kek" src={str3.src} width={208} height={45} />
          <Image alt="kek" src={str4.src} width={203} height={43} />
        </div>
      </div>
      <div className="flex-column">
        <h3>ИНФОРМАЦИОНЫЕ ПАРТНЕРЫ</h3>
        <div className="flex-column">
          <Image alt="kek" src={inf1.src} width={172} height={40} />
        </div>
      </div>
    </div>
  );
};

export default PartnerBlock;
