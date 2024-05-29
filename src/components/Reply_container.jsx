import React from "react";
import Reply_Item from "./Reply_Item";

const Reply_container = ({answerList}) => {

  // code to generate a random id for each answer in anwe
  return (
    <div className="flex flex-col w-[100%] border-neutral-500 shadow-sm">
      {answerList.length === 0 ? (
        <div>
          <h1>No replies yet</h1>
        </div>
      ) : (
        <div>
          {answerList.map((question) => (
            <Reply_Item key={question.answerId} question={question} />
          ))}
        </div>
      )}
    </div>
  );

};

export default Reply_container;
