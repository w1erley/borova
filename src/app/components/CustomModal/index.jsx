import React, { useCallback } from "react";
import ReactModal from "react-modal";
import styles from "./modal.module.scss";
import { PrimaryButton } from "../Buttons";

function CustomModal(
    {
        children,
        isOpenModal,
        setIsOpenModal,
        showButton = true,
        modalContentStyles,
        childrenContainerStyles,
        title,
        actionOnButtonClick = null,
        buttonText = "",
      extraMethodOnModalClose = () => {},
    }
) {
    function closeModal() {
        setIsOpenModal(false);
        document.body.classList.remove("overflow-y-hidden")
        extraMethodOnModalClose();
    }

    return (
        <div>
            <ReactModal
                isOpen={isOpenModal}
                onRequestClose={closeModal}
                className={`${styles.react_modal} ${title ? styles.extra_padding : ""}`}
                style={{
                    overlay: {
                        zIndex: 9999,
                        background: "rgba(0,0,0,0.5)",
                    },
                    content: {
                        ...modalContentStyles,
                    },
                }}
            >
                {title ? <h1 className={styles.modal_title}>{title}</h1> : null}

                <button
                    onClick={closeModal}
                    className="absolute w-7 h-7"
                    style={{top: 25 + 'px', right: 25 + 'px'}}
                >
                    <X className="w-6 h-6 text-[#A5A5A5]"/>
                </button>
                <div 
                  style={childrenContainerStyles} 
                  className={styles.modal}
                >
                    {children}
                </div>
                {showButton ? (
                    <PrimaryButton
                        onClick={async () => {
                            if (actionOnButtonClick !== null) {
                                await actionOnButtonClick();
                                setIsOpenModal(false);
                            } else {
                                setIsOpenModal(false);
                            }
                        }}
                        style={{marginLeft: "auto", marginTop: "24px"}}
                    >
                        {" "}
                        <span className={styles.modal_button_text}>
                          {buttonText ? buttonText : "Got it"}
                        </span>
                    </PrimaryButton>
                ) : null}
            </ReactModal>
        </div>
    );
}

const X = ({...props}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
            {...props}
        >
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
        </svg>
    );
};

export default CustomModal;
