import { motion } from "framer-motion";
import { observer } from "mobx-react-lite";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import registerState from "../../state/registerState";
import styles from "./styles.module.scss";
import bgModal from "../../public/img/bgModal-min.jpg";
import headerState from "../../state/headerState";

interface Props {}

const Register = (props: Props) => {
  const regRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    registerState.getRegisterList();
  }, []);
  const [activityType, setActivityType] = useState(0);
  const fullName = useRef<HTMLInputElement | null>(null);
  const workPlaceAndPosition = useRef<HTMLInputElement | null>(null);
  const studyPlaceAndSpecialy = useRef<HTMLInputElement | null>(null);
  const acDegree = useRef<HTMLInputElement | null>(null);
  const topic = useRef<HTMLInputElement | null>(null);
  const section = useRef<HTMLSelectElement | null>(null);
  const fullNameSupervisor = useRef<HTMLInputElement | null>(null);
  const rankSupervisor = useRef<HTMLInputElement | null>(null);
  const positionSupervisor = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const [formOfParticipation, setFormOfParticipation] = useState(0);
  const [accept, setAccept] = useState(false);

  const [modal, setModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const click = async () => {
    if (!accept) {
      return false;
    }
    if (activityType == 0 && workPlaceAndPosition.current) {
      workPlaceAndPosition.current.value = "";
    } else if (activityType == 1 && studyPlaceAndSpecialy.current) {
      studyPlaceAndSpecialy.current.value = "";
    }
    if (
      fullName.current?.value.length === 0 ||
      acDegree.current?.value.length === 0 ||
      topic.current?.value.length === 0 ||
      fullNameSupervisor.current?.value.length === 0 ||
      rankSupervisor.current?.value.length === 0 ||
      positionSupervisor.current?.value.length === 0 ||
      email.current?.value.length === 0
    ) {
      return false;
    }
    let response = await registerState.sendReport({
      activityType,
      fullName: fullName.current?.value,
      workPlaceAndPosition: workPlaceAndPosition.current?.value,
      studyPlaceAndSpecialy: studyPlaceAndSpecialy.current?.value,
      acDegree: acDegree.current?.value,
      topic: topic.current?.value,
      section: section.current?.value,
      fullNameSupervisor: fullNameSupervisor.current?.value,
      rankSupervisor: rankSupervisor.current?.value,
      positionSupervisor: positionSupervisor.current?.value,
      email: email.current?.value,
      formOfParticipation,
    });
    return response;
  };

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  };

  const validationEmail = () => {
    if (email.current) {
      if (!validateEmail(email.current?.value)) {
        email.current.className =
          styles.registerInput + " " + styles.registerInputError;
      } else {
        email.current.className = styles.registerInput;
      }
    }
  };

  const validator = (ref: MutableRefObject<HTMLInputElement | null>) => {
    if (ref.current) {
      if (ref.current.value.length > 0) {
        ref.current.className = styles.registerInput;
      } else {
        ref.current.className =
          styles.registerInput + " " + styles.registerInputError;
      }
    }
  };

  useEffect(() => {
    let interval: any = null;
    if (regRef?.current?.offsetTop) {
      headerState.setRegOffsetTop(regRef.current?.offsetTop);
    }
    interval = setInterval(() => {
      if (regRef?.current?.offsetTop) {
        headerState.setRegOffsetTop(regRef.current?.offsetTop);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div ref={regRef} className={styles.register + " mx-auto"}>
      <h1 className="titleH1 mx-auto">РЕГИСТРАЦИЯ</h1>
      <div className={styles.checkboxWrapper + " mx-auto"}>
        <p>ВИД ДЕЯТЕЛЬНОСТИ</p>
        <div className={styles.checkboxContainer}>
          <label className={styles.CheckboxLabel + " mx-auto"}>
            <input
              type="radio"
              name="vidDe"
              className={styles.hiddenCheckbox}
              onClick={() => {
                setActivityType(0);
              }}
            />
            <span className={styles.FakeCheckbox}></span>
            <span className={styles.CheckboxText}>Учусь</span>
          </label>
          <label className={styles.CheckboxLabel + " mx-auto"}>
            <input
              type="radio"
              name="vidDe"
              className={styles.hiddenCheckbox}
              onClick={() => {
                setActivityType(1);
              }}
            />
            <span className={styles.FakeCheckbox}></span>
            <span className={styles.CheckboxText}>Работаю</span>
          </label>
        </div>
      </div>
      <form className="flex-column gap16 mx-auto">
        <div className={styles.registerContainer + " mx-auto"}>
          <div className="flex-column gap16">
            <input
              type="text"
              placeholder="ФИО (Обязательно)"
              className={styles.registerInput}
              onChange={() => {
                validator(fullName);
              }}
              ref={fullName}
            />
            <input
              type="email"
              placeholder="Почта (Обязательно)"
              className={styles.registerInput}
              onChange={() => {
                validationEmail();
              }}
              ref={email}
            />
            {activityType === 1 ? (
              <>
                <input
                  type="text"
                  placeholder="Место работы и должность"
                  className={styles.registerInput}
                  onChange={() => {
                    validator(workPlaceAndPosition);
                  }}
                  ref={workPlaceAndPosition}
                />
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Место обучения и специальность (Обязательно)"
                  className={styles.registerInput}
                  onChange={() => {
                    validator(studyPlaceAndSpecialy);
                  }}
                  ref={studyPlaceAndSpecialy}
                />
              </>
            )}
            <input
              type="text"
              placeholder="Учёная степень и учёное звание (Обязательно)"
              className={styles.registerInput}
              onChange={() => {
                validator(acDegree);
              }}
              ref={acDegree}
            />
          </div>
          <div className="flex-column gap16">
            <select className={styles.registerInputSelect} ref={section}>
              {registerState.regList.map((reg) => {
                return (
                  <option key={reg.id} value={reg.title}>
                    Секция: {reg.title}
                  </option>
                );
              })}
            </select>
            <input
              type="text"
              placeholder="Тема доклада (Обязательно)"
              className={styles.registerInput}
              onChange={() => {
                validator(topic);
              }}
              ref={topic}
            />
            <input
              type="text"
              placeholder="ФИО научного руководителя (Обязательно)"
              className={styles.registerInput}
              onChange={() => {
                validator(fullNameSupervisor);
              }}
              ref={fullNameSupervisor}
            />
            <input
              type="text"
              placeholder="Звание научного руководителя (Обязательно)"
              className={styles.registerInput}
              onChange={() => {
                validator(rankSupervisor);
              }}
              ref={rankSupervisor}
            />
            <input
              type="text"
              placeholder="Должность научного руководителя (Обязательно)"
              className={styles.registerInput}
              onChange={() => {
                validator(positionSupervisor);
              }}
              ref={positionSupervisor}
            />
          </div>
        </div>
        <label className={styles.CheckboxLabel + " mx-auto"}>
          <input
            type="checkbox"
            className={styles.hiddenCheckbox}
            onClick={() => {
              setAccept(!accept);
            }}
          />
          <span className={styles.FakeCheckbox}></span>
          <span className={styles.CheckboxText}>
            Я согласен на обработку моей персональной информации, определенной{" "}
            <a
              href="#!"
              className={styles.docReader}
              onClick={() => {
                setModal(true);
              }}
            >
              Политикой конфиденциальности.
            </a>
          </span>
        </label>
        <button
          className={styles.registerButton + " mx-auto"}
          disabled={!accept}
          onClick={async (e) => {
            event?.preventDefault();
            let response = await click();
            if (response) {
              setSuccess(true);
              setTimeout(() => {
                setSuccess(false);
                setActivityType(0);
                document
                  .querySelectorAll("input")
                  .forEach((i) => (i.value = ""));
              }, 3000);
            } else {
              setError(true);
              setTimeout(() => {
                setError(false);
              }, 3000);
            }
          }}
        >
          РЕГИСТРАЦИЯ
        </button>
      </form>
      <motion.div
        onClick={() => {
          setModal(false);
        }}
        initial={{ opacity: 0, clipPath: "circle(0%)" }}
        animate={{
          opacity: modal || success || error ? 1 : 0,
          clipPath: modal || success || error ? "circle(100%)" : "circle(0%)",
        }}
        transition={{ duration: 2, type: "spring" }}
        className="posFix blackBG"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, clipPath: "circle(0%)" }}
        animate={{
          opacity: success ? 1 : 0,
          clipPath: success ? "circle(100%)" : "circle(0%)",
        }}
        transition={{ duration: 2, type: "spring" }}
        className={styles.registerModal + " posFix"}
      >
        <p>РЕГИСТРАЦИЯ ПРОШЛА УСПЕШНО</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, clipPath: "circle(0%)" }}
        animate={{
          opacity: error ? 1 : 0,
          clipPath: error ? "circle(100%)" : "circle(0%)",
        }}
        transition={{ duration: 2, type: "spring" }}
        className={styles.registerModal + " posFix"}
      >
        <p>ОШИБКА!</p>
        <p></p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, clipPath: "circle(0%)" }}
        animate={{
          opacity: modal ? 1 : 0,
          clipPath: modal ? "circle(100%)" : "circle(0%)",
        }}
        transition={{ duration: 2, type: "spring" }}
        className={styles.modal + " posFix"}
        style={{
          background: `url(${bgModal.src}) no-repeat #fff`,
        }}
      >
        <h2>политика обработки персональных данных</h2>
        <div className="flex-column">
          <p>
            СОГЛАСИЕ на обработку персональных данных участника I национальной
            научно - практической конференции «Цифровизация правосудия: проблемы
            и перспективы» Субъект, разрешает федеральному государственному
            бюджетному образовательному учреждению высшего образования «МИРЭА –
            Российский технологический университет», юридический адрес: 119454,
            г. Москва, проспект Вернадского, 78 (далее - Университет), обработку
            персональных данных, указанных в пункте 3, на нижеследующих
            условиях:
          </p>
          <p>
            1. Субъект дает согласие на обработку Университетом своих
            персональных данных, то есть совершение, в том числе, следующих
            действий: сбор, систематизацию, накопление, хранение, уточнение
            (обновление, изменение), использование, распространение (в том
            числе, передачу), обезличивание, блокирование, уничтожение
            персональных данных (общее описание вышеуказанных способов обработки
            данных приведено в Федеральном законе от 27.07.2006 №152 – ФЗ «О
            персональных данных»), а также право на передачу такой информации
            третьим лицам, если это необходимо для публикации результатов
            конференции, и в случаях, установленных нормативными документами
            вышестоящих органов и законодательством.
          </p>
          <p>
            2. Университет обязуется использовать данные Субъекта в целях
            организации и проведения I национальной научно - практической
            конференции «Цифровизация правосудия: проблемы и перспективы» (далее
            - конференция). Университет может раскрыть правоохранительным
            органам любую информацию по официальному запросу в случаях,
            установленных законодательством.
          </p>
          <div>
            <p>
              3. Перечень персональных данных, передаваемых Университету на
              обработку:{" "}
            </p>
            <ul>
              <li>фамилия, имя и отчество;</li>
              <li>сведения о наличии ученых степеней и званий;</li>
              <li>контактная информация;</li>
              <li>должность </li>
              <li>место работы (учебы)</li>
            </ul>
          </div>
          <p>
            4. Обработка персональных данных субъекта осуществляется в
            соответствии с требованиями законодательства Российской Федерации и
            локальными актами Университета.
          </p>
          <p>
            5. Субъект даёт согласие на использование открытых каналов связи
            сети Интернет для передачи Университету своих персональных данных.
          </p>
          <p>
            6. Настоящее согласие действует с момента регистрации на участие в
            конференции и может быть отозвано Субъектом в установленном порядке.
            Для участия в мероприятии необходимо в срок до *** г. включительно
            зарегистрироваться на мероприятие. Факт регистрации означает:
            согласие на обработку персональных данных см. СОГЛАСИЕ на обработку
            персональных данных участника I национальной научно - практической
            конференции «Цифровизация правосудия: проблемы и перспективы» , а
            также ознакомление с локальными нормативно-правовыми актами
            Университета в области обработки персональных данных
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default observer(Register);
