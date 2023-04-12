import Footer from '@/components/Footer';
import Header from '@/components/Header'
import { motion } from 'framer-motion';
import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube';
import { Bars } from  'react-loader-spinner'

type Props = {}

export default function Media({}: Props) {
  const opts: YouTubeProps['opts'] = {
    height: '150',
    width: '300',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  return (
    <div>
        <div className='absolute top-[11%] sm:top-[5.5%] border-[10px] border-gray-300 bg-gradient-to-tr from-neutral-100 to-gray-200 w-full h-[220%] flex flex-col items-center gap-10'>
          <div className='flex justify-center items-center mt-5'>
              <h1 className='font-bold text-2xl text-black'>Media</h1>
          </div>
          <motion.div 
          initial={{
            opacity: 1
          }}
          animate={{
            opacity: 0
          }}
          transition={{
            delay: 3
          }}
          className='absolute flex items-center justify-center h-[80vh] left-1/2 transform -translate-x-1/2'
          >
            <Bars
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              color="#e8a763"
            />
          </motion.div>

          <motion.div 
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 3, duration: 2
          }}
          className='md:grid md:grid-cols-2 md:gap-10 mt-5 pb-64 md:pb-10 sm:h-[80vh] flex flex-col gap-3'>
              <YouTube opts={opts} videoId="NpuoSSSgPE8" />
              <YouTube opts={opts} videoId="DUwntDEgi6Q" />
              <YouTube opts={opts} videoId="Iyg1wANkw7M" />
              <YouTube opts={opts} videoId="wJQ750WlHkc" />
              <YouTube opts={opts} videoId="oImSUAT9AJ0" />
              <YouTube opts={opts} videoId="CWIQcZHFVng" />
              <YouTube opts={opts} videoId="0ft9xYR4OuY" />
          </motion.div>
        </div>
    </div>
  )
}