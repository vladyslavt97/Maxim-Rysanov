import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
// import concerts from "../concerts2023.json"
// import clientPromise from '../lib/mongodb'
// import { InferGetServerSidePropsType } from 'next'
import { motion } from 'framer-motion'
import { ColorRing } from  'react-loader-spinner'

interface ConcertType {
  year: number
  date: string
  viola: string,
  conductor: string,
  location: string,
  programme: String[],
  link: string
}

//getting concerts from mongo
// export async function getServerSideProps() {
  
//     try {
//         const client = await clientPromise;
//         const db = client.db("Maxim_Rysanov");

//         const concerts = await db
//             .collection("concerts-2023")
//             .find({})
//             .sort({ metacritic: -1 })
//             .toArray();
//         return {
//             props: { concerts: JSON.parse(JSON.stringify(concerts)) },
//         };
//     } catch (e) {
//         console.error(e);
//     }
// }

//the concerts for the current year should come from DB
export default function Concerts() {

// export default function Concerts({concerts}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  // console.log('concerts2023: concerts2023:', concerts2023);

  const [concerts, setConcerts] = useState([]);
  useEffect(() => {
        fetch('/api/get-concerts')
        .then(response => response.json())
        .then(data => {
            setConcerts(data)
        })
        .catch(error => {
            console.error(error);
        });
    }, [setConcerts]);
  
  let validConcerts = concerts.filter((el:any) => {
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
      <div className='bg-gradient-to-tr from-neutral-100 to-sky-200 w-full border-[10px] border-blue-300 absolute top-[70px] rounded text-black min-h-full'>
        <div className='flex justify-center items-center pt-5'>
          <h1 className='font-bold text-xl'>2023</h1>
        </div>
        {concerts.length === 0 && 
        <div className='flex items-center justify-center h-[60vh]'>
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        </div>
        }
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1}}
        className='flex flex-col mx-3 mt-3 md:ml-40 justify-center items-start mb-40'>
          {validConcerts.map((concert: ConcertType, index: number) => (
            <div key={index} className="m-3">
              <div className='flex flex-row'>
                    <h2 className=' font-semibold'>{concert.date}</h2>&nbsp;{concert.viola !== "" && <h2>{concert.viola}</h2>}&nbsp;{concert.conductor !== "" && <h2>{concert.conductor}</h2>}
                </div>
              <h5>{concert.location}<br/>
              {concert.programme.map((prog, ind)=>(
                <div key={ind}>
                  <p>♪ {prog}</p>
                </div>
              ))}
              {concert.link && <a href={concert.link}><h4 className='italic underline'>more details</h4></a>}
              </h5>
            </div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}