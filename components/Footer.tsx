import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className='fixed bottom-0 w-full bg-blue-200 text-white flex justify-center items-center border-t-[10px] border-r-[10px] border-l-[10px] border-blue-300 h-[100px]'>
        <SocialIcon url="https://www.facebook.com/maximrysanov" bgColor='white' className='m-1 cursor-pointer'/>
        <SocialIcon url="https://www.youtube.com/@MaximRysanov" bgColor='white' className='m-1 cursor-pointer'/>
        <SocialIcon url="https://www.instagram.com/mrysanov_viola_conductor/"  bgColor='white' className='m-1 cursor-pointer'/>
    </div>
  )
}