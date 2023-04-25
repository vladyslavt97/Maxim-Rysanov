import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className='fixed bottom-0 w-full bg-gray-800 text-white flex justify-evenly items-center border-t-[10px] border-r-[10px] border-l-[10px] border-gray-300 h-[51px]'>
        <SocialIcon url="https://www.facebook.com/maximrysanov" bgColor='white' style={{ height: 35, width: 35 }} className='m-1 cursor-pointer'/>
        <SocialIcon url="https://www.youtube.com/@MaximRysanov" bgColor='white' style={{ height: 35, width: 35 }} className='m-1 cursor-pointer'/>
        <SocialIcon url="https://www.instagram.com/mrysanov_viola_conductor/"  bgColor='white' style={{ height: 35, width: 35 }} className='m-1 cursor-pointer'/>
    </div>
  )
}