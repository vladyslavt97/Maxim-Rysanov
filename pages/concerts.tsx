import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import concerts from "../concerts2023.json"

type Props = {}

export default function Concerts({}: Props) {
  let validConcerts = concerts.filter(el => {
    const [day, date] = el.date.split(' ');//removing the day (THU) and working with the date (09/02)
    const [dd, mm] = date.split('/');
    const yyyy = new Date().getFullYear();
    const fullDateString = `${yyyy}-${mm}-${dd}`;

    //today
    const today = new Date();
    const yyyytoday = today.getFullYear();
    const mmtoday = (today.getMonth() + 1).toString().padStart(2, '0');
    const ddtoday = today.getDate().toString().padStart(2, '0');
    const dateString = `${yyyytoday}-${mmtoday}-${ddtoday}`;
    
    return fullDateString >= dateString;
  })
  

  return (
    <div className=''>
      <Header/>
      <div className='bg-white w-[90vw] m-4 absolute top-[70px]'>
        <div className='flex justify-center items-center pt-5'>
          <h1 className='font-bold text-xl'>2023</h1>
        </div>
        <div className='flex flex-col mx-3 mt-3 md:ml-40 justify-center items-start'>
          {validConcerts.map((concert, index) => (
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
    </div>
  )
}