import Header from '@/components/Header'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Image from 'next/image';
import Footer from '@/components/Footer';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import Link from 'next/link';
import { motion } from 'framer-motion';
type Props = {}

export default function Recordings({}: Props) {
  return (
    <div className='h-[100vh]'>
        <Header/>
        <h1 className='absolute top-[15%] left-1/2 transform -translate-x-1/2 font-bold text-xl text-black z-10'>Recordings</h1>
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 3}}
        className='flex items-center justify-center h-[85vh] w-full border-[10px] border-gray-300 bg-gradient-to-tr from-neutral-100 to-gray-200 top-[74px] absolute'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate:50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false
                }}
                pagination={{el: ".swiper-pagination", clickable: true}}
                navigation={{
                    nextEl:".swiper-button-next",
                    prevEl:".swiper-button-prev",
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                >
                <SwiperSlide>
                    <Link href="https://bis.se/performers/rysanov-maxim/pteris-vasks-viola-concerto-voices">
                        <Image src="/recordings/1_vasks.jpeg" alt="rec" width={200} height={200} className="rounded-lg"/>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/recordings/2_shubert.png" alt="rec" width={200} height={200} className="rounded-lg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/recordings/3_martinu.jpg" alt="rec" width={200} height={200} className="rounded-lg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/recordings/4_mozart.jpg" alt="rec" width={200} height={200} className="rounded-lg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/recordings/5_dobrinka.jpg" alt="rec" width={200} height={200} className="rounded-lg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/recordings/6_pavane.jpg" alt="rec" width={200} height={200} className="rounded-lg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/recordings/7_bruch.jpg" alt="rec" width={200} height={200} className="rounded-lg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/recordings/8_beethoven.jpg" alt="rec" width={200} height={200} className="rounded-lg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/recordings/9_brahms.jpg" alt="rec" width={200} height={200} className="rounded-lg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/recordings/10_bach.jpg" alt="rec" width={200} height={200} className="rounded-lg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/recordings/11_brahms.jpg" alt="rec" width={200} height={200} className="rounded-lg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/recordings/12_janine.jpg" alt="rec" width={200} height={200} className="rounded-lg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/recordings/13_kanchelli.jpg" alt="rec" width={200} height={200} className="rounded-lg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/recordings/14_chang.jpg" alt="rec" width={200} height={200} className="rounded-lg"/>
                </SwiperSlide>

                <div className='m-20'>
                    <div className='swiper-button-prev slider-arrow'>
                        {/* add new icons and beiggger pirctures*/}
                        {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
                        {/* <BsFillArrowLeftCircleFill name="arrow-back-outline"/> */}
                    </div>
                    <div className='swiper-button-next slider-arrow'>
                        {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
                        {/* <BsFillArrowLeftCircleFill name="arrow-back-outline" size={24}/> */}
                    </div>
                    <div className='swiper-pagination'></div>
                </div>
                
            </Swiper>
        </motion.div>
        
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:2, duration:2}}
        className='absolute bottom-[100px] flex flex-row items-center justify-evenly w-full'>
            <Image src="/ONYX.png" alt="onyx" width={100} height={100}/>
            <Image src="/BIS.jpg" alt="bis" width={100} height={100}/>
        </motion.div>
        <Footer />
    </div>
  )
}