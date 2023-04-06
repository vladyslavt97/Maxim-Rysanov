import Link from 'next/link';
import { useState } from 'react';
import {MdKeyboardArrowDown} from 'react-icons/md';
type Props = {}

export default function PastConcerts({}: Props) {
  const [open, setOpen]=useState(false);

  return (
    <div className='rounded--lg absolute right-0'>
      <button className='py-2 pl-3 pr-1 bg-slate-500 rounded-lg flex flex-row text-center justify-center items-center text-white text-sm'>Past concerts<MdKeyboardArrowDown className='ml-1 text-white' onClick={e=>setOpen(!open)}/></button>
      {open && <div className='flex flex-col bg-white text-black rounded-lg'>
        <Link href="/concerts-2023" className='hover:bg-slate-300 py-2 hover:rounded-lg border-b-2 border-gray-300 text-sm text-center'><button onClick={e=>setOpen(!open)}>Concerts 2023</button></Link>
        <Link href="/concerts-2022" className='hover:bg-slate-300 py-2 hover:rounded-lg border-b-2 border-gray-300 text-sm text-center'><button onClick={e=>setOpen(!open)}>Concerts 2022</button></Link>
        <Link href="/concerts-2021" className='hover:bg-slate-300 py-2 hover:rounded-lg border-b-2 border-gray-300 text-sm text-center'><button onClick={e=>setOpen(!open)}>Concerts 2021</button></Link>
        {/*<button className='hover:bg-slate-300 py-2 hover:rounded-lg border-b-2 border-gray-300' onClick={e=>setOpen(!open)}><Link href="/concerts-2020">Concerts 2020</Link></button> */}
      </div>}
    </div>
  )
}
