import { delay, motion } from "framer-motion";
import Image from "next/image";
import { TextGenerateEffect } from "./TextAnimation";

type Props = {};
const words = `The colours and contrasts that Rysanov manages to extract from the orchestra are truly fabulous!`;
const words2 = `We already know some very beautiful versions of this symphony by Vasks, including one by Kremerata Baltica on Teldec; but Rysanov and the Riga orchestra raise it to the top of the discography!`;

export default function HomePage({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-homebg bg-cover w-full border-[10px] border-gray-300 absolute top-[70px] rounded text-black sm:h-[93%] h-[83%] overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
                className="absolute top-[10%] flex justify-center items-start h-[60vh] text-gray-800 flex-col text-sm md:text-md z-30 md:text-2xl xl:text-3xl xl:font-light lg:leading-relaxed md:ml-[5%] lg:ml-[12%]"
            >
                <div className="italic w-[45%] sm:w-[50%] p-5 font-extralight md:leading-loose">
                    <TextGenerateEffect words={words} />
                    {/* &quot;The colours and contrasts that Rysanov manages to
                    extract from the orchestra are truly fabulous!&quot; */}
                    <br />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3, duration: 1 }}
                    >
                        <TextGenerateEffect words={words2} />
                    </motion.div>
                    {/* &quot;We already know some very beautiful versions of this
                    symphony by Vasks, including one by Kremerata Baltica on
                    Teldec; but Rysanov and the Riga orchestra raise it to the
                    top of the discography!&quot; */}
                </div>
                <br />
                <motion.p
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, delay: 2.5 }}
                    className="text-gray-500 w-full px-5 pb-1 text-xs md:text-lg"
                >
                    Crescendo Magazine
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, delay: 3 }}
                    className="text-gray-500 w-full px-5 pb-5 text-xs md:text-lg"
                >
                    Olivier Vrins, 18 May 2020
                </motion.p>
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 2,
                    delay: 0.7,
                }}
                id="home"
            >
                <Image
                    src="/homemr.png"
                    alt="image"
                    width={1000}
                    height={1000}
                    className="absolute -right-2 object-fit w-[90%] top-0 max-h-full object-contain lg:-right-52"
                    priority={true}
                />
            </motion.div>
        </motion.div>
    );
}
