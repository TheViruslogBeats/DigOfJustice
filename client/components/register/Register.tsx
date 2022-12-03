import { useRef, useState } from "react";
import styles from "./styles.module.scss";

interface Props {}

const Register = (props: Props) => {
  const [activityType, setActivityType] = useState(0);
  const fullName = useRef<HTMLInputElement | null>(null);
  const workPlaceAndPosition = useRef<HTMLInputElement | null>(null);
  const studyPlaceAndSpecialy = useRef<HTMLInputElement | null>(null);
  const acDegree = useRef<HTMLInputElement | null>(null);
  const topic = useRef<HTMLInputElement | null>(null);
  const fullNameSupervisor = useRef<HTMLInputElement | null>(null);
  const rankSupervisor = useRef<HTMLInputElement | null>(null);
  const positionSupervisor = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const [formOfParticipation, setFormOfParticipation] = useState(0);

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
              value={0}
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
              value={1}
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
                    value={0}
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
                    value={1}
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

        <button className={styles.registerButton}>РЕГИСТРАЦИЯ</button>
      </form>
    </div>
  );
};

export default Register;
