import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Contacts({}: Props) {
  return (
    <div className='h-[100vh] flex justify-center items-center flex-col text-black'>
        <h1 className='font-bold m-5'>Gallery</h1>
        <div className='flex flex-row overflow-scroll gap-10 justify-start pl-10 pb-5'>
            <Image src="/gallery/mr1.jpg" alt="photo" width={250} height={250} className='rounded-lg'/>
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