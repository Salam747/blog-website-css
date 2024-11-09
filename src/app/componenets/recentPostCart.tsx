import React from 'react'
import { Heebo } from 'next/font/google'
const heebo = Heebo({ subsets: ["latin"] });
export const RecentPostCart = () => {
  return (
    <div id='recent' className="w-[100%]  md:w-[483px] h-[356px] bg-white flex items-center">
    <div className="m-auto p-4 w-[80%] md:w-[391px] h-[286px] flex flex-col items-start justify-evenly">
        <h2 className={`${heebo.className} font-bold text-[20px] md:text-[26px]`}>Lorem ipsum dolor sit amet consectetur.</h2>
        <div className=" w-[100%] md:w-[301.28px] h-[42.12px] flex items-start justify-between">
            <p className={`${heebo.className} text-[12px] md:text-[18px] font-medium text-black/70`}>6 Oct 2024</p>
            <p  className={`${heebo.className} text-[12px] md:text-[18px] font-medium text-black/70`}>|</p>
            <p  className={`${heebo.className} text-[12px] md:text-[18px] font-medium text-black/70`}>Design pettern</p>
            
        </div>
           <p>Lorem ipsum dolor sit,
             amet consectetur adipisicing elit. 
             Minima, doloremque Lorem ipsum dolor,
             ipsum dolor sit..</p>
    </div>
  </div>
  
  )
}
