import React from 'react'
import { useDiscussion } from '../contexts/DiscussionContext'
import { useState } from 'react'


const Reply = ({questionId, userId}) => {
const {postAnswers}= useDiscussion();
const[reply, setReply]=useState({questionId:"", userId:"", answerText:""});
const[answerText, setAnswerText]=useState('');

const sumbithandler=(e)=>{
  e.preventDefault();
  answerText && postAnswers({questionId: questionId, userId: userId, answer: answerText})
 
}
  return (
    <div>
      <div>
       <div className='bg-[#f9f9f9] p-5 rounded-lg my-5'>
         
         
          <form action="" onSubmit={sumbithandler}>
             <div className='flex justify-between'>
               <h1 className='text-lg font-semibold'>Reply</h1>
            </div>
          <div className='my-5'>
            <textarea onChange={(e)=> setAnswerText(e.target.value)} className='w-[100%] h-[100px] p-2 border-2 border-[#f9f9f9] rounded-lg' placeholder='Write your reply here...'></textarea>
            </div>
          <div className='flex justify-end'>
            <button type='submit' className='bg-[#65f677] text-white px-5 py-2 rounded-lg'>Reply</button></div>
          </form> 
       </div>
      </div>
    </div>
  )
}

export default Reply
