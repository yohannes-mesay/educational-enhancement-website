import React from 'react'

const Reply = () => {
  return (
    <div>
      <div>
       <div className='bg-[#f9f9f9] p-5 rounded-lg my-5'>
          <div className='flex justify-between'>
            <h1 className='text-lg font-semibold'>Reply</h1>
            <button className='text-[#ff0000] font-semibold'>Cancel</button>
          </div>
          <div className='my-5'>
            <textarea className='w-[100%] h-[100px] p-2 border-2 border-[#f9f9f9] rounded-lg' placeholder='Write your reply here...'></textarea>
          </div>
          <div className='flex justify-end'>
            <button className='bg-[#65f677] text-white px-5 py-2 rounded-lg'>Reply</button>
          </div>
       </div>
      </div>
    </div>
  )
}

export default Reply
