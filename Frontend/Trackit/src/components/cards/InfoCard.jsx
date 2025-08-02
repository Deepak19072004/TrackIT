import React from 'react'

export const InfoCard = ({icon, label, value, color}) => {
  return (
    <div className='flex items-center gap-3'>
         <div className={`w-2 md:w-2 h-3 md:h-5 ${color} rounded-full`} />

            <p className='text-xs text-gray-500 md:text-[14px]'>
                <span className='text-sm text-black md:text-[15px] font-semibold'>{value}</span> {label}
            </p>
    </div>
  )
}
