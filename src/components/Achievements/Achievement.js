import React from 'react'
import { FaUpRightFromSquare } from "react-icons/fa6";

const Achievement = ({title, desc, icon, certificate}) => {
  return (
    <div className='achievement'>
        <p className='com-icon'>{icon}</p>
        <h2>{title}</h2>
        <p className='com-desc'>{desc}</p>
        <a href={certificate} className='cursor-pointer'>View Certificate <FaUpRightFromSquare /></a>
    </div>
  )
}

export default Achievement
