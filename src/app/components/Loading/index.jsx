import React from 'react'
import Image from 'next/image';

export default function Loading() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <Image src={'/images/loader.gif'} alt="Loading..." width={64} height={64}/>
    </div>
  )
}
