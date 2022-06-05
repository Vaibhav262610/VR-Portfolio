import React from 'react'
import { AiOutlineMenu , AiOutlineClose, AiOutlineMail  } from "react-icons/ai";
import Link from 'next/link'
import { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs'
import { FaLinkedinIn , FaGithub } from 'react-icons/fa';

const Navbar = () => {

    const [nav , setNav] = useState(false)

    const handleNav = () => {
        setNav(nav)
    }


  return (
    <div className='fixed w-full h-20 shadow-xl z-[100] '>
        <div className='flex justify-between items-center w-full h-full px-16 2xl:px-16'>
            <h1 className='font-extrabold text-4xl'>VR</h1>
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='cursor-pointer md:hidden'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>
        
            </div>
        
  )
}

export default Navbar