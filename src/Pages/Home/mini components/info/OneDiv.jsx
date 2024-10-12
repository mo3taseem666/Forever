import React from 'react'

export default function OneDiv({icon,name,details}) {
  return (
    <div className='flex flex-col items-center justify-center'>
        {icon}
        <p className='font-semibold text-gray-800 mt-5'>{name}</p>
        <p className='font-medium text-gray-400'>{details}</p>
    </div>
  )
}
