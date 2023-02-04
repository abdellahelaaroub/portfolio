import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoGithub} from 'react-icons/io'
import {GrInstagram} from 'react-icons/gr'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Abdellah</a>

      <ul className='permalinks'>
        <li> <a href="#"> Home </a> </li>
        <li> <a href="#"> About </a> </li>
        <li> <a href="#"> Experience </a> </li>
        <li> <a href="#"> Services </a> </li>
        <li> <a href="#"> Portfolio </a> </li>
        <li> <a href="#"> Contact </a> </li>
        <li> <a href="#"> Testimonials </a> </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/abdellah-elaaroub-829880188" target="_blank" rel='noreferrer'> <BsLinkedin/> </a>
        <a href="https://github.com/abdellahelaaroub" target="_blank" rel='noreferrer' > <IoLogoGithub/> </a>
        <a href="https://www.instagram.com/abdullah_elaaroub" target="_blank" rel='noreferrer' > <GrInstagram/> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Abdellah ELAAROUB.  All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer