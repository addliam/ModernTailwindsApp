import React from 'react'
import styles from '../styles';
import {logo} from '../assets';
import {footerLinks, socialMedia} from '../constants'

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-1 flex flex-col justify-start mr-10 '>
        <img src={logo} alt="hoobank" className='w-[266px] h-[72px] object-contain ' />
        <p className={`${styles.paragraph} mt-4 max-w-[320px] `}>A new way to make the payments easy, reliable and secure</p>
      </div>

      <div className='flex-[1.5] w-full flex flex-wrap flex-row justify-between mt-10 md:mt-0 '>
        {
          footerLinks.map((footerLink)=>(
            <div key={footerLink.title} className='flex flex-col ss:my-0 my-4 min-w-[150px] md:last:mx-0 last:mx-auto '>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white' >{footerLink.title}</h4>
              <ul className='list-none mt-4'>
                {
                  footerLink.links.map((link)=>(
                    <li key={link.name} className={`font-poppins font-nomal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer mb-4 last:mb-0 `} >
                      {link.name}
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </div>

    <div className='w-full flex justify-between items-center flex-col md:flex-row pt-6 border-t-[1px] border-t-[#3f3e45] '>
      <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>2022 HooBank. All Rights Reserved.</p>
      <div className='flex flex-row mt-6 md:mt-0 '>
        {
          socialMedia.map((social)=>(
            <img key={social.id} src={social.icon} alt={social.id} className={`w-[21px] h-[21px] object-contain cursor-pointer mr-6 last:mr-0 `} />
          ))
        }
      </div>
    </div>
  </section>
)

export default Footer