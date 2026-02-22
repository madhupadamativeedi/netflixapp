import React from 'react'

const CardTitle = ({title}) => {
  return (
    <div className="relative ml-5 flex gap-2  items-center py-10">
      <div className='w-[6px] h-[5vh] bg-[#DC2626] rounded-2xl '></div>

        <h1 className="text-[1.875rem] leading-9 text-[#fcf4f4] font-extrabold  
       ">{title}</h1>
    </div>
  )
}

export default CardTitle