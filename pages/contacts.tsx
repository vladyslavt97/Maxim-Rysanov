import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'
import { AiOutlinePhone } from 'react-icons/ai';
type Props = {}

export default function Contacts({}: Props) {
  return (
    <div className='h-full'>
        <Header />
        <div className='absolute top-[74px] w-full border-[10px] border-gray-300 bg-gradient-to-tr from-neutral-100 to-gray-200 text-black rounded md:pt-5'>
            <div className='flex items-center justify-center'>
                <h1 className='font-bold text-2xl pt-5'>Contacts</h1>
            </div>
            <div className='p-4 flex justify-center items-center flex-col text-center'>
                <div className=''>
                    <h1 className='font-semibold'>General Management</h1>
                    <p>Lorna Neill<br/>
                    <div className='flex flex-row text-center justify-center items-center gap-3'>
                        <AiOutlinePhone/>+44 (0) 20 8051 9476<br/>
                    </div>
                    <div className='flex flex-row text-center justify-center items-center gap-3'>
                        <AiOutlinePhone/>+44 (0) 7798 531 819<br/>
                    </div>
                    lorna@musicinteralia.com<br/>
                    <Link href="http://www.musicinteralia.com" className='text-blue-900'>
                    musicinteralia.com<br/>
                    </Link>
                    </p>
                </div>
                <br/>
                <div>
                    <h1 className='font-semibold'>Benelux</h1>
                    <p>Marjon Koenekoop<br/>
                    marjon@ivyartists.com<br/>
                    <Link href="http://www.ivyartists.com" className='text-blue-900'>
                    ivyartists.com<br/>
                    </Link>
                    </p>
                </div>
                <br/>
                <div>
                    <h1 className='font-semibold'>Italy & various projects</h1>
                    <p>Susanna Stefani susanna@onylstage.co.uk<br/>
                    <div className='flex flex-row text-center justify-center items-center gap-3'>
                    <AiOutlinePhone/> +44 7950 427967<br/>
                    </div>
                    <Link href="http://www.onlystage.co.uk/rysanov/" className='text-blue-900'>
                    onlystage.co.uk/rysanov<br/>
                    </Link>
                    <Link href="http://www.onlystage.co.uk/rysanov-conductor/" className='text-blue-900'>
                    onlystage.co.uk/rysanov-conductor/<br/>
                    </Link>
                    </p>
                </div>
                <br/>
                <div>
                    <h1 className='font-semibold'>Scandinavia</h1>
                    <p>Neel Teilmann<br/>
                    Nordic Artists Management A/S<br/>
                    net@nordicartistsmanagement.com<br/>
                    <div className='flex flex-row text-center justify-center items-center gap-3'>
                        <AiOutlinePhone/>+45 22 744 904<br/>
                    </div>
                    <Link href="http://www.nordicartistsmanagement.com" className='text-blue-900'>
                    nordicartistsmanagement.com<br/>
                    </Link>
                    </p>
                </div>
                <br/>
                <div>
                    <h1 className='font-semibold'>Spain</h1>
                    <p>CONCIERTOS AUGUSTO S.L.<br/>
                    Gonzalo Augusto<br/>
                    gonzalo@conciertosaugusto.com<br/>
                    <div className='flex flex-row text-center justify-center items-center gap-3'>
                        <AiOutlinePhone/>+34 91 634 02 05<br/>
                    </div>
                    <Link href="http://www.conciertosaugusto.com/" className='text-blue-900'>
                    conciertosaugusto.com<br/>
                    </Link>
                    <br/>
                    <br/>
                    <br/>
                    
                    </p>
                </div>
                
            </div>
        </div>
        <Footer />
    </div>
  )
}