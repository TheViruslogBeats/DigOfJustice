import { useRef, useState } from "react";
import styles from "./styles.module.scss";

interface Props {}

const Register = (props: Props) => {
  const [works, setWorks] = useState(0);
  const fullName = useRef<HTMLInputElement | null>(null);
  const workPlace = useRef<HTMLInputElement | null>(null);
  const studyPlace = useRef<HTMLInputElement | null>(null);
  const acDegree = useRef<HTMLInputElement | null>(null);
  const docTheme = useRef<HTMLInputElement | null>(null);
  const fullNameSupervisor = useRef<HTMLInputElement | null>(null);
  const acDegreeSupervisor = useRef<HTMLInputElement | null>(null);
  const supervisorPosition = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const phNum = useRef<HTMLInputElement | null>(null);
  const formPartic = useRef<HTMLSelectElement | null>(null);

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
              checked={works === 0}
              onClick={() => {
                setWorks(0);
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
              checked={works === 1}
              onClick={() => {
                setWorks(1);
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

            {works === 1 ? (
              <>
                <input
                  type="text"
                  placeholder="Место работы и должность"
                  className={styles.registerInput}
                  ref={workPlace}
                />
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Место обучения и специальность"
                  className={styles.registerInput}
                  ref={studyPlace}
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
              ref={docTheme}
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
              ref={acDegreeSupervisor}
            />
            <input
              type="text"
              placeholder="Должность научного руководителя"
              className={styles.registerInput}
              ref={supervisorPosition}
            />
            <div className={styles.checkboxWrapper}>
          <p>ФОРМА УЧАСТИЯ</p>
          <div className={styles.checkboxContainer}>
            <label className={styles.CheckboxLabel}>
              <input
                type="radio"
                name="formaUhc"
                className={styles.hiddenCheckbox}
              />
              <span className={styles.FakeCheckbox}></span>
              <span className={styles.CheckboxText}>Очно</span>
            </label>
            <label className={styles.CheckboxLabel}>
              <input
                type="radio"
                name="formaUhc"
                className={styles.hiddenCheckbox}
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
