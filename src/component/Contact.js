import React from 'react'
import style from '../css/contact.module.css'
import Navbar from './Navbar'
import phone from '../image/phone.png'
import email from '../image/email.png'

const Contact = () => {
  function Submit(e) {
    e.preventDefault(); // Prevent default form submission behavior
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbwLZwq80PSchwJZLafYu7PdGpbb3xAVkHWKksuYyOoal-qTkec1rROl51qZ0h8JC2_e/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
      })
      .catch((error) => {
        console.log(error);
      });
      window.alert("Form submitted successfully!"); // Show alert box
      formEle.querySelector('[name="Message"]').value = '';
        formEle.querySelector('[name="Name"]').value = '';
        formEle.querySelector('[name="Email"]').value = '';
        formEle.querySelector('[name="Subject"]').value = '';
        formEle.querySelector('[name="Number"]').value = '';
  }
  
  return (
    <>
        <Navbar/>
       <div className={style.contact}>
         <div className={style.contactImage}></div>
         <div className={style.contactDetails}>
           <div className={style.formContainer}>
             <h3>Get in Touch</h3>
             <form className='form' onSubmit={(e) => Submit(e)}>
               <textarea placeholder='Enter  Message' name="Message" required></textarea>
               <div>
                 <input type='text'
                name="Name" placeholder='Enter Your Name' required/>
                <input type='email' name="Email" placeholder='Email' required/>
              </div>
              <input type='text' name="Subject" placeholder='Enter Subject' required/>
              <div>
                <input type='number' name='Number' placeholder='Enter Number' required/>
                <input type="submit" value="Submit" className={style.submitButton} />
              </div>
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
