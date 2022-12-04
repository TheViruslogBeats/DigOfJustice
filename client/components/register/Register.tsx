import { observer } from "mobx-react-lite";
import { useEffect, useRef, useState } from "react";
import registerState from "../../state/registerState";
import styles from "./styles.module.scss";

interface Props {}

const Register = (props: Props) => {
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

  const click = async () => {
    if (!accept) {
      return;
    }
    if(activityType == 0 && workPlaceAndPosition.current){
      workPlaceAndPosition.current.value = ""
    } else if(activityType == 1 && studyPlaceAndSpecialy.current){
      studyPlaceAndSpecialy.current.value = ""
    }
    await registerState.sendReport({
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
  };

  return (
    <div className={styles.register}>
      <h1 className="titleH1">РЕГИСТРАЦИЯ</h1>
      <div className={styles.checkboxWrapper}>
        <p>ВИД ДЕЯТЕЛЬНОСТИ</p>
        <div className={styles.checkboxContainer}>
          <label className={styles.CheckboxLabel}>
            <input
              type="radio"
              name="vidDe"
              className={styles.hiddenCheckbox}
              checked={activityType === 0}
              onClick={() => {
                setActivityType(0);
              }}
            />
            <span className={styles.FakeCheckbox}></span>
            <span className={styles.CheckboxText}>Учусь</span>
          </label>
          <label className={styles.CheckboxLabel}>
            <input
              type="radio"
              name="vidDe"
              className={styles.hiddenCheckbox}
              checked={activityType === 1}
              onClick={() => {
                setActivityType(1);
              }}
            />
            <span className={styles.FakeCheckbox}></span>
            <span className={styles.CheckboxText}>Работаю</span>
          </label>
        </div>
      </div>
      <form className={styles.registerForm}>
        <div className={styles.registerContainer}>
          <div className={styles.registerContainerLeft}>
            <input
              type="text"
              placeholder="ФИО"
              className={styles.registerInput}
              ref={fullName}
            />

            {activityType === 1 ? (
              <>
                <input
                  type="text"
                  placeholder="Место работы и должность"
                  className={styles.registerInput}
                  ref={workPlaceAndPosition}
                />
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Место обучения и специальность"
                  className={styles.registerInput}
                  ref={studyPlaceAndSpecialy}
                />
              </>
            )}
            <input
              type="text"
              placeholder="Учёная степень или учёное звание"
              className={styles.registerInput}
              ref={acDegree}
            />
            <select className={styles.registerInput} ref={section}>
              {registerState.regList.map((reg) => {
                return (
                  <option key={reg.id} value={reg.title}>
                    {reg.title}
                  </option>
                );
              })}
            </select>
            <input
              type="text"
              placeholder="Тема доклада"
              className={styles.registerInput}
              ref={topic}
            />
            <input
              type="email"
              placeholder="Почта"
              className={styles.registerInput}
              ref={email}
            />
          </div>
          <div className={styles.registerContainerRight}>
            <input
              type="text"
              placeholder="ФИО научного руководителя"
              className={styles.registerInput}
              ref={fullNameSupervisor}
            />
            <input
              type="text"
              placeholder="Звание научного руководителя"
              className={styles.registerInput}
              ref={rankSupervisor}
            />
            <input
              type="text"
              placeholder="Должность научного руководителя"
              className={styles.registerInput}
              ref={positionSupervisor}
            />
            <div className={styles.checkboxWrapper}>
              <p>ФОРМА УЧАСТИЯ</p>
              <div className={styles.checkboxContainer}>
                <label className={styles.CheckboxLabel}>
                  <input
                    type="radio"
                    name="formaUhc"
                    className={styles.hiddenCheckbox}
                    checked={formOfParticipation === 0}
                    onClick={() => {
                      setFormOfParticipation(0);
                    }}
                  />
                  <span className={styles.FakeCheckbox}></span>
                  <span className={styles.CheckboxText}>Очно</span>
                </label>
                <label className={styles.CheckboxLabel}>
                  <input
                    type="radio"
                    name="formaUhc"
                    className={styles.hiddenCheckbox}
                    checked={formOfParticipation === 1}
                    onClick={() => {
                      setFormOfParticipation(1);
                    }}
                  />
                  <span className={styles.FakeCheckbox}></span>
                  <span className={styles.CheckboxText}>Онлайн</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <label className={styles.CheckboxLabel}>
          <input
            type="checkbox"
            className={styles.hiddenCheckbox}
            checked={accept}
            onClick={() => {
              setAccept(!accept);
            }}
          />
          <span className={styles.FakeCheckbox}></span>
          <span className={styles.CheckboxText}>
            Согласие на обработку персональный данных
          </span>
        </label>
        <button
          className={styles.registerButton}
          disabled={!accept}
          onClick={(e) => {
            event?.preventDefault();
            click();
          }}
        >
          РЕГИСТРАЦИЯ
        </button>
      </form>
    </div>
  );
};

export default observer(Register);
