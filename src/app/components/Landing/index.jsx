"use client"
import React, { useState } from 'react'
import GreetingSection from './GreetingSection'
import EssaySection from './EssaySection'
import ServicesSection from './ServicesSection'
import MembersSection from './MembersSection'
import LocationSection from './LocationSection'
import SocialMediaSection from './SocialMediaSection'
import MembersModal from './MemberModal'

export default function Landing({members}) {
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [memberId, setMemberId] = useState(null);

  const openMembersModal = (memberId) => {
    setMemberId(memberId);
    setShowMembersModal(true)
  }

  return (
    <>
      <GreetingSection/>
      <EssaySection/>
      <ServicesSection/>
      <MembersSection members={members} openMembersModal={openMembersModal}/>
      <LocationSection/>
      <SocialMediaSection/>
      <MembersModal
        isOpen={showMembersModal}
        setIsOpen={setShowMembersModal}
        memberId={memberId}
      />
    </>
  )
}
