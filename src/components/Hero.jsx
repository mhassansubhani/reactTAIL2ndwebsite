import React from 'react'
import BgImg from '../assets/cyber-bg.png'
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from '@heroicons/react/solid'
function Hero() {
  return (
    <div className=' w-full h-screen bg-zinc-200 flex flex-col justify-center items-center relative'>


      <div className='grid md:grid-cols-2 md:pl-6 p-2'> 

      <div className='flex flex-col justify-center space-y-1 '>
      <p className=' text-2xl sm:text-3xl '> Unique Sequencing & Production</p>
      <h1 className='text-4xl sm:text-6xl font-bold ' >Cloud Management</h1>
      <p className='text-2xl sm:text-3xl'> This is our Tech brand </p>
      <button className='sm:w-[60%] h-12 mt-1 '> Get Started</button>
     </div>

<div> 
  <img src={BgImg} className='object-cover md:mb-320 ' alt="" />
</div>
<div className='absolute flex flex-col py-2  bottom-[5%] w-[90%]   mx-1  bg-zinc-200   text-center '>
  <p className='text-2xl font-semibold'> Data Services</p>
  <div className='flex flex-wrap md:justify-center items-center '>

  <p className='flex px-4 py-2 text-slate-500 text-xl font-semibol '><CloudUploadIcon className='h-6 text-indigo-600 d' /> App Security</p>
                    <p className='flex px-4 py-2 text-slate-500 text-xl font-semibold'><DatabaseIcon className='h-6 text-indigo-600' /> Dashboard Design</p>
                    <p className='flex px-4 py-2 text-slate-500 text-xl font-semibold'><ServerIcon className='h-6 text-indigo-600' /> Cloud Data</p>
                    <p className='flex px-4 py-2 text-slate-500 text-xl font-semibold'><PaperAirplaneIcon className='h-6 text-indigo-600' /> API</p>
  </div>
</div>
      </div>
     
    </div>
  )
}

export default Hero
