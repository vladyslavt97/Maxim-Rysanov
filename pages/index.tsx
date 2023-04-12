import { Inter } from '@next/font/google'
import Header from '@/components/Header'
import HomePage from '@/components/HomePage'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-gray-300 h-screen'>
      <Header />
      <HomePage />
    </div>
  )
}
