import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

export default function HomePage({}: Props) {
  return (
    <div>
        <div className='absolute w-[45%] sm:w-[50%] p-5 flex justify-center items-start h-[80vh] text-gray-800 flex-col z-30'>
            <p className='italic'>
                &quot;The colours and contrasts that Rysanov manages to extract from the orchestra are truly fabulous!&quot; 
                <br/>
                &quot;We already know some very beautiful versions of this symphony by Vasks, including one by Kremerata Baltica on Teldec; but Rysanov and the Riga orchestra raise it to the top of the discography!&quot;
            </p>
            <br/>
            <p className='text-gray-500'>Crescendo Magazine, Olivier Vrins, 18 May 2020</p>
        </div>
        <motion.div
        initial={{
            x: 220,
            opacity: 0.2
        }}
        whileInView={{
            x: 0,
            opacity: 1
        }}
        transition={{
            duration: 1
        }}
        className="p-2"
        >
            <Image src='/home.png' alt="image" width={300} height={300} className='absolute right-0 object-fit'/>
        </motion.div>
    </div>
  )
}