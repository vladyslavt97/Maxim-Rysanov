import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

type Props = {}

export default function Contacts({}: Props) {
  return (
    <div className='h-full'>
        <Header />
        <div className='absolute top-[74px] w-full border-[10px] border-gray-300 bg-gradient-to-tr from-neutral-100 to-gray-200 text-black rounded md:pt-20'>
            <div className='flex items-center justify-center'>
                <h1 className='font-bold text-2xl pt-5'>Contacts</h1>
            </div>
            <div className='p-4 flex justify-center items-center flex-col text-center'>
                <div className=''>
                    <h1 className='font-semibold'>General Management</h1>
                    <p>Lorna Neill<br/>
                    +44 (0) 20 8051 9476<br/>
                    +44 (0) 7798 531 819<br/>
                    lorna@musicinteralia.com<br/>
                    www.musicinteralia.com<br/>
                    </p>
                </div>
                <br/>
                <div>
                    <h1 className='font-semibold'>Benelux</h1>
                    <p>Marjon Koenekoop<br/>
                    marjon@ivyartists.com<br/>
                    www.ivyartists.com<br/>
                    </p>
                </div>
                <br/>
                <div>
                    <h1 className='font-semibold'>Italy & various projects</h1>
                    <p>Susanna Stefani susanna@onylstage.co.uk<br/>
                    +44 7950 427967<br/>
                    www.onlystage.co.uk/rysanov/<br/>
                    www.onlystage.co.uk/rysanov-conductor/<br/>
                    </p>
                </div>
                <br/>
                <div>
                    <h1 className='font-semibold'>France</h1>
                    <p>Caroline Martin<br/>
                    caroline.martin.musique@wanadoo.fr<br/>
                    www.caroline.martin.musique.fr<br/>
                    </p>
                </div>
                <br/>
                <div >
                    <h1 className='font-semibold'>Spain & America</h1>
                    <p>Gerardo G??mez de Valc??rcel<br/>
                    Linked Artists<br/>
                    gerardo@linkedartists.com<br/>
                    www.linkedartists.com<br/>
                    <br/>
                    <br/>
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