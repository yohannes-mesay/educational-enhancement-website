import React from 'react'
//arrow icon form material ui components
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from 'react';
import Reply_container from './Reply_container';
import { Button } from '@mui/material';
import { useNavigate} from 'react-router-dom';

const Discussion_question = ({question}) => {
  const [showDetails, setShowDetails] = useState(false)
  const navigate = useNavigate();
  const handelDescription = () => {
    setShowDetails(!showDetails)
  }
 
  const replyHandler = () => {
    navigate(`/Answer/${question.questionId}`)
  }
  return (
    <div>
      <div
        onClick={replyHandler}
        className="flex p-5 pt-3 bg-neutral-100 border-gray-300 shadow-md rounded-md mb-8"
      >
        <div className="flex flex-col w-full h-4/6">
          <div className="grid items-center">
            <div className="flex w-[80%] mb-3">
              <div className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="user"
                  className=" w-12 h-12  rounded-md"
                />
              </div>
              <div className=" w-[100%] ml-4">
                <div className="">
                  <h1 className="text-sm  font-extralight mb-1">John Doe </h1>
                </div>
                <div className="">
                  <p className="text-lg font-semibold font-serif">
                    {question.questionText}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>{question.questionDescription}</p>
          </div>
          <div className='flex justify-end'>
            <Button classname="text-[]" onClick={replyHandler}>
              Reply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discussion_question