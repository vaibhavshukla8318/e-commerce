import React from 'react'
import style from '../css/contact.module.css'
import Navbar from './Navbar'
import phone from '../image/phone.png'
import email from '../image/email.png'

const Contact = () => {
  return (
    <>
      <Navbar/>
      <div className={style.contact}>
        <div className={style.contactImage}></div>
        <div className={style.contactDetails}>
          <div className={style.formContainer}>
            <h3>Get in Touch</h3>
            <form action=''>
              <textarea placeholder='Enter Message'></textarea>
              <div>
                <input type='text' placeholder='Enter Your Name'/>
                <input type='email' placeholder='Email'/>
              </div>
              <input type='text' placeholder='Enter Subject'/>
            </form>
          </div>
          <div className={style.contactInfo}>
            <div>
              <img src={phone}/>
              <div>
                <a href='tel:+91 1234567890'>+1234567890</a>
                <p>Sat and Sun 12am to 4pm</p>
              </div>
            </div>
            <div>
              <img src={email}/>
              <div>
                <a href='mailto:your.email@example.com'>your.email@example.com</a>
                <p>Send us your query anytime!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact