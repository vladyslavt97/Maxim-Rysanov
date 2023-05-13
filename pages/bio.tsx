import { useStore } from "../components/State";
import EngBio from '@/components/EngBio';
import UkrBio from '@/components/UkrBio';
import RusBio from '@/components/RusBio';
import { HiDownload } from 'react-icons/hi';

type Props = {}

interface languagesState {
  language: string,
}

export default function Bio({}: Props) {
  const language = useStore((state: languagesState) => state.language);
  
  return (
    <div className='h-full bg-gray-400'>
        <div className='absolute top-[82px] flex flex-col justify-center items-center mx-2 p-5 pb-40 md:pb-40 text-black bg-gradient-to-tr from-neutral-100 to-gray-200 rounded md:p-10 lg:px-20'>
            {/* <LanguagesSwitch/> */}
            <a href="/Rysanov_Biography_22-23.pdf" download className='absolute top-5 right-0 text-blue-900 flex flex-row  items-center text-center'>PDF<HiDownload className='text-xl mr-2'/></a>
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