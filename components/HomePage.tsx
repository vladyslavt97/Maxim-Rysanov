import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}


export default function HomePage({}: Props) {
  return (
    <div className='bg-homebg bg-cover w-full border-[10px] border-gray-300 absolute top-[70px] rounded text-black sm:h-[93%] h-[90%]'>
        <div className='absolute top-[10%] flex justify-center items-start h-[60vh] text-gray-800 flex-col text-sm md:text-md z-30 md:text-2xl xl:text-3xl xl:font-light lg:leading-relaxed md:ml-[5%] lg:ml-[12%]'>
            <p className='italic w-[45%] sm:w-[50%] p-5'>
                &quot;The colours and contrasts that Rysanov manages to extract from the orchestra are truly fabulous!&quot; 
                <br/>
                &quot;We already know some very beautiful versions of this symphony by Vasks, including one by Kremerata Baltica on Teldec; but Rysanov and the Riga orchestra raise it to the top of the discography!&quot;
            </p>
            <br/>
            <br/>
            {/* <br/> */}
            <p className='text-gray-500 w-full px-5 pb-5 text-xs'>Crescendo Magazine, Olivier Vrins, 18 May 2020</p>
        </div>
        <motion.div
        initial={{
            opacity: 0
        }}
        animate={{
            opacity: 1
        }}
        transition={{
            duration: 2
        }}
        id="home"
        >
            {/* <Image src='/homebg.png' alt="image" width={1000} height={1000} className='absolute right-0 object-fit w-full top-[5%]'/> */}
            <Image src='/homemr.png' alt="image" width={1000} height={1000} className='absolute -right-2 object-fit w-[90%] top-0'/>
        </motion.div>
    </div>
  )
}