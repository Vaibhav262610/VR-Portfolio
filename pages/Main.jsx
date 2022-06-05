import React from 'react'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaLinkedinIn , FaGithub } from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai'
const Main = () => {
  return (
    <>
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1280px] h-screen w-full mx-auto p-2 flex justify-center items-center '>
          <div>
              <p className='text-sm tracking-widest text-gray-600'>LET'S BUILT SOMETHING TOGETHER LEGENDARY</p>
            <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5] '>Vaibhav </span></h1>
            <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
            <p className='py-4 text-gray-600 max-w-[70%] m-auto '>I'm a front end web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently I'm focused on building responsive front-end applications while learning back-end technologies.</p>
            {/* <div className='flex items-center justify-center max-w-[330px] m-auto py-4 '>
                <div className='shadow-lg rounded-full shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
                    <FaLinkedinIn className='hover:text-[#0072b1]' />
                </div>
                <div className='shadow-lg rounded-full shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
                    <FaGithub className='hover:text-[#0072b1]' />
                </div>
                <div className='shadow-lg rounded-full shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
                    <AiOutlineMail className='hover:text-[#0072b1]' />
                </div>
                <div className='shadow-lg rounded-full shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300 '>
                    <BsFillPersonFill className='hover:text-[#0072b1]' />
                </div>
            </div> */}
                {/* <div className=' '>
            <div className=' flex border-2 px-3 py-2 rounded-xl bg-none border-[#1890ff] text-[#1890ff]'>
                <FaLinkedinIn />
                <button className=' '>
                    LinkedIn
                </button>
                </div>
            </div> */}

          </div>
      </div>
    </div>
    </>
  )
}

export default Main