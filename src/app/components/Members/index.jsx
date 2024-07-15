"use client";
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from "./member.module.scss"
import { SecondaryButton } from '../Buttons'



export default function Members({members: initialMembers, openMembersModal}) {
  const [members, setMembers] = useState([])
  
  useEffect(() => {
    console.log("initialMembers", initialMembers);
    setMembers(initialMembers);
  }, [initialMembers])
  // const members = [
  //   {
  //     name: "Володимир",
  //     subName: "UR4UMO",
  //     link: "/",
  //     image: "openweb.jpg",
  //   },
  //   {
  //     name: "Антон",
  //     subName: "UR4UPQ",
  //     link: "/",
  //     image: "hotspot.jpg",
  //   },
  //   {
  //     name: "Олександр",
  //     subName: "UY5US",
  //     link: "/",
  //     image: "meteo.jpg",
  //   },
  //   {
  //     name: "Михайло",
  //     subName: "UR4UM",
  //     link: "/",
  //     image: "adsb.jpg",
  //   },
  //   {
  //     name: "Юрій",
  //     subName: "UY5UX",
  //     link: "/",
  //     image: "adsb.jpg",
  //   }
  // ]

  return (
    <div class="grid grid-cols-3 gap-4">
      {members.map((member, index) => (
        <div className='flex flex-col items-center gap-y-3 pb-5' style={{background: '#fff'}} key={`member-${index}`}>
          <div style={{backgroundImage: `url(${member.profilePhotosPath}/background.jpg`}} className={`${styles.background} w-full`}>
            <div className={`${styles.overlay}`}>
            </div>
          </div>
          
          <Image src={`/${member.profilePhotosPath}/avatar.jpg`} className={`${styles.avatar}`} width={192} height={192}/>
          <div className='my-5'>
            <span className='block font-medium'>
              {member.name}
            </span>
            <span className='text-gray-500 text-lg'>
              {member.bio}
            </span>
          </div>
          <SecondaryButton onClick={() => openMembersModal(member.id)}>
            More
          </SecondaryButton>
          {/* <Link href="">More</Link> */}
        </div>
        )
      )}
    </div>
  )
}
