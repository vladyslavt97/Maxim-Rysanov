//https://mui.com/material-ui/react-menu/
//https://codesandbox.io/s/gziykt?file=/demo.tsx:0-3102
import Link from 'next/link';
import { useState } from 'react';
import {MdKeyboardArrowDown} from 'react-icons/md';
type Props = {}

export default function PastConcerts({}: Props) {
  const [open, setOpen]=useState(false);

  return (
    <div className='rounded--lg absolute left-0'>
      <button className='py-2 pl-3 pr-1 bg-slate-500 rounded-lg flex flex-row text-center justify-center items-center text-white'>Past concerts<MdKeyboardArrowDown className='ml-1 text-white' onClick={e=>setOpen(!open)}/></button>
      {open && <div className='flex flex-col bg-white text-black rounded-lg'>
        <button className='hover:bg-slate-300 py-2 hover:rounded-lg border-b-2 border-gray-300' onClick={e=>setOpen(!open)}><Link href="/concerts-2022">Concerts 2022</Link></button>
        <button className='hover:bg-slate-300 py-2 hover:rounded-lg border-b-2 border-gray-300' onClick={e=>setOpen(!open)}><Link href="/concerts-2021">Concerts 2021</Link></button>
        <button className='hover:bg-slate-300 py-2 hover:rounded-lg border-b-2 border-gray-300' onClick={e=>setOpen(!open)}><Link href="/concerts-2020">Concerts 2020</Link></button>
      </div>}
    </div>
    //past concerts with pages!
  )
}
