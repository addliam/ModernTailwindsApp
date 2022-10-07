import React from 'react'
import styles from '../styles'
import {discount, robot} from '../assets';
import GetStarted from '../components/GetStarted';

const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 sm:justify-start `}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2" >
          <img src={discount} alt="discount" className={`w-[32px] h-[32px]`} />          
          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20%</span> Discount for {""}
            <span className='text-white'>1 Month</span> Account
          </p>
        </div>
        <div className='flex flex-row justify-start items-center w-full' >
          <h1 className='flex-1 font-poppins font-semibold text-[52px] text-white ss:text-[72px] leading-[75px] ss:leading-[100px] max-w-fit mr-[72px]'>
          The Next <br className='hidden sm:block' /> {" "}
          <span className="text-gradient">Generation</span> {" "}
          </h1>
          <div className="hidden ss:flex mr-2 md:mr-4 ">
            <GetStarted />
          </div>
        </div>
        <h1 className='flex-grow-0 font-poppins font-semibold text-[52px] text-white ss:text-[68px] leading-[75px] ss:leading-[100px] '>Payment Method.</h1>     
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards
        most likely to fit your needs. We examine annual percentage rates,
        annual fees.
        </p>  
      </div>
      <div className={`flex-1 flex my-10 relative md:my-0`} >
        <img className='z-10 mt-8 mb-8 ss:mt-0 ss:mb-8 ' src={robot} alt="robot holding credit card" />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient '>
        </div>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient '>
        </div>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient '>
        </div>
      </div>
      <div className={`${styles.flexCenter} ss:hidden`}>
        <GetStarted />
      </div>
    </section>
)

export default Hero