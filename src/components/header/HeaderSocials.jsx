import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoGithub} from 'react-icons/io'
import {GrInstagram} from 'react-icons/gr'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/abdellah-elaaroub-829880188" target="_blank" rel='noreferrer'> <BsLinkedin/> </a>
        <a href="https://github.com/abdellahelaaroub" target="_blank" rel='noreferrer' > <IoLogoGithub/> </a>
        <a href="https://www.instagram.com/abdullah_elaaroub" target="_blank" rel='noreferrer' > <GrInstagram/> </a>
    </div>
  )
}

export default HeaderSocials