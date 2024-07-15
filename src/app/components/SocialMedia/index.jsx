"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useReducer } from 'react';
import {RadioGroup, Radio} from "@nextui-org/radio";

function reducer(state, action) {
  switch (action.type) {
    case 'changeSocialStatus': {
      return state === 'youtube' ? 'facebook' : 'youtube';
    }
    default:
      throw new Error('Unknown action');
  }
}

export default function SocialMedia() {
  const [socialStatus, dispatch] = useReducer(reducer, "youtube");

  const youtubeSocialLinks = [
    {
      name: "Anton",
      href: "https://www.youtube.com/@AntonyoZozuly/featured"
    },
  ]

  const facebookSocialLinks = [
    {
      name: "Anton",
      href: "https://www.facebook.com/profile.php?id=100007591789184"
    },
    {
      name: "Volodymyr",
      href: "https://www.facebook.com/profile.php?id=100001843888704"
    },
  ]

  const socialLinks = socialStatus === "youtube" ? youtubeSocialLinks : facebookSocialLinks;

  return (
    <div className={`${socialStatus === "youtube" ? "bg-red-800" : "bg-blue-900"} flex flex-col items-center py-[25px] gap-y-2`}>
      <Image src={`/images/social-media/${socialStatus === "youtube" ? "youtube" : "facebook"}.png`} width={64} height={64}/>
      <h3 className='text-white'>{socialStatus === "youtube" ? "YouTube" : "Facebook"} profiles</h3>
      {socialLinks.map((link, index) => (
        <Link href={link.href} className='text-white/50' key={`social-link-${index}`}>{link.name}</Link>
      ))
      }
      <RadioGroup
        onChange={() => dispatch({ type: 'changeSocialStatus' })}
        className='mt-5'
        label=""
        defaultValue={socialStatus}
      >
        <div className='flex'>
          <Radio 
            value="youtube" 
            label="YouTube"
          />
          <Radio 
            value="facebook" 
            label="Facebook"
          />
        </div>
      </RadioGroup>
    </div>
  )
}
