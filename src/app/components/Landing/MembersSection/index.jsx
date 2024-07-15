import React from 'react'
import Title from '@/app/components/Title'
import Members from "@/app/components/Members"

export default function MembersSection({members, openMembersModal}) {
  return (
    <section className={`py-[100px]`} id="team">
      <div className={`container`}>
        <div className='mx-auto text-center text-2xl'>
          <Title title={"Members"}/>
          <Members members={members} openMembersModal={openMembersModal}/>
        </div>
      </div>
    </section>
  )
}
