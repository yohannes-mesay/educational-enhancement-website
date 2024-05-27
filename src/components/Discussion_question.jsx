import React from 'react'
//arrow icon form material ui components
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from 'react';

const Discussion_question = ({question}) => {
  const [showDescription, setShowDescription] = useState(false)
  const handelDescription = () => {
    setShowDescription(!showDescription)
  }
  console.log(showDescription)
  return (
    <div>
      <div className="flex p-5 bg-slate-300 rounded-md mb-8">
        <div className="flex flex-col w-full h-5/6">
          <div className="grid grid-cols-3 items-center">
            <div className="flex">
              <div className="flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="user"
                  className="w-16 h-18 rounded-full"
                />
                <div className="ml-2">
                  <h1 className="text-sm font-semibold">John Doe</h1>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xl font-serif">{question.title}</p>
            </div>
            <div className="flex  justify-self-end">
              {showDescription ? (<button>
                <KeyboardArrowUpIcon onClick={handelDescription} />
                </button>
              ) : (
                <button>
                  <KeyboardArrowDownIcon onClick={handelDescription} />
                </button>
              )}
            </div>
          </div>
          {showDescription&&<div className='px-10 w-[80%] mx-auto'><p>{question.description}</p></div>}
        </div>
      </div>
    </div>
  );
}

export default Discussion_question