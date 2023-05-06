import { Inter } from '@next/font/google'
import HomePage from '@/components/HomePage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-gray-300 overflow-y-hidden'>
      <HomePage />
    </div>
  )
}
