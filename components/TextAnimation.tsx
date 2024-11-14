"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.5,
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    const wordsArray = words.split(" ");

    // Define animation variants for each word
    const wordVariants = {
        hidden: { opacity: 0, filter: filter ? "blur(10px)" : "none" },
        visible: {
            opacity: 1,
            filter: filter ? "blur(0px)" : "none",
            transition: { duration, staggerChildren: 0.2 },
        },
    };

    const renderWords = () => {
        return (
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.2,
                        },
                    },
                }}
            >
                {wordsArray.map((word, idx) => (
                    <motion.span
                        key={word + idx}
                        variants={wordVariants}
                        className="dark:text-white text-black"
                    >
                        {word}{" "}
                    </motion.span>
                ))}
            </motion.div>
        );
    };

    return (
        <div className={cn(className)}>
            <div className="mt-4">
                <div className="dark:text-white text-black leading-snug tracking-wide">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
