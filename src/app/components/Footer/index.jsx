import React from 'react'
import styles from "./footer.module.scss"
import Link from 'next/link';

export default function Footer() {
  const footerNavArray = [
    {linkText: "Home", link: '/'},
    {linkText: "Services", link: '/#services'},
    {linkText: "Team", link: '/#team'},
    {linkText: "Location", link: '/#location'},
  ];

  return (
    <footer className={`${styles.footer} bg-gray-600 w-full py-[80px]`}>
            <div className="container">
                <div
                    className={`${styles.nav_section} flex justify-between items-center pb-12`}
                >
                    {/* <Image src={ReportilLogoLight} alt="light-logo"></Image> */}
                    <nav className={`flex ${styles.nav_links}`}>
                        {footerNavArray.map((navInfo, index) => (
                            <Link
                                key={index}
                                href={`/${navInfo.link}`}
                                className={"text-optional font-semibold text-[18px] text-white"}
                            >
                                {navInfo.linkText}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className={`flex justify-between items-center mt-10`}>
          <span className={`${styles.privacy} text-[14px] font-normal`}>
            {"All rights reserved"}
          </span>

                    <span className={`${styles.privacy} text-[14px] font-normal`}>
            {`${"All rights reserved"} | ${"Privacy Policy"}`}
          </span>
                </div>
            </div>
        </footer>
  )
}
