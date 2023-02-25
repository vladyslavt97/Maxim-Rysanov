import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function Header({}: Props) {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return (
        <header className='sticky top-0 p-1 flex flex-row justify-between bg-slate-500 items-center'>
            <Image src="/logo.png" alt='logo' width={300} height={300}/>
            <motion.div 
                animate={{
                    opacity: 0
                }}
                transition={{
                    duration: 1
                }}
                whileInView={{
                    opacity: 1
                }}
                className={menu ? "absolute right-[100px] top-[100px] flex flex-col z-20 justify-end items-end md:hidden" 
                : 'space-x-3 hidden md:flex font-semibold text-xl text-gray-300'}>
            <Link href="#bio">
                <button className={menu ? 'py-5': ''}>Biography</button>
            </Link>
            <Link href="#concerts">
                <button className={menu ? 'py-5': ''}>Concerts</button>
            </Link>
            <Link href="#media">
                <button className={menu ? 'py-5': ''}>Media</button>
            </Link>
            <Link href="#contacts">
                <button className={menu ? 'py-5': ''}>Contacts</button>
            </Link>
            </motion.div>


            <motion.div className='absolute rounded-full bg-yellow-200 w-[50px] h-[50px] right-[23px] md:hidden'
                animate={{
                    // scale: menu ? 4.2 : 0.2,
                    y: menu ? 250 : 0,
                    x: menu ? 25 : 0,
                    width: menu ? '50%' : '50px',
                    height: menu ? '100vh' : '50px',
                    borderRadius: menu ? '0%' : "100%"
                }}
                transition={{ duration: 0.3 }}>
                </motion.div>
                
            <div onClick={e => toggleMenu()} className="z-10 md:hidden">
                
                <motion.div 
                animate={{rotate: menu ? -45 : 0}}
                className='h-[2px] w-[40px] bg-black m-2'></motion.div>
                <motion.div 
                animate={{opacity: menu ? 0 : 1}}
                transition={{ duration: 0.1 }}
                className='h-[2px] w-[40px] bg-black m-2'></motion.div>
                <motion.div 
                animate={{
                    rotate: menu ? 45 : 0,
                    y: menu ? -19.5 : 0,
                }}
                className='h-[2px] w-[40px] bg-black m-2'></motion.div>
            </div>
        </header>
  )
}