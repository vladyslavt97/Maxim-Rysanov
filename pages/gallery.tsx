import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import mr1 from "../public/gallery/mr1.jpg"
import mr2 from "../public/gallery/mr2.jpg"
import mr3 from "../public/gallery/mr3.jpg"
import mr4 from "../public/gallery/mr4.jpg"
import { Grid } from  'react-loader-spinner'
type Props = {}
const waiting = () =>{
  return ( <Grid
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>)
}

export default function Contacts({}: Props) {
  return (
    <div className='h-[85vh] flex justify-center items-center flex-col text-black bg-gradient-to-tr from-neutral-100 to-gray-200 w-full border-[10px] border-gray-300 absolute top-[70px]'>
        <h1 className='font-bold mb-5'>Gallery</h1>
        <div className='flex flex-row overflow-scroll gap-10 justify-start pl-10 pb-5'>
            {mr1 ? <Image src={mr1} alt="photo" width={250} height={250} className='rounded-lg'/>: waiting()}
            <Image src="/gallery/mr2.jpg" alt="photo" width={250} height={250} className='rounded-lg'/>
            <Image src="/gallery/mr3.jpg" alt="photo" width={250} height={250} className='rounded-lg'/>
            <Image src="/gallery/mr4.jpg" alt="photo" width={250} height={250} className='rounded-lg'/>
            <Image src="/gallery/mr5.jpg" alt="photo" width={250} height={250} className='rounded-lg'/>
        </div>
        <Link href="https://www.dropbox.com/sh/jcicv8jc17xq1cp/AABx6m5r-R38LxWhj69mtE-ra?dl=0" target="_blank">
            <button className='border-2 rounded-2xl p-1'>Download Photos Here</button>
        </Link>
        <Footer />
    </div>
  )
}