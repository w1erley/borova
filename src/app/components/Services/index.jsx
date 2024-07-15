import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "./service.module.scss"

export default function Services() {
  const services = [
    {
      name: "OpenWebRX",
      link: "/",
      image: "openweb.jpg",
    },
    {
      name: "HotSpot",
      link: "/",
      image: "hotspot.jpg",
    },
    {
      name: "MeteoStation",
      link: "/",
      image: "meteo.jpg",
    },
    {
      name: "ADS-B",
      link: "/",
      image: "adsb.jpg",
    }
  ]

  return (
    <div class="grid grid-cols-2 gap-4">
      {services.map(service => (
          <Link
            href={service.link}
          >
            <div style={{backgroundImage: `url(../../../../../images/services/${service.image})`}} className={`${styles.service} text-white`}>
              <div className={`${styles.opacitier} flex`}>
                  <span className='m-auto'>
                    {service.name}
                  </span>
              </div>
            </div>
          </Link> 
        )
      )}
    </div>
  )
}
