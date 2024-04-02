import React from 'react'
import style from '../css/footer.module.css'

const Footer = () => {
  return (
    <div className={style.doctorCardContainer}>
    <div className={style.doctorCard}>
      <div className={style.doctorImage}>
        <img src='https://aiiems.com/uploads/646757dcc081c.jpg'/>
      </div>
      <div className={style.doctorDetails}>
          <h2>Dr. Sanjiv Shukla</h2>
          <ul>
              <li>BEMS, MDEH, PGDNYS</li>
              {/* <li>MDEH</li>
              <li>PGDNYS</li> */}
          </ul>
      </div>
    </div>
   </div>
  )
}

export default Footer