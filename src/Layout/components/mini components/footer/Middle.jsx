import React from 'react'
import { Link } from 'react-router-dom'

export default function Middle() {
  return (
    <div className='flex flex-col gap-2'>
        <p className='text-xl xs:text-lg font-semibold'>WEBSITE</p>
        <ul className='flex text-sm text-gray-400 font-medium flex-col'>
           <Link to='/'><li>Home</li></Link>
           <Link to='/Collection'><li>Collection</li></Link>
           <Link to='/About'><li>About us</li></Link>
           <Link to='/Contact'><li>Contact</li></Link>

        </ul>
    </div>
  )
}
