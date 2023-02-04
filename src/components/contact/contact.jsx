import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_dw9vucl', 'template_jfzolyd', form.current, 'R7ByOnp5N1Lj1k9V6')      
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>abdouelaaroub@gmail.com</h5>
            <a href="mailto:abdouelaaroub@gmail.com" target='_blank'> Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Abdelah Elaaroub</h5>
            <a href="https://m.me/abdellah.elaaroub.7" target='_blank'> Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+2126-41854428</h5>
            <a href="https://api.whatsapp.com/send?phone=+212641854428" target='_blank'> Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' />
          <input type="email" name='email' placeholder='Your Email' />
          <textarea name="message" rows="7"></textarea>
          <button type='submit' className='btn btn-primary' >Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact