import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import { log } from 'console';

type Props = {}

export default function Header({}: Props) {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <header className='sticky top-0 p-5 flex flex-row justify-between bg-slate-500 items-center'>
            {/* items-start max-w-7xl mx-auto z-20 xl:items-center */}
            <Image src="/logo.png" alt='logo' width={300} height={300}/>
            <div className='space-x-3 hidden md:flex font-semibold text-xl text-gray-300'>
            <Link href="#bio">
                <button className=''>Biography</button>
            </Link>
            <Link href="#concerts">
                <button className=''>Concerts</button>
            </Link>
            <Link href="#media">
                <button className=''>Media</button>
            </Link>
            <Link href="#contacts">
                <button className=''>Contacts</button>
            </Link>
            </div>
            <Image src="/menu.png"  alt='menu' width={100} height={100} 
            className="md:hidden cursor-pointer"
            onClick={e => toggleMenu()}
            />
        </header>
  )
}