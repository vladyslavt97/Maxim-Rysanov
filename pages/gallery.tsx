import Gallery from '@/components/Gallery'
import HorizontalGallery from '@/components/HorizontalGallery'
import Link from 'next/link'

type Props = {}

export default function Contacts({}: Props) {
  return (
    <div className='h-[85vh] flex justify-start md:justify-evenly items-center flex-col text-black bg-gradient-to-tr from-neutral-100 to-gray-200 w-full border-[10px] border-gray-300 absolute top-[70px]'>
        <h1 className='font-bold m-5'>Gallery</h1>
        <Link href="https://www.dropbox.com/sh/n85yubpfsm6oum1/AACEfvpj7mviGZsAyod1svHwa?dl=0" target="_blank" className='absolute right-0 top-0'>
            <button className='border-2 rounded-2xl p-1 border-gray-300 bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 text-xs m-1'>Download Photos</button>
        </Link>
        {/* <Gallery/> */}
        <HorizontalGallery/>
    </div>
  )
}