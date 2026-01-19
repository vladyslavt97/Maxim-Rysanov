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

    const renderNavLinks = (isMobile: boolean) => {
        const linkClassName = isMobile ? "block w-full" : "hover:text-gray-400";
        const desktopButtonClassName = "xl:px-5";
        const mobileButtonClassName =
            "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-right text-[15px] font-medium tracking-wide text-gray-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:border-amber-200/40 hover:bg-white/10 hover:text-white";
        const mediaButtonClassName = isMobile
            ? `${mobileButtonClassName} ${
                  showPopup ? "border-amber-200/60 bg-white/10" : ""
              }`
            : `${desktopButtonClassName} hover:text-gray-400`;
        const mediaContainerClassName = isMobile ? "w-full" : "relative";
        const mobileSubmenuClassName = isMobile
            ? "mt-2 ml-4 flex flex-col items-start gap-1 overflow-hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-gray-300"
            : "flex flex-col items-start w-full text-gray-300 overflow-hidden";
        const mobileSubLinkClassName = isMobile
            ? "w-full rounded-lg py-1.5 pl-2 text-sm text-gray-300 transition hover:text-white hover:bg-white/5"
            : "hover:underline py-1 pl-3 text-left text-sm";

        return (
            <>
                <Link
                    href="/"
                    onClick={handleNavItemClick}
                    className={linkClassName}
                >
                    <button
                        className={
                            isMobile
                                ? mobileButtonClassName
                                : desktopButtonClassName
                        }
                    >
                        Home
                    </button>
                </Link>
                <Link
                    href="bio"
                    onClick={handleNavItemClick}
                    className={linkClassName}
                >
                    <button
                        className={
                            isMobile
                                ? mobileButtonClassName
                                : desktopButtonClassName
                        }
                    >
                        Biography
                    </button>
                </Link>
                <Link
                    href="concerts"
                    onClick={handleNavItemClick}
                    className={linkClassName}
                >
                    <button
                        className={
                            isMobile
                                ? mobileButtonClassName
                                : desktopButtonClassName
                        }
                    >
                        Concerts
                    </button>
                </Link>

                <div className={mediaContainerClassName}>
                    <button
                        onClick={togglePopup}
                        className={`${mediaButtonClassName} w-full text-right md:text-left`}
                    >
                        <div
                            className={`flex items-center gap-2 ${
                                isMobile
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
                        {!isMobile && showPopup && (
                            <motion.div
                                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                transition={{
                                    duration: 0.24,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="absolute top-12 z-[100] w-60 -left-6 -translate-x-1/2 rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 px-5 py-4 text-gray-100 shadow-2xl backdrop-blur-lg will-change-transform will-change-opacity transform-gpu"
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
                    {isMobile && showPopup && (
                        <motion.div
                            initial={{ opacity: 0, scaleY: 0.9, y: -4 }}
                            animate={{ opacity: 1, scaleY: 1, y: 0 }}
                            exit={{ opacity: 0, scaleY: 0.9, y: -4 }}
                            transition={{
                                duration: 0.18,
                                ease: [0.25, 0.96, 0.4, 1],
                            }}
                            style={{ originY: 0 }}
                            className={`${mobileSubmenuClassName} will-change-transform`}
                        >
                            <Link
                                href="https://www.youtube.com/watch?v=oK1XGDphjBg&list=PL_YslfPtQb_ZVYSBfjVVoGg3VJpyHyCb8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={mobileSubLinkClassName}
                                onClick={closePopup}
                            >
                                Conducting
                            </Link>
                            <Link
                                href="https://www.youtube.com/@MaximRysanov"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={mobileSubLinkClassName}
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
                    className={linkClassName}
                >
                    <button
                        className={
                            isMobile
                                ? mobileButtonClassName
                                : desktopButtonClassName
                        }
                    >
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
                    className={linkClassName}
                >
                    <button
                        className={
                            isMobile
                                ? mobileButtonClassName
                                : desktopButtonClassName
                        }
                    >
                        Gallery
                    </button>
                </Link>
                <Link
                    href="recordings"
                    onClick={handleNavItemClick}
                    className={linkClassName}
                >
                    <button
                        className={
                            isMobile
                                ? mobileButtonClassName
                                : desktopButtonClassName
                        }
                    >
                        Recordings
                    </button>
                </Link>
                <Link
                    href="contacts"
                    onClick={handleNavItemClick}
                    className={linkClassName}
                >
                    <button
                        className={
                            isMobile
                                ? mobileButtonClassName
                                : desktopButtonClassName
                        }
                    >
                        Contacts
                    </button>
                </Link>
            </>
        );
    };
    return (
        <header className="relative p-1 pr-5 flex flex-row justify-between bg-gradient-to-tr from-[#0d2437] to-[#163554] items-center z-50 shadow-2xl h-full overflow-visible">
            {logo && (
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2 }}
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
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-gray-500/10 z-10"
                        onClick={closePopup}
                    />
                )}
            </AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                animate={{ opacity: 1 }}
                className="relative z-30 hidden items-center space-x-3 font-semibold lg:text-xl text-gray-300 md:flex"
            >
                {renderNavLinks(false)}
            </motion.div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menu && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 z-[55] bg-slate-900/40 backdrop-blur-sm md:hidden"
                            onClick={toggleMenu}
                        ></motion.div>
                        <motion.aside
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 30,
                            }}
                            className="fixed right-0 top-0 z-[65] h-screen w-[86vw] max-w-[360px] md:hidden"
                        >
                            <div className="relative h-full overflow-hidden bg-gradient-to-br from-[#0d2437] via-[#163554] to-[#667d95] shadow-2xl">
                                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(420px_circle_at_20%_0%,#4b6279,#667d95]"></div>
                                <div className="relative flex h-full flex-col px-6 pb-10 pt-20 text-gray-100">
                                    <div className="mb-4 text-xs uppercase tracking-[0.35em] text-gray-400">
                                        Menu
                                    </div>
                                    <div className="flex-1 overflow-y-auto overscroll-contain pr-1">
                                        <div className="flex flex-col gap-2">
                                            {renderNavLinks(true)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Burger icon */}
            <div onClick={toggleMenu} className="z-[75] md:hidden">
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
