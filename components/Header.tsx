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
        <header className="fixed w-full top-0 p-1 pr-5 flex flex-row justify-between bg-gradient-to-r from-gray-700 to-gray-900 items-center z-50 h-[72px] shadow-2xl">
            {logo && (
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
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
            <motion.div
                key={menu ? "open" : "close"}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                animate={{ opacity: 1 }}
                className={
                    menu
                        ? "absolute right-[7%] top-[100px] flex flex-col z-20 justify-end items-end md:hidden font-small text-xl text-gray-200"
                        : "space-x-3 hidden md:flex font-semibold text-xl text-gray-300"
                }
            >
                <Link
                    href="/"
                    onClick={() => setMenu(false)}
                    className="hover:text-gray-400"
                >
                    <button className={menu ? "py-5" : "xl:px-5"}>Home</button>
                </Link>
                <Link
                    href="bio"
                    onClick={() => setMenu(false)}
                    className="hover:text-gray-400"
                >
                    <button className={menu ? "py-5" : "xl:px-5"}>
                        Biography
                    </button>
                </Link>
                <Link
                    href="concerts"
                    onClick={() => setMenu(false)}
                    className="hover:text-gray-400"
                >
                    <button className={menu ? "py-5" : "xl:px-5"}>
                        Concerts
                    </button>
                </Link>
                {/* <Link
                    href="media"
                    onClick={() => setMenu(false)}
                    className="hover:text-gray-400"
                >
                    <button className={menu ? "py-5" : "xl:px-5"}>Media</button>
                </Link> */}
                <Link
                    href="reviews"
                    onClick={() => setMenu(false)}
                    className="hover:text-gray-400"
                >
                    <button className={menu ? "py-5" : "xl:px-5"}>
                        Reviews
                    </button>
                </Link>
                {/* <Link
                    href="shop"
                    onClick={(e) => setMenu(false)}
                    className="hover:text-gray-400"
                >
                    <button className={menu ? "py-5" : "xl:px-5"}>Shop</button>
                </Link> */}
                <Link
                    href="gallery"
                    onClick={() => setMenu(false)}
                    className="hover:text-gray-400"
                >
                    <button className={menu ? "py-5" : "xl:px-5"}>
                        Gallery
                    </button>
                </Link>
                <Link
                    href="recordings"
                    onClick={() => setMenu(false)}
                    className="hover:text-gray-400"
                >
                    <button className={menu ? "py-5" : "xl:px-5"}>
                        Recordings
                    </button>
                </Link>
                <Link
                    href="contacts"
                    onClick={() => setMenu(false)}
                    className="hover:text-gray-400"
                >
                    <button className={menu ? "py-5" : "xl:px-5"}>
                        Contacts
                    </button>
                </Link>
            </motion.div>

            {/* Sidebar with AnimatePresence */}
            <AnimatePresence>
                {menu && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: "55%" }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.4 }}
                        className="absolute bg-gradient-to-r from-gray-700 to-gray-900 h-[100vh] right-[0px] top-0 md:hidden drop-shadow-2xl w-[100%]"
                    ></motion.div>
                )}
            </AnimatePresence>

            {/* Burger icon */}
            {menu && (
                <div
                    className="absolute top-0 left-0 w-full h-[100vh] -z-10"
                    onClick={() => toggleMenu()}
                ></div>
            )}
            <div onClick={toggleMenu} className="z-10 md:hidden">
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
                    animate={{ rotate: menu ? 45 : 0, y: menu ? -19.5 : 0 }}
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
