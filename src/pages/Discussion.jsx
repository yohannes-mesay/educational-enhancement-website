import React from 'react'
import Button from '@mui/material/Button'
import Discusions_container from '../components/Discusions_container';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Discussion = () => {
const navigate = useNavigate();
const askhandler = () => {
  navigate("/ask");
}
const dummyquestions = [
  {
    id: 1,
    title: 'How to solve this problem?',
    description: 'I am facing this problem and I have tried this and that but nothing is working. Can someone help me with this?'
  },
  {
    id: 2,
    title: 'How to solve this problem?',
    description: 'I am facing this problem and I have tried this and that but nothing is working. Can someone help me with this?'
  },
  {
    id: 3,
    title: 'How to solve this problem?',
    description: 'I am facing this problem and I have tried this and that but nothing is working. Can someone help me with this?'
  },
]

const [questions, setQuestions] = useState(dummyquestions)
//a callback function to accept questions from Ask.jsx and append them to the dummy questions arrray.

const addQuestion=(prev)=>{
  setQuestions((prev)=>[...prev, questions])
}




// console.log(questions)

  return (
    <div>
      {/* Disscusion Forum page */}
      <div className="flex flex-col justify-center w-[75%] mx-auto">
        <div className='my-5'> <Button onClick={askhandler} sx={{borderRadius:"30px"}} variant="contained" size="medium">
          Ask a Question
        </Button></div> 
        {/* array of Questions */}
        <div>

            <Discusions_container key={questions.id} question={questions} />
         
        </div>
        
       
      </div>
    </div>
  );
}

export default Discussion