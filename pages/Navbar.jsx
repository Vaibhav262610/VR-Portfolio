import React from 'react'
import { AiOutlineMenu , AiOutlineClose } from "react-icons/ai";
import Link from 'next/link'

const Navbar = () => {
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
                <div className='cursor-pointer md:hidden'>
                    <AiOutlineMenu size={25} />
                </div>
            </div>
        </div>
        <div className='fixed left-0 w-full top-0 h-screen bg-black/70 '>
            <div className='fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 '>
                <div>
                    <div className='flex justify-between items-center w-full'>
                        <h1 className='font-extrabold text-4xl'>VR</h1>
                        <div className='rounded-full shadow-lg p-3 shadow-gray-300 cursor-pointer'>
                            <AiOutlineClose size={25} />           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar