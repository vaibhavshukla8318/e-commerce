import React, {useState, useEffect} from 'react';
import styles from '../css/about.module.css'; // Importing CSS module
import Navbar  from './Navbar';
import Logo from '../image/logo.png';
import Email from '../image/email.png';
import Whatsapp from '../image/whatsapp.png';
import Facebook from '../image/facebook.png';
import Image1 from '../image/image1.png'
import Image2 from '../image/image2.png'
import Image3 from '../image/image3.png'
import Image4 from '../image/image4.png'
import Image5 from '../image/image5.png'

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={styles.slider}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${image})`,
            display: index === currentIndex ? 'block' : 'none',
          }}
          className={styles.sliderImage}
        ></div>
      ))}
      <button
        onClick={goToPreviousSlide}
        style={{
          height:"30px",
          width:"30px",
          position: 'absolute',
          top: '30%',
          left: '10px',
          transform: 'translateY(-50%)',
          zIndex: 999,
          cursor:"pointer"

        }}
      >
        &lt;
      </button>
      <button
        onClick={goToNextSlide}
        style={{
          height:"30px",
          width:"30px",
          position: 'absolute',
          top: '30%',
          right: '10px',
          transform: 'translateY(-50%)',
          zIndex: 999,
          cursor:"pointer"

        }}
      >
        &gt;
      </button>
    </div>
  );
};

  // Example usage:
const images = [
  Image1,
  Image2,
  'https://www.ehmc.co.in/images/banner1.jpg',
  'https://www.ehmc.co.in/images/banner2.jpg',
  
  // Add more image URLs as needed
];


const About = () => {
  return (
    <>
      <Navbar/>
      <div className={styles.aboutContainer}>
        <Slider images={images}/>
        <section className={styles.firstSection}>
          <h2 className={styles.aboutTitle}>About Electrohomeopathy</h2>
          <p className={styles.aboutText}>
          <span className={styles.electrohomeopathy}>Electrohomeopathy</span> was devised by Count Cesare Mattei (1809–1896) in the latter part of the 19th Century. Mattei, a nobleman living in a castle in the vicinity of Bologna studied natural science, anatomy, physiology, pathology, Chemistry and botany. He ultimately focused on the supposed therapeutic power of electricity (Red, Blue,Green) in botanical extract.
          </p>
          <p className={styles.aboutText}>
          According to Mattei’s own ideas however, every, disease originates in the change of blood or of the lymphatic system or both and remadies can therefore be mainly divided into two broad categories groups to be used in response to the dominant affected system. Mattei wrote that having obtained plant extracts, he was able to determine in the liquid vegetable electricity.
          </p>
          <p>
          <span className={styles.electrohomeopathy}>Electrohomeopathy</span> is a plant orientated system of herbal medicine. The <span className={styles.electrohomeopathy}>Electrohomeopathy</span> remadies purify the lymph and blood system of the human body, with Electro – homoeopathy we can find and destroy the gravest disorders of the organism by purifing it , or we can help to prevent disease by keeping the body pure and respecting the Will of the creator.
          </p>
        </section>
        <section className={styles.secondSection}>
          <h2>Principles of Electrohomeopathy:</h2>
          <ul>
            <li><span>Vital Force Balance:</span> <span className={styles.electrohomeopathy}>Electrohomeopathy</span> operates on the principle that the body possesses a vital force or energy, which, when imbalanced, leads to disease. The remedies used in <span className={styles.electrohomeopathy}>Electrohomeopathy</span> are believed to restore this vital force balance, promoting the body's ability to heal itself.
            </li>
            <li><span>Individualized Treatment:</span> Unlike homeopathy, <span className={styles.electrohomeopathy}>Electrohomeopathy</span> emphasizes individualized treatment based on the patient's unique symptoms, constitution, and overall health status. Remedies are selected to address the underlying causes of illness rather than just treating the symptoms.
            </li>
            <li><span>Holistic Approach:</span> <span className={styles.electrohomeopathy}>Electrohomeopathy</span> takes a holistic approach to healthcare, considering the interconnectedness of the body, mind, and spirit. It views health as a state of balance and harmony within the individual, encompassing physical, emotional, and spiritual well-being.
            </li>
          </ul>
        </section>
        <section className={styles.thirdSection}>
        <h2 className={styles.heading}>Benefits and Effectiveness:</h2>
            <ul className={styles.list}>
              <li><span>Non-Invasive:</span> <span className={styles.electrohomeopathy}>Electrohomeopathy</span> offers non-invasive treatment options, making it suitable for individuals seeking gentle and natural healing methods. It avoids the use of invasive procedures or harsh medications, reducing the risk of adverse side effects.</li>
              <li><span>Safe for All Ages:</span> <span className={styles.electrohomeopathy}>Electrohomeopathy</span> is considered safe for people of all ages, including infants, children, pregnant women, and the elderly. Its gentle approach makes it suitable for individuals with sensitivities or intolerances to conventional medicines.</li>
              <li><span>Complementary to Conventional Medicine:</span> <span className={styles.electrohomeopathy}>Electrohomeopathy</span> can be used alongside conventional medical treatments as a complementary therapy. It may help alleviate symptoms, enhance overall health, and support the body's natural healing processes.</li>
              <li><span>Treatment of Various Health Conditions:</span> <span className={styles.electrohomeopathy}>Electrohomeopathy</span> is used to treat a wide range of acute and chronic health conditions, including respiratory disorders, digestive issues, skin problems, hormonal imbalances, musculoskeletal pain, and emotional disturbances. It addresses the underlying imbalances contributing to illness, rather than merely suppressing symptoms.</li>
              <li><span>Promotion of Well-Being:</span> Beyond treating specific ailments, <span className={styles.electrohomeopathy}>Electrohomeopathy</span> promotes overall well-being and vitality. By restoring the body's natural equilibrium, it may enhance energy levels, improve immunity, and enhance quality of life.</li>
            </ul>
            <p className={styles.summary}>
              In summary, <span className={styles.electrohomeopathy}>Electrohomeopathy</span> offers a holistic approach to health and healing, aiming to restore balance and harmony within the body. With its gentle yet effective remedies, it provides safe and natural treatment options for a variety of health conditions, promoting overall well-being and vitality.
            </p>
        </section>
        <section className={styles.fourthSection}>
        <div className={styles.contactInfo}>
            <div>
              <h2>Contact Info:</h2>
              <p>
                <img src={Email} alt='email'/> 
                <a href="mailto:sanjivshukla000@gmail.com">sanjivshukla000@gmail.com</a>
              </p>
              <p>        
                 <img src={Whatsapp} alt='whatsapp'/>
                <a href="https://wa.me/919889038280">+91 9889038280</a>
              </p>
            </div>
            <div>
              <h2>Social Media:</h2>
              <a href=''><img src={Facebook} alt='fb'/></a>
            </div> 
            <div className={styles.sanjeevaniCircle}>
              {/* <div className={style.sanjeevaniText}></div> */}
              <img src={Logo} alt='logo'/>
            </div>

          </div>
          <div className={styles.copyRight}>
            Copyright © 2024 Dr. Sanjiv Shukla. All rights reserved.
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
