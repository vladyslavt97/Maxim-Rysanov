import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { useStore } from "../components/State";
import LanguagesSwitch from '@/components/LanguagesSwitch'
import EngBio from '@/components/EngBio';
import UkrBio from '@/components/UkrBio';
import RusBio from '@/components/RusBio';

type Props = {}

interface languagesState {
  language: string,
}

export default function Bio({}: Props) {
  const language = useStore((state: languagesState) => state.language);
  console.log('languagelanguage', language);
  
  return (
    <div className='h-full bg-gray-400'>
        <div className='absolute top-[82px] flex flex-col justify-center items-center mx-2 p-5 pb-40 md:pb-40 text-black bg-gradient-to-tr from-neutral-100 to-gray-200 rounded md:p-10 lg:px-20'>
            {/* <LanguagesSwitch/> */}
            <div className='flex justify-center items-center'>
              <h1 className='font-bold text-xl m-5 text-black'>Biography</h1>
            </div>
            {language === "eng" && <EngBio/>}
            {language === "ukr" && <UkrBio/>}
            {language === "rus" && <RusBio/>}
        </div>
    </div>
  )
}