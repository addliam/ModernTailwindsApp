import React from 'react'
import {feedback} from '../constants';
import FeedbackCard from './FeedbackCard';
import styles from "../styles";

const Testimonials = () => (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -rigth-[50%] rounded-full blue__gradient '/>

      <div className={`w-full flex justify-between items-center flex-col sm:flex-row mb-6 sm:mb-16 z-[1]  relative`}>
        <h1 className={`${styles.heading2}`}>What people <br className='hidden sm:block' /> are saying about us</h1>
        <div className='w-full mt-6 md:mt-0'>
          <p className={`${styles.paragraph} text-left max-w-[450px] `}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
        </div>
      </div>
      <div className='flex flex-wrap justify-center sm:justify-start w-full feedback-container relative z-[1] '>
        {
          feedback.map((card,indx)=>(
            <FeedbackCard key={card.id} {...card} />
          ))
        }
      </div>

    </section>
)


export default Testimonials