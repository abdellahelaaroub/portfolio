import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Enjoyable</h5>
      <h2>Activities</h2>

      <div className="container services__container">        
            <article className='service'>
              <div className='service__head'>
                <h3>Volunteering</h3>
              </div>

              <ul className='service__list'>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p> Project Manager at M-Next 2023 </p>
                </li>  

                <li>
                  <BiCheck className='service__list-icon'/>
                  <p> DevFest 2022 Organizer | Google Developer Group </p>
                </li>  
                
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p> Mentoring students for their "End of Studies" project </p>
                </li>  
                
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p> speaker on data science / Web Dev at GDSC ENSA Safi / ZeroDay ENSAS </p>
                </li>                         
              </ul>              
            </article>
            {/*END OF UI/UX*/}

            <article className='service'>
              <div className='service__head'>
                <h3>Parallel Activities</h3>
              </div>

              <ul className='service__list'>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p> Google Developer Student Clubs ENSA Safi'2023 Leader & Founder </p>
                </li>  

                <li>
                  <BiCheck className='service__list-icon'/>
                  <p> Co-Lead of ZeroDay ENSA Safi club  </p>
                </li>  
                
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p> Google Developer Groupe Marrakesh Organizer </p>
                </li>                                     
              </ul>              
            </article>
            {/*END OF Web Dev*/}

            <article className='service'>
              <div className='service__head'>
                <h3>Others..</h3>
              </div>

              <ul className='service__list'>
                <li>
                  <BiCheck className='service__list-icon'/>
                  <p> Collaborating on open source projects on github</p>
                </li>  

                <li>
                  <BiCheck className='service__list-icon'/>
                  <p> Work on small and friendly projects that combine different technologies. </p>
                </li>  
                        
              </ul>              
            </article>
            {/*END OF content creation*/}

            
      </div>
    </section>
  )
}

export default services