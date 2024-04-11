import React from 'react'

const Button = ({label, iconURL,label,
  backgroundColor,
  borderColor,
  textColor}) => {
  return (
   <button className={`flex justify-center items-center gap-2 
   px-7 py-4 border font-montserrat text-lg 
   leading-none
   ${backgroundColor}
   
   bg-coral-red
   rounded-full text-white `}>
    {label}

    {iconURL && <img src={iconURL} alt="arrow right icon" 
    className='ml-2 rounded-full w-h h-5'
    />}
   </button>
  )
}

export default Button

