import React from 'react'
import Title from '../../Title'
import SocialMedia from '../../SocialMedia'

export default function SocialMediaSection() {
  return (
    <section className={`py-[100px]`}>
      <div className={`container`}>
        <Title title={"Social Media"}></Title>
        <div className='mx-auto text-center text-2xl'>
          <SocialMedia/>
        </div>
      </div>
    </section>
  )
}
