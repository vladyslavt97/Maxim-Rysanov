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
        <header className='fixed w-full top-0 p-1 pr-5 flex flex-row justify-between bg-gradient-to-r from-blue-400 to-blue-500 items-center z-50'>
            <motion.div 
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            className="cursor-pointer"
            >
                <Link href="/">
                    <Image src="/logo.png" alt='logo' width={200} height={200}/>
                </Link>
            </motion.div>

            <motion.div 
                animate={{
                    opacity: 0
                }}
                transition={{
                    delay: 0.5,
                    duration: 1
                }}
                whileInView={{
                    opacity: 1
                }}
                className={menu ? "absolute right-[10%] top-[100px] flex flex-col z-20 justify-end items-end md:hidden font-semibold text-xl text-gray-300" 
                : 'space-x-3 hidden md:flex font-semibold text-xl text-gray-300'}>
            <Link href="bio">
                <button className={menu ? 'py-5': 'lg:px-10'}>Biography</button>
            </Link>
            <Link href="concerts">
                <button className={menu ? 'py-5': 'lg:px-10'}>Concerts</button>
            </Link>
            <Link href="media">
                <button className={menu ? 'py-5': 'lg:px-10'}>Media</button>
            </Link>
            <Link href="recordings">
                <button className={menu ? 'py-5': 'lg:px-10'}>Recordings</button>
            </Link>
            <Link href="contacts">
                <button className={menu ? 'py-5': 'lg:px-10'}>Contacts</button>
            </Link>
            </motion.div>


            <motion.div className={menu ? 'absolute rounded-full bg-gray-600 w-[50px] h-[50px] right-[0px] top-0 md:hidden' : 'absolute rounded-full bg-gray-600/0 w-[50px] h-[50px] right-[23px] md:hidden'}
                animate={{
                    width: menu ? '50%' : '50px',
                    height: menu ? '100vh' : '50px',
                    borderRadius: menu ? '0%' : "100%",
                    opacity: menu ? "1" : "0"
                    // background: menu ? "gray" : "white"
                }}
                transition={{ duration: 0.5 }}>
                </motion.div>
                
            <div onClick={e => toggleMenu()} className="z-10 md:hidden">
                
                <motion.div 
                animate={{rotate: menu ? -45 : 0}}
                className='h-[2px] w-[40px] bg-gray-300 m-2'></motion.div>
                <motion.div 
                animate={{opacity: menu ? 0 : 1}}
                transition={{ duration: 0.1 }}
                className='h-[2px] w-[40px] bg-gray-300 m-2'></motion.div>
                <motion.div 
                animate={{
                    rotate: menu ? 45 : 0,
                    y: menu ? -19.5 : 0,
                }}
                className='h-[2px] w-[40px] bg-gray-300 m-2'></motion.div>
            </div>
        </header>
  )
}