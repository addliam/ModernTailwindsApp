import React from 'react'
import {clients} from '../constants'
import styles from '../styles'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} w-full flex-wrap`}>
        {
          clients.map((client)=>(
            <div key={client.id} className={`flex-1 basis-6/12 mb-8 md:basis-0 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] `}>
              <img src={client.logo} alt="client" className='sm:w-192px w-[120px] ' />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Clients