import React from 'react'
import Title from '@/app/components/Title'
import Services from '@/app/components/Services'

export default function ServicesSection() {
  return (
    <section className={`py-[100px]`} id="services">
      <div className={`container`}>
        <div className='mx-auto text-center text-2xl'>
          <Title title={"Сервіси"}/>
          <Services/>
        </div>
      </div>
    </section>
  )
}
