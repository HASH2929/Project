import React from 'react'
import Image from 'next/image'
import Duck from '../../../assets/DUCK.png'
import Logo from '../../../assets/Logo.jpg'

const Home = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center h-screen">
        <Image 
        src={Logo} 
        alt="A cute duck" 
        width={100} 
        height={100} 
      />
      <h1 className="text-[26px] font-bold font-serif text-center">Project</h1>
        <h1 className='text-[18px] text-red-700 font-serif'>sumit</h1>
        <p className='text-[12px] text-yellow-600 font-sans'>cool boi</p>
        <h1 className='text-[18px] text-red-700 font-serif'>hasnain</h1>
        <p className='text-[12px] text-yellow-600 font-sans'>kul boi</p>
        <h1 className='text-[18px] text-red-700 font-serif'>siddhu</h1>
        <p className='text-[12px] text-yellow-600 font-sans'>mota boi</p>
    </div>
    </>
  )
}

export default Home;