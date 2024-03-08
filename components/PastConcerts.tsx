import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
type Props = {};

export default function PastConcerts({}: Props) {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    return (
        <div className="rounded--lg fixed right-2">
            <button
                className="py-2 pl-3 pr-1 bg-slate-600 hover:bg-slate-500 m-1
                active:bg-slate-400
                rounded-lg flex flex-row text-center justify-center items-center
                 text-white text-sm drop-shadow-lg"
                onClick={(e) => setOpen(!open)}
            >
                Past concerts
                <MdKeyboardArrowDown className="ml-1 text-white" />
            </button>
            {open && (
                <motion.div
                    initial={{ height: 0, opacity: 0.7 }}
                    animate={{ height: 150, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col bg-white text-black rounded-lg drop-shadow-md"
                >
                    {router.pathname !== "/concerts" && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="hover:bg-slate-300 py-2 hover:rounded-lg border-b-2 border-gray-300 text-sm text-center"
                        >
                            <Link href="/concerts">
                                <button onClick={(e) => setOpen(!open)}>
                                    Concerts 2024
                                </button>
                            </Link>
                        </motion.div>
                    )}
                    {router.pathname !== "/concerts-2023" && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="hover:bg-slate-300 py-2 hover:rounded-lg border-b-2 border-gray-300 text-sm text-center"
                        >
                            <Link href="/concerts-2023">
                                <button onClick={(e) => setOpen(!open)}>
                                    Concerts 2023
                                </button>
                            </Link>
                        </motion.div>
                    )}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="hover:bg-slate-300 py-2 hover:rounded-lg border-b-2 border-gray-300 text-sm text-center"
                    >
                        <Link href="/concerts-2022">
                            <button onClick={(e) => setOpen(!open)}>
                                Concerts 2022
                            </button>
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.4, delay: 0.6 }}
                        className="hover:bg-slate-300 py-2 hover:rounded-lg border-b-2 border-gray-300 text-sm text-center"
                    >
                        <Link href="/concerts-2021">
                            <button onClick={(e) => setOpen(!open)}>
                                Concerts 2021
                            </button>
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.6, delay: 0.8 }}
                        className="hover:bg-slate-300 py-2 hover:rounded-lg border-b-2 border-gray-300 text-sm text-center rounded-b-lg"
                    >
                        <Link href="/concerts-2020">
                            <button onClick={(e) => setOpen(!open)}>
                                Concerts 2020
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
