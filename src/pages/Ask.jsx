import React, { useState } from 'react'
import { Button } from '@mui/material'
import arrow from '../assets/arrow.png'
import { useNavigate } from 'react-router-dom'
const Ask = () => {
  const navigate= useNavigate();
  const [title, setTitle]= useState('');
  const [description, setDescription]= useState('');
 const submithandler=(e)=>{
  //  prevent refresh on submit
    e.preventDefault();
  //  check if title and description are not empty and alert if they are
   if (!title) {
    alert('Title is required');
   }
  else if( !description){
    alert('Description is required');
  }
  //  navigate to discussion page if title and description are not empty
   title && description && navigate('/Discussion');
 }

  return (
    <div>
      <div className="flex flex-col w-[75%] mx-auto">
        <div className="bg-white p-4 rounded-md shadow-md">
          <div className="my-14 m">
            <h1 className="text-4xl font-semibold font-serif">
              Steps to ask a question
            </h1>
            <ul className="list-none mt-4 ">
              <li className="m-2 font-serif">
                <img className=" inline mr-4" src={arrow} alt="" />
                Summarize your problems in a one-line title.
              </li>
              <li className="m-2 font-serif">
                <img className=" inline mr-4" src={arrow} alt="" />
                Describe your problem in more detail.
              </li>
              <li className="m-2 font-serif">
                <img className=" inline mr-4" src={arrow} alt="" />
                Explain what you have tried and what you expected to happen.
              </li>
              <li className="m-2 font-serif">
                <img className=" inline mr-4" src={arrow} alt="" />
                Explain what you have tried and what you expected to happen.
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-7 grid grid-rows w-[100%]   ">
          <div className=" justify-center mx-auto">
            <h2 className=" font-serif text-4xl w-[100%]">
              Post Your Question
            </h2>
          </div>
          <div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <form action="" onSubmit={submithandler}>
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full p-2 rounded-md border-2 border-gray-300"
                  onChange={(e)=>setTitle(e.target.value)}
                />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Description"
                  className="w-full p-2 rounded-md border-2 border-gray-300 mt-2"
                  onChange={(e)=>setDescription(e.target.value)}
                ></textarea> 
                 <div className='w-[40%] flex justify-center mx-auto mt-2'>
                <Button
                  type='submit'
                  variant="contained"
                  size="medium"
                  className="mt-2"
                 
                >
                  Post Question
                </Button>
              </div>
              </form>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ask