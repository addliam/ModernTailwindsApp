import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`font-poppins font-medium text-[18px] text-primary outline-none py-4 px-6 bg-blue-gradient ${styles} rounded-[10px] `}>
      Get Started
    </button>
  )
}

export default Button