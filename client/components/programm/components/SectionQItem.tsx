import React from "react";

interface Props {
  question: string;
}

const SectionQItem = (props: Props) => {
  return (
    <li>
      <p>{props.question}</p>
    </li>
  );
};

export default SectionQItem;
