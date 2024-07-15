import React from 'react'
import styles from "./greeting.module.scss"

export default function GreetingSection() {
  return (
    <section className={`${styles.greeting_section} pt-4`}>
      <div className={`container`}>
        <div className='mt-[355px] m-auto text-center text-white'>
          <h1 className='text-[60px] font-weight-500'>
            Вас вітає сайт<br/>
            радіоаматорів селища Борова
          </h1>
        </div>
      </div>
    </section>
  )
}
