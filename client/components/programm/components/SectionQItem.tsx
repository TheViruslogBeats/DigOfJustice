import React from "react";

interface Props {
  key: number;
  question: string;
}

const SectionQItem = (props: Props) => {
  return (
    <li key={props.key}>
      <p>{props.question}</p>
    </li>
  );
};

export default SectionQItem;
