import React from 'react'
//arrow icon form material ui components
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from 'react';
import Reply_container from './Reply_container';

const Discussion_question = ({question}) => {
  const [showDetails, setShowDetails] = useState(false)
  const handelDescription = () => {
    setShowDetails(!showDetails)
  }
  console.log(showDetails)
  return (
    <div>
      <div className="flex p-5 pt-3 bg-neutral-100 border-gray-300 shadow-md rounded-md mb-8">
        <div className="flex flex-col w-full h-4/6">
          <div className="grid items-center">
            <div className="flex w-[80%]">
              <div className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="user"
                  className=" w-12 h-12  rounded-md"
                />
              </div>
              <div className=" w-[100%] ml-4">
                <div className="">
                  <h1 className="text-sm  font-extralight mb-3">John Doe </h1>
                </div>
                <div className="">
                  <p className="text-lg font-semibold font-serif">
                    {question.questionText}
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="flex  items-center">
              {showDetails ? (<button>
                <KeyboardArrowUpIcon onClick={handelDescription} />
                </button>
              ) : (
                <button>
                  <KeyboardArrowDownIcon onClick={handelDescription} />
                </button>
              )}
            </div> */}
          </div>
          <div>
            <p>{question.questionDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discussion_question