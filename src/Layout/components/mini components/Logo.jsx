import React from 'react';
import logo from '../../../assets/frontend_assets/logo.png';
import { Link } from 'react-router-dom';

export default function Logo() {
   return (
      <Link to="/">
         <img src={logo} alt="logo" className="w-[144px] mt-1" />
      </Link>
   );
}
