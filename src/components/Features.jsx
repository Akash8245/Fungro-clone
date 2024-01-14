import React from 'react'
import p1 from "../assets/p1.svg"
import p2 from "../assets/p2.svg"
import p3 from "../assets/p3.svg"
import p4 from "../assets/p4.svg"

export default function Features() {
  return (
    <div className=' bg-[#121E2C]  ' >
       <section className=' w-[80%] m-auto  rounded-[20px] bg-[#2C3E53] text-white md:flex md:pl-[5%] ' >
         <div className='flex items-center py-3  md:px-6 ' >
            <img src={p1} alt="" className='w-[80px] bg-[#F9D2CD] p-3 m-2 rounded-[50%] ml-[15%]  ' />

             <div className='text-[22px]  font-bold  md:text-[16px] ' >
             <h1>2,500+</h1>
             <p>Companies</p>
             </div>
         </div>
         {/* 2 */}
         <div className='flex items-center py-3  md:px-6 ' >
            <img src={p2} alt="" className='w-[80px] bg-[#FFEFC1] p-3 m-2 rounded-[50%] ml-[15%]  ' />

             <div className='text-[22px]  font-bold md:text-[16px]  ' >
             <h1>12</h1>
             <p>Categories</p>
             </div>
         </div>
         {/* 3 */}
         <div className='flex items-center py-3  md:px-6 ' >
            <img src={p3} alt="" className='w-[80px] bg-[#B8EDFC] p-3 m-2 rounded-[50%] ml-[15%]  ' />

             <div className='text-[22px]  font-bold md:text-[16px]  ' >
             <h1>6,00,000+</h1>
             <p>Teenlancers</p>
             </div>
         </div>
         {/* 4 */}
         <div className='flex items-center py-3 md:px-6  ' >
            <img src={p4} alt="" className='w-[80px] bg-[#DCF8DB] p-3 m-2 rounded-[50%] ml-[15%]  ' />

             <div className='text-[22px]  font-bold md:text-[16px]  ' >
             <h1>1000+</h1>
             <p>Live projects</p>
             </div>
         </div>
       </section>
     
    </div>
  )
}
