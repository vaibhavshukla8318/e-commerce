import React, { useState, useEffect } from 'react';
import style from '../css/home.module.css';
import Navbar from './Navbar';
import Logo from '../image/logo.png'

const Slider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next slide
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 1000); // Change slide every 1 second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images]);

  return (
    <div className={style.slider}>
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentSlide ? style.slide + ' ' + style.active : style.slide}
          style={{ backgroundImage: `url(${image})`, display: "flex", flexDirection: "row", minWidth: "100vw", minHeight: "50vh", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", flexWrap: "nowrap" }}
        ></div>
      ))}
    </div>
  );
};

// Example usage:
const images = [
  'https://www.ehmc.co.in/images/banner1.jpg',
  'https://www.ehmc.co.in/images/banner2.jpg',
  'https://www.ehmc.co.in/images/banner3.jpg',
  // Add more image URLs as needed
];

const Home = () => {

  return (
    <>
      <Navbar />
      <div className={style.homePage}>
        <Slider images={images} />
        <section className={style.section1}>
          <div>
            <h3>Welcome to <span style={{ color: "rgb(207, 63, 147)" }}>Aarogya Sanjeevani Clinic</span> – Empowering Health Through Electrohomeopathy</h3>
            <p>
              Electrohomeopathy is a holistic system of medicine that combines elements of homeopathy and electrotherapy. Developed in the late 19th century by Italian physician Count Cesare Mattei, electrohomeopathy aims to restore health by using preparations derived from plants, minerals, and metals. Unlike traditional homeopathy, which primarily uses potentized substances, electrohomeopathy also utilizes the concept of electro-dynamization, where substances are combined with vegetable oils and then subjected to a specific electrical process.
            </p>
          </div>
        </section>
        <section className={style.section2}>
          <div className={style.contactInfo}>
            <div>
              <h2>Contact Info:</h2>
              <p>Email: <a href="mailto:sanjivshukla000@gmail.com">sanjivshukla000@gmail.com</a></p>
              <p>Mobile: <a href="tel:+91 9889038280">+91 9889038280</a></p>
            </div>
            <div className={style.sanjeevaniCircle}>
              {/* <div className={style.sanjeevaniText}></div> */}
              <img src={Logo} alt='logo'/>
            </div>

          </div>
          <div className={style.copyRight}>
            Copyright © 2024 Dr. Sanjiv Shukla. All rights reserved.
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
