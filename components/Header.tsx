import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
import { motion } from 'framer-motion';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';

type Props = {}
type Anchor = 'right';

export default function Header({}: Props) {
    const [menu, setMenu] = useState(false);
    const [state, setState] = useState({right: false});

    const toggleMenu = () => {
        setMenu(!menu)
    }

    const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

    return (
        <header className='fixed w-full top-0 p-1 pr-5 flex flex-row justify-between bg-gradient-to-r from-gray-700 to-gray-900 items-center z-50 h-[71px]'>
            <motion.div 
            initial={{
                opacity: 0,
                x: -50
            }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            transition={{duration:1}}

            className="cursor-pointer"
            >
                <Link href="/">
                    <Image src="/logo.png" alt='logo' width={200} height={200}/>
                </Link>
            </motion.div>

                {/* Links */}
            <motion.div 
                animate={{
                    opacity: 0
                }}
                transition={{
                    delay: 0.6,
                    duration: 1
                }}
                whileInView={{
                    opacity: 1
                }}
                className={menu ? "absolute right-[10%] top-[100px] flex flex-col z-20 justify-end items-end md:hidden font-small text-xl text-gray-600" 
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

                {/* sidebar with framer */}
            <motion.div className={menu ? 'absolute rounded-full bg-gradient-to-tr from-gray-200 to-gray-300 w-[50px] h-[50px] right-[0px] top-0 md:hidden' : 'absolute rounded-full bg-gray-600/0 w-[50px] h-[50px] right-[23px] md:hidden'}
                animate={{
                    width: menu ? '50%' : '50px',
                    height: menu ? '100vh' : '50px',
                    borderRadius: menu ? '0%' : "100%",
                    opacity: menu ? "1" : "0"
                }}
                transition={{ duration: 0.5 }}>
                </motion.div>
                

                {/* burger */}
            <div onClick={e => toggleMenu()} className="z-10 md:hidden">
                <motion.div 
                animate={{rotate: menu ? -45 : 0}}
                 className={menu ? 'h-[2px] w-[40px] bg-gray-900 m-2' : 'h-[2px] w-[40px] bg-gray-300 m-2'}></motion.div>
                <motion.div 
                animate={{opacity: menu ? 0 : 1}}
                transition={{ duration: 0.1 }}
                className={menu ? 'h-[2px] w-[40px] bg-gray-900 m-2' : 'h-[2px] w-[40px] bg-gray-300 m-2'}></motion.div>
                <motion.div 
                animate={{
                    rotate: menu ? 45 : 0,
                    y: menu ? -19.5 : 0,
                }}
                 className={menu ? 'h-[2px] w-[40px] bg-gray-900 m-2' : 'h-[2px] w-[40px] bg-gray-300 m-2'}></motion.div>
            </div>


                {/* new
                <Button onClick={toggleDrawer('right', true)}>right</Button>
            <SwipeableDrawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
                onOpen={toggleDrawer("right", true)}
                className="z-20 text-black absolute top-[50vh] right-0"
                >
                Right sdfsafdsafs
            </SwipeableDrawer> */}
        </header>
  )
}