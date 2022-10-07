import React from 'react'
import {stats} from '../constants';
import styles from '../styles'

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {
      stats.map((stat,indx)=>(
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3 last:justify-center `}>
          <h4 className='font-poppins font-semibold text-white text-2xl xs:text-[40px] leading-[43px] xs:leading-[53px] '>{stat.value}</h4>
          <p className='font-poppins font-normal text-[15px] xs:text-[20px] leading-[21px] xs:leading-[26px] text-gradient uppercase ml-2 '>{stat.title}</p>
        </div>
      ))
    }
  </section>
)

export default Stats