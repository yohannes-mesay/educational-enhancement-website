import React from 'react'
import Reply_container from '../components/Reply_container'
import { Reply } from '@mui/icons-material'

const Answer = () => {
  return (
    <div> 
      {/* Answer page specifc question displayd  plus reply given to that question is displayed. and user will have option to reply to the question in the page
      */}
      <div className="flex flex-col justify-center w-[70%] mx-auto">
        <div className='my-5 justify-between flex '> 
          <h1>How to solve this problem?</h1>
          <p>I am facing this problem and I have tried this and that but nothing is working. Can someone help me with this?</p>
          <div>
            {/* search bar */}
            <input type="text" placeholder="Search" className="border-2 border-[#f9f9f9] rounded-lg p-2" />
          </div>
        </div> 
        <div>
          <h2>Reply:</h2>
          <p>Here is the reply to the question</p>
        </div>
        <div><Reply_container /></div>
        <div><Reply/></div>
        </div>
      
        

      

    </div>
  )
}

export default Answer