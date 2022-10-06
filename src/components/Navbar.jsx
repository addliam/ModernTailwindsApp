import React, { useState } from 'react';
import {logo, close, menu} from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={logo} alt="hoobank" className='w-[124px] h-[32px]' />

      <ul className='list-none sm:flex hidden justify-end items-center flex'>
        <p className=''>

        </p>
      </ul>
    </nav>
  )
}

export default Navbar