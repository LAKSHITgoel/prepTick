import React from "react";
import Question from "../component/Question";

const QuestionContainer = ({ home: { data, meta } }) => {
  return (
    <div>
      {data.length && data.map(question => (
        <Question key={`_${question.id}`} {...question} />
      ))}
    </div>
  );
};

export default QuestionContainer;
