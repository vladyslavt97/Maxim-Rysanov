import Image from 'next/image'
import Link from 'next/link'
import mr1 from "../public/gallery/mr1.jpg"
import mr2 from "../public/gallery/mr2.jpg"
import mr3 from "../public/gallery/mr3.jpg"
import mr4 from "../public/gallery/mr4.jpg"
import mr5 from "../public/gallery/mr5.jpg"
import mr6 from "../public/gallery/mr6.jpg"
import mr7 from "../public/gallery/mr7.jpg"
import mr8 from "../public/gallery/mr8.jpg"
type Props = {}

export default function Contacts({}: Props) {
  return (
    <div className='h-[85vh] flex justify-start md:justify-evenly items-center flex-col text-black bg-gradient-to-tr from-neutral-100 to-gray-200 w-full border-[10px] border-gray-300 absolute top-[70px]'>
        <h1 className='font-bold m-5'>Gallery</h1>
        <Link href="https://www.dropbox.com/sh/n85yubpfsm6oum1/AACEfvpj7mviGZsAyod1svHwa?dl=0" target="_blank" className='absolute right-0 top-0'>
            <button className='border-2 rounded-2xl p-1 border-gray-300 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 text-xs m-1'>Download Photos</button>
        </Link>
        <div className='flex flex-row overflow-x-scroll gap-1 justify-start pl-1 pb-5 mx-20 overflow-y-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#303030]/80'>
            <Image src={mr1} alt="photo" width={250} height={250} className='rounded-lg object-contain'/>
            <Image src={mr2} alt="photo" width={250} height={250} className='rounded-lg object-contain'/>
            <Image src={mr3} alt="photo" width={250} height={250} className='rounded-lg object-contain'/>
            <Image src={mr6} alt="photo" width={250} height={250} className='rounded-lg object-contain'/>
            <Image src={mr4} alt="photo" width={250} height={250} className='rounded-lg object-contain'/>
            <Image src={mr7} alt="photo" width={250} height={250} className='rounded-lg object-contain'/>
            <Image src={mr5} alt="photo" width={250} height={250} className='rounded-lg object-contain'/>
            <Image src={mr8} alt="photo" width={250} height={250} className='rounded-lg object-contain'/>
        </div>
    </div>
  )
}