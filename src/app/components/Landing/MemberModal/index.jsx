"use client"
import React, { useEffect } from "react";
import { PrimaryButton, SecondaryButton } from "../../Buttons";
import CustomModal from "../../CustomModal";
import ImageSwiper from "../../ImageSwiper";

const MembersModal = ({
  isOpen,
  setIsOpen,
  memberId
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-y-hidden")
    } else {
      document.body.classList.remove("overflow-y-hidden")
    }
  }, [isOpen])
  return (
    <CustomModal
      modalContentStyles={{
        width: "100%",
        maxWidth: "680px",
      }}
      showButton={false}
      isOpenModal={isOpen}
      setIsOpenModal={setIsOpen}
    >
      <div className="mb-[32px]">
        <h1
          className={`mx-auto text-center text-[24px] font-semibold mb-[8px] text-H`}
        >
          Photos
          
        </h1>
        <ImageSwiper memberId={memberId}/>
      </div>
      {/* <div className={`flex flex-col items-center gap-y-5 justify-center`}>
        <PrimaryButton
          className="max-w-full w-full"
          onClick={() => {
            router.push(`/payments`);
          }}
        >
          Submit
        </PrimaryButton>
        <SecondaryButton
          className="max-w-full w-full min-h-[48px]"
          onClick={() => {
            setIsOpen(false)
          }}
        >
          Cancel
        </SecondaryButton>
      </div> */}
    </CustomModal>
  );
};

export default MembersModal;
