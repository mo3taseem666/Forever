import React from 'react'

export default function Middle() {
  return (
    <div className='flex flex-col gap-5'>
        <p className='text-xl font-semibold'>COMPANY</p>
        <ul className='flex text-sm text-gray-400 font-medium flex-col'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>
    </div>
  )
}
