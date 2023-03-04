import Header from '@/components/Header'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import Image from 'next/image';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import Link from 'next/link';
type Props = {}

export default function Recordings({}: Props) {
  return (
    <div className='h-[100vh]'>
        <Header/>
        <div className='flex items-center justify-center h-full w-full'>
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
                    <Image src="/recordings/1_vasks.jpeg" alt="rec" width={200} height={200} className="rounded-lg"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/recordings/1_vasks.jpeg" alt="rec" width={200} height={200} className="rounded-lg"/>
                </SwiperSlide>

                <div className='m-20'>
                    <div className='swiper-button-prev slider-arrow'>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                        {/* <BsFillArrowLeftCircleFill name="arrow-back-outline"/> */}
                    </div>
                    <div className='swiper-button-next slider-arrow'>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                        {/* <BsFillArrowLeftCircleFill name="arrow-back-outline" size={24}/> */}
                    </div>
                    <div className='swiper-pagination'></div>
                </div>
                
            </Swiper>
            
        </div>
    </div>
  )
}