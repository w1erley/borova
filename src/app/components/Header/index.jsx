"use client"
import React, { useState, useEffect } from 'react'
import styles from "./header.module.scss";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <button type="button" className="block lg:hidden text-gray-600 focus:outline-none">
            <span className="sr-only">Toggle navigation</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <Link href="#" className={`${styles.header_link} ${isScrolled ? styles.scrolled : ''} `}>WEB-SDR Борова</Link>
          <div className="hidden lg:block">
            <ul className="flex space-x-5">
              <Link href="#intro" className={`${styles.header_link} ${isScrolled ? styles.scrolled : ''} `}>Початок</Link>
              <Link href="#services" className={`${styles.header_link} ${isScrolled ? styles.scrolled : ''} `}>Сервіси</Link>
              <Link href="#team" className={`${styles.header_link} ${isScrolled ? styles.scrolled : ''} `}>Команда</Link>
              <Link href="#location" className={`${styles.header_link} ${isScrolled ? styles.scrolled : ''} `}>Місцезнаходження</Link>
              <Link href="#" className={`${styles.header_link_button}`}>Про нас</Link>
              <Link href="#" className={`${styles.header_link_button}`}>Фото</Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
