import styles from "../styles.module.scss";
import { SectionListReportType } from "../../../state/headerState";

interface Props {
  report: SectionListReportType;
}

const SectionReportItem = (props: Props) => {
  return (
    <li key={props.report.id} className={styles.programmSectionListPeapLi + " flex-column gap16"}>
      <p>{props.report.topic}</p>
      <div className={styles.programmSectionListPeapLiCtn}>
        <div>
          <p>
            <b>{props.report.fullName}</b>
          </p>
          <p>
            {props.report.studyPlaceAndSpecialy.length > 0 &&
              props.report.studyPlaceAndSpecialy}
            {props.report.workPlaceAndPosition.length > 0 &&
              props.report.workPlaceAndPosition}
          </p>
        </div>
        <div>
          <p>{props.report.formOfParticipation}</p>
        </div>
      </div>
    </li>
  );
};

export default SectionReportItem;
