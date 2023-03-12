import Footer from '@/components/Footer';
import Header from '@/components/Header'
import { motion } from 'framer-motion';
import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube';
import { ColorRing } from  'react-loader-spinner'

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
          opacity: 1
        }}
        animate={{
          opacity: 0
        }}
        transition={{
          delay: 3
        }}
        className='absolute flex items-center justify-center h-[60vh] left-1/2 transform -translate-x-1/2'
        >
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
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