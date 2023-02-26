import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import concerts from "../concerts.json"

type Props = {}

export default function Concerts({}: Props) {
  
  return (
    <div className=''>
      <Header/>
      <div className='flex justify-center items-center'>
        <h1 className='font-bold text-xl'>2023</h1>
      </div>
      <div className='flex flex-col m-10 md:ml-40 justify-center items-start'>
        {concerts.map((concert, index) => (
          <div key={index} className="m-3">
            <h2 className=' font-semibold'>{concert.date}</h2>
            <h5>{concert.location}<br/>
            {concert.programme.map((prog, ind)=>(
              <div key={ind}>
                <p>♪ {prog}</p>
              </div>
            ))}
            </h5>
          </div>
        ))}
      </div>
    </div>
  )
}