import React from 'react'

export default function Shark() {
  return (
    <div className='min-h-[50vh] bg-[#121E2C] text-white md:text-center md:pt-[30px] ' >

      <h1 className='text-3xl font-bold p-4' >Funngro @ Shark Tank</h1>
      <p className='p-4' >Lakhs of Teens love Funngro, Hundreds of Companies love Funngro and now Sharks also loved Funngro</p>

      <iframe className='w-[80vw] md:w-[60vw] m-auto h-[200px] md:h-[500px] md:py-8 ' src="https://www.youtube.com/embed/sGysgwm02YY?si=P1cQynM6fS0XQQvu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}
