import React from 'react'
import styles from '../styles'
import Button from './Button'

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow `}>
      <div className='flex-1 flex flex-col' >
        <h2 className={`${styles.heading2}`}>Lets try our service now!</h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px] `}>Everything you need to accept card payments and grow your business
        anywhere on the planet.</p>
      </div>
      <div className={`${styles.flexCenter} ml-0 mt-10 sm:mt-0 sm:ml-10 `}>
        <Button />
      </div>
    </section>
)

export default CTA