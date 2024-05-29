import React from 'react'
import Reply_container from '../components/Reply_container'
import  Reply  from  '../components/Reply'
import { useDiscussion } from '../contexts/DiscussionContext'
import { useParams } from 'react-router-dom'
import Discussion_question from '../components/Discussion_question'
import Discussion_container from '../components/Discusions_container'


const Answer = () => {
 const {getSpecificQuestion,getAnswers,postAnswer,question,answerList}=useDiscussion()
 const {questionId}=useParams()
  getSpecificQuestion(questionId)
 const userId= localStorage.getItem('id')

  getAnswers(questionId)

  return (
    <div> 
      {/* Answer page specifc question displayd  plus reply given to that question is displayed. and user will have option to reply to the question in the page
      */}
      <div className="flex flex-col justify-center w-[70%] mx-auto">
        <div className='my-5 justify-between flex '> 
          <h1>Question</h1>
          <div>
            {/* search bar */}
            <input type="text" placeholder="Search" className="border-2 border-[#f9f9f9] rounded-lg p-2" />
          </div>
        </div> 
        <div >
            <Discussion_question question={question}/>
        </div>
        <div>
          <h2>Reply:</h2>
         <Reply_container answerList={answerList} />
          
        </div>
        <div>
          <Reply questionId={questionId } userId={userId}/>
        </div>

        
      </div>
      
        

      

    </div>
  )
}

export default Answer