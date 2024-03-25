import React from 'react';
import style from '../css/home.module.css';
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
      <Navbar/>
      <div className={style.homePage}>
        <section className={style.section}>
          <div>
            <h3>Welcome to [Your Website Name] – Empowering Health Through Electrohomeopathy</h3>
            <p>
            Electrohomeopathy is a holistic system of medicine that combines elements of homeopathy and electrotherapy. Developed in the late 19th century by Italian physician Count Cesare Mattei, electrohomeopathy aims to restore health by using preparations derived from plants, minerals, and metals. Unlike traditional homeopathy, which primarily uses potentized substances, electrohomeopathy also utilizes the concept of electro-dynamization, where substances are combined with vegetable oils and then subjected to a specific electrical process.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
