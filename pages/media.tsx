import Footer from '@/components/Footer';
import Header from '@/components/Header'
import { motion } from 'framer-motion';
import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube';

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
    <div className='h-screen'>
        <Header/>
        <div className='flex justify-center items-center mt-[90px]'>
            <h1 className='font-bold text-2xl'>Media</h1>
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
        className='flex flex-wrap items-center justify-center gap-3 mt-5 pb-40 md:pb-10'>
            <YouTube opts={opts} videoId="DUwntDEgi6Q"/>
            <YouTube opts={opts}  videoId="Iyg1wANkw7M" />
            <YouTube opts={opts}  videoId="wJQ750WlHkc" />
            <YouTube opts={opts} videoId="oImSUAT9AJ0" />
        </motion.div>
        <Footer />
    </div>
  )
}