import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ColorRing } from  'react-loader-spinner'
import PastConcerts from '@/components/PastConcerts'

interface ConcertType {
  year: number
  date: string
  viola: string,
  conductor: string,
  location: string,
  programme: String[],
  link: string,
  withwhom: string,
  pastconcert: boolean
}

export default function Concerts() {
  const [concerts, setConcerts] = useState<ConcertType[]>([]);
  const [cheing, setChecing] = useState(false);
  const [smN, setSmn] = useState(0);

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
  
  let validConcerts = concerts.sort((a, b) => {
      const [dayA, dateA] = a.date.split(' ')
      const [ddA, mmA] = dateA.split('/')
      const yyyyA = new Date().getFullYear()
      const fullDateStringA:any = `${yyyyA}-${mmA}-${ddA}`
      const dateObjectA = new Date(fullDateStringA)

      const [dayB, dateB] = b.date.split(' ')
      const [ddB, mmB] = dateB.split('/')
      const yyyyB = new Date().getFullYear()
      const fullDateStringB = `${yyyyB}-${mmB}-${ddB}`
      const dateObjectB = new Date(fullDateStringB)

      return dateObjectB.getTime() - dateObjectA.getTime();
    })


    //new new new new new new new new new
  const today = () => {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var formattedDay = ("0" + day).slice(-2);
    var formattedMonth = ("0" + month).slice(-2);
    var formattedDate = formattedDay + "/" + formattedMonth;
    return formattedDate;
  }
  let smallestNumberIndex = 0;
  let allNums: number[]=[];
  let newArr: String[] = [];
  useEffect(()=>{
    if (concerts.length > 0){
      validConcerts.map(c => {
        newArr.push(c.date.slice(4))
      })
      for (let i = 0; i < newArr.length; i++) {
        var number1 = newArr[i];
        var [day1, month1] = number1.split("/");
        var [day2, month2] = today().split("/");
        var date1 = new Date(new Date().getFullYear(), parseInt(month1) - 1, parseInt(day1));
        var date2 = new Date(new Date().getFullYear(), parseInt(month2) - 1, parseInt(day2));
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        allNums.push(daysDiff)
      }
    
      const smallestNumber = Math.min(...allNums);
      smallestNumberIndex = allNums.indexOf(smallestNumber);
      if(smallestNumberIndex > 0){
        setSmn(smallestNumberIndex)
      }

      
    }
    setChecing(true);
  }, [concerts])
  
  
  //scroll = not related to date logic
  const scrollToRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if(cheing &&  smN !== 0){
      const scrollToElement = () => {
        if (scrollToRef.current && smN >= 0) {
          console.log('smallestNumberIndex', smN);
          
       scrollToRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
    }
      };
  
      scrollToElement();
    }
  }, [concerts])
  // ;
  
  return (
    <div className=''>
      <div className='bg-gradient-to-tr from-neutral-100 to-gray-200 w-full border-[10px] border-gray-300 absolute top-[70px] rounded text-black min-h-full flex flex-col items-center overflow-hidden'>
        <PastConcerts/>
        {concerts.length === 0 && 
        smN !== 0
        ? 
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
        :
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:2}}
        className='flex flex-col ml-2 justify-center items-start mb-32 lg:text-xl'>
          <div className='flex justify-center items-center pt-5 m-3'>
            <h1 className='font-bold text-xl'>2023</h1>
          </div>
          {validConcerts.map((concert: ConcertType, index: number) => (
            <div key={index} className="mx-3 mb-6" 
            ref={index === smN -3 ? scrollToRef : null}
            >
              {!concert.pastconcert && <>
              <div className='flex flex-row'>
                    <h2 className=' font-semibold'>{concert.date}</h2>&nbsp;{concert.viola !== "" && <h2>{concert.viola}</h2>}&nbsp;{concert.conductor !== "" && <h2>{concert.conductor}</h2>}
                </div>
              {concert.location &&<h5>{concert.location}</h5>}
              {concert.programme.map((prog, ind)=>(
                <div key={ind}>
                  <p>{prog}</p>
                </div>
              ))}
              {concert.withwhom && <h4 className='text-gray-900'>with {concert.withwhom}</h4>}
              {concert.link && <a href={concert.link}><h4 className='italic underline'>more details</h4></a>}
              </>}
            </div>
          ))}
        </motion.div>}
      </div>
    </div>
  )
}