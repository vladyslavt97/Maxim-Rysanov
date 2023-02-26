import Header from '@/components/Header'
import React from 'react'

type Props = {}

export default function Concerts({}: Props) {
  return (
    <div>
      <Header />
      <div className='h-screen'>Concerts</div>
    </div>
  )
}