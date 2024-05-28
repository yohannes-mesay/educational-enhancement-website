import React from 'react'
import Discussion_question from './Discussion_question'

const Discusions_container = (props) => {

  return (
    <div>
      <div className="flex flex-col">
         {/* map each object to discussion question*/}
        {props.questionList.map((question) => (
          <Discussion_question key={question.id} question={question} />))}

      </div>
    </div>
  );
};

export default Discusions_container 