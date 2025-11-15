import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../public/logo.png";
import { GoTriangleDown } from "react-icons/go";

type Props = {};

export default function Header({}: Props) {
    const [menu, setMenu] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const toggleMenu = () => {
        setMenu((prev) => !prev);
        setShowPopup(false);
    };

    const togglePopup = () => {
        setShowPopup((prev) => !prev);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const handleNavItemClick = () => {
        setMenu(false);
        closePopup();
    };
    return (
        <header className="relative p-1 pr-5 flex flex-row justify-between bg-gradient-to-r from-gray-700 to-gray-900 items-center z-50 shadow-2xl h-full overflow-visible">
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
            {showPopup && (
                <div
                    className="fixed inset-0 bg-gray-500/10 z-10"
                    onClick={closePopup}
                ></div>
            )}
            <motion.div
                key={menu ? "open" : "close"}
                initial={{ opacity: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                animate={{ opacity: 1 }}
                className={
                    menu
                        ? "absolute right-[7%] top-[60px] flex flex-col z-30 items-end md:hidden md:text-xl text-gray-200 overflow-y-auto h-[80%] pr-5"
                        : "relative z-30 space-x-3 hidden md:flex font-semibold text-xl text-gray-300"
                }
            >
                <Link
                    href="/"
                    onClick={handleNavItemClick}
                    className="hover:text-gray-400"
                >
                    <button className={menu ? "py-5" : "xl:px-5"}>Home</button>
                </Link>
                <Link
                    href="bio"
                    onClick={handleNavItemClick}
                    className="hover:text-gray-400"
                >
                    <button className={menu ? "py-5" : "xl:px-5"}>
                        Biography
                    </button>
                </Link>
                <Link
                    href="concerts"
                    onClick={handleNavItemClick}
                    className="hover:text-gray-400"
                >
                    <button className={menu ? "py-5" : "xl:px-5"}>
                        Concerts
                    </button>
                </Link>

                <div className="relative">
                    <button
                        onClick={togglePopup}
                        className={`${menu ? "py-5" : "xl:px-5"} ${
                            showPopup && menu && "pb-1"
                        } hover:text-gray-400 w-full text-right md:text-left`}
                    >
                        <div
                            className={`flex items-center gap-2 ${
                                menu
                                    ? "justify-end"
                                    : "justify-center md:justify-start"
                            }`}
                        >
                            <span className="tracking-wide">Media</span>
                            <motion.span
                                aria-hidden="true"
                                className="text-xs text-gray-300 md:text-sm"
                                animate={{ rotate: showPopup ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <GoTriangleDown />
                            </motion.span>
                        </div>
                    </button>

                    {/* Desktop Popup */}
                    <AnimatePresence>
                        {!menu && showPopup && (
                            <motion.div
                                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-12 z-[100] w-60 -left-6 -translate-x-1/2 rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 px-5 py-4 text-gray-100 shadow-2xl backdrop-blur-xl"
                            >
                                {/* <span className="pointer-events-none absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-t border-l border-white/10 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800"></span> */}
                                <div className="flex flex-col gap-2">
                                    <Link
                                        href="https://www.youtube.com/watch?v=oK1XGDphjBg&list=PL_YslfPtQb_ZVYSBfjVVoGg3VJpyHyCb8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex w-full items-center justify-between rounded-xl border border-white/5 px-4 py-2 text-sm font-medium text-gray-100 transition hover:border-amber-400/60 hover:bg-white/5"
                                        onClick={closePopup}
                                    >
                                        <span>Conducting</span>
                                        <span className="text-[10px] uppercase tracking-[0.3em] text-amber-200/70 transition group-hover:text-amber-200">
                                            Watch
                                        </span>
                                    </Link>
                                    <Link
                                        href="https://www.youtube.com/@MaximRysanov"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex w-full items-center justify-between rounded-xl border border-white/5 px-4 py-2 text-sm font-medium text-gray-100 transition hover:border-amber-400/60 hover:bg-white/5"
                                        onClick={closePopup}
                                    >
                                        <span>Channel</span>
                                        <span className="text-[10px] uppercase tracking-[0.3em] text-amber-200/70 transition group-hover:text-amber-200">
                                            Watch
                                        </span>
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Mobile Expanded Submenu */}
                    {menu && showPopup && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col items-end w-full text-gray-300 overflow-hidden"
                        >
                            <Link
                                href="https://www.youtube.com/watch?v=oK1XGDphjBg&list=PL_YslfPtQb_ZVYSBfjVVoGg3VJpyHyCb8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline py-1 text-sm"
                                onClick={closePopup}
                            >
                                Conducting
                            </Link>
                            <Link
                                href="https://www.youtube.com/@MaximRysanov"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline py-1 text-sm"
                                onClick={closePopup}
                            >
                                Channel
                            </Link>
                        </motion.div>
                    )}
                </div>
                <Link
                    href="reviews"
                    onClick={handleNavItemClick}
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
                    onClick={handleNavItemClick}
                    className="hover:text-gray-400"
                >
                    <button className={menu ? "py-5" : "xl:px-5"}>
                        Gallery
                    </button>
                </Link>
                <Link
                    href="recordings"
                    onClick={handleNavItemClick}
                    className="hover:text-gray-400"
                >
                    <button className={menu ? "py-5" : "xl:px-5"}>
                        Recordings
                    </button>
                </Link>
                <Link
                    href="contacts"
                    onClick={handleNavItemClick}
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
                        className="fixed bg-gradient-to-r from-gray-700 to-gray-900 h-screen right-[0px] top-0 md:hidden drop-shadow-2xl w-[100%]"
                    ></motion.div>
                )}
            </AnimatePresence>

            {/* Burger icon */}
            {menu && (
                <div
                    className="absolute top-0 left-0 w-full h-full -z-10"
                    onClick={toggleMenu}
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
