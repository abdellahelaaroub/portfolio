import React from 'react'
import './about.css'
import ME from '../../assets/me-2.png'
import {IoMdSchool} from 'react-icons/io'
import {MdOutlineWork} from 'react-icons/md'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>    
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <IoMdSchool className='about__icon'/>
              <h5>Study</h5>
              <small>4+ Years Studying AI</small>
            </article>

            <article className='about__card'>
              <MdOutlineWork className='about__icon'/>
              <h5>Internship</h5>
              <small>3 internships in Dev & Data</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ cpmleted</small>
            </article>
          </div>

          <p>
            A 4th year student in AI and Data Engineering at National school of Applied sciences of Safi, I start learning data science and AI from my two years of studying in the Higher School of Technology Essaouira (Data Science & BI field 2019-2021).<br />
            I am a highly passionate individual who is dedicated to advancing my skills in data engineering, Cloud  and DevOps.  With a strong foundation in AI and computer science ,  am excited to apply my knowledge to real-world projects/challenges and help bridge the gap between the development and deployment of machine learning models, and look forward to playing a key role in delivering powerful and impactful AI solutions. <br />
            I enjoy participanting in programming contests and  engaging in a variety of extracurricular activities such as playing football, video games, and keeping up-to-date with the latest advancements in AI.<br />
            I revel in helping students beginners in their projects and learning journeys. 
          </p>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about