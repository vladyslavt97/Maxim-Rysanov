import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../public/logo.png";
type Props = {};

export default function Header({}: Props) {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <header className="fixed w-full top-0 p-1 pr-5 flex flex-row justify-between bg-gradient-to-r from-gray-700 to-gray-900 items-center z-50 h-[82px] border-gray-300 border-b-[10px]">
            {logo && (
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -50,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{ duration: 1 }}
                    className="cursor-pointer"
                >
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="logo"
                            width={200}
                            height={200}
                            priority={true}
                        />
                    </Link>
                </motion.div>
            )}

            {/* Links */}
            <AnimatePresence>
                {menu && (
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 0.3,
                            duration: 1,
                        }}
                        // whileInView={{
                        //     opacity: 1,
                        // }}
                        className={
                            menu
                                ? "absolute right-[10%] top-[100px] flex flex-col z-20 justify-end items-end md:hidden font-small text-xl text-gray-600"
                                : "space-x-3 hidden md:flex font-semibold text-xl text-gray-300"
                        }
                    >
                        <Link href="bio" onClick={(e) => setMenu(false)}>
                            <button className={menu ? "py-5" : "xl:px-10"}>
                                Biography
                            </button>
                        </Link>
                        <Link href="concerts" onClick={(e) => setMenu(false)}>
                            <button className={menu ? "py-5" : "xl:px-10"}>
                                Concerts
                            </button>
                        </Link>
                        <Link href="media" onClick={(e) => setMenu(false)}>
                            <button className={menu ? "py-5" : "xl:px-10"}>
                                Media
                            </button>
                        </Link>
                        <Link href="reviews" onClick={(e) => setMenu(false)}>
                            <button className={menu ? "py-5" : "xl:px-10"}>
                                Reviews
                            </button>
                        </Link>
                        <Link href="gallery" onClick={(e) => setMenu(false)}>
                            <button className={menu ? "py-5" : "xl:px-10"}>
                                Gallery
                            </button>
                        </Link>
                        <Link href="recordings" onClick={(e) => setMenu(false)}>
                            <button className={menu ? "py-5" : "xl:px-10"}>
                                Recordings
                            </button>
                        </Link>
                        <Link href="contacts" onClick={(e) => setMenu(false)}>
                            <button className={menu ? "py-5" : "xl:px-10"}>
                                Contacts
                            </button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* sidebar with framer */}
            <AnimatePresence>
                {menu && (
                    <motion.div
                        key="modal"
                        className={
                            menu
                                ? "absolute bg-gradient-to-tr from-gray-200 to-gray-300 h-[100vh] right-[0px] top-0 md:hidden drop-shadow-2xl"
                                : "absolute bg-gray-600/0 md:hidden"
                        }
                        initial={{ x: 100, opacity: 0, width: "50%" }}
                        animate={{
                            width: menu && "50%",
                            x: menu && [100, 20, 0],
                            opacity: menu && 1,
                        }}
                        exit={{ x: 100, opacity: 0, width: "50%" }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                    ></motion.div>
                )}
            </AnimatePresence>

            {/* burger */}
            {menu && (
                <div
                    className="absolute top-0 left-0 w-full h-[100vh] -z-10"
                    onClick={(e) => toggleMenu()}
                ></div>
            )}
            <div onClick={(e) => toggleMenu()} className="z-10 md:hidden">
                <motion.div
                    animate={{ rotate: menu ? -45 : 0 }}
                    className={
                        menu
                            ? "h-[2px] w-[40px] bg-gray-900 m-2"
                            : "h-[2px] w-[40px] bg-gray-300 m-2"
                    }
                ></motion.div>
                <motion.div
                    animate={{ opacity: menu ? 0 : 1 }}
                    transition={{ duration: 0.1 }}
                    className={
                        menu
                            ? "h-[2px] w-[40px] bg-gray-900 m-2"
                            : "h-[2px] w-[40px] bg-gray-300 m-2"
                    }
                ></motion.div>
                <motion.div
                    animate={{
                        rotate: menu ? 45 : 0,
                        y: menu ? -19.5 : 0,
                    }}
                    className={
                        menu
                            ? "h-[2px] w-[40px] bg-gray-900 m-2"
                            : "h-[2px] w-[40px] bg-gray-300 m-2"
                    }
                ></motion.div>
            </div>
        </header>
    );
}
