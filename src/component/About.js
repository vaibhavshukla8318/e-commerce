import React, {useState, useEffect} from 'react';
import styles from '../css/about.module.css'; // Importing CSS module
import Navbar  from './Navbar';
import Logo from '../image/logo.png'

const Slider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next slide
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);
    // Example usage:


  return (
    <div className={styles.slider}>
      {images.map((image, index) => (
        <div
          key={index}
          className={index === currentSlide ? 'slide active' : 'slide'}
          style={{ backgroundImage: `url(${image})`, display:"flex", flexDirection:"row", minWidth:"100vw", minHeight:"50vh", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover", flexWrap:"nowrap" }}
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


const About = () => {
  return (
    <>
      <Navbar/>
      <div className={styles.aboutContainer}>
        <Slider images={images}/>
        <section className={styles.firstSection}>
          <h2 className={styles.aboutTitle}>About Electrohomoeopathy</h2>
          <p className={styles.aboutText}>
          Electrohomoeopathy was devised by Count Cesare Mattei (1809–1896) in the latter part of the 19th Century. Mattei, a nobleman living in a castle in the vicinity of Bologna studied natural science, anatomy, physiology, pathology, Chemistry and botany. He ultimately focused on the supposed therapeutic power of electricity (Red, Blue,Green) in botanical extract.
          </p>
          <p className={styles.aboutText}>
          According to Mattei’s own ideas however, every, disease originates in the change of blood or of the lymphatic system or both and remadies can therefore be mainly divided into two broad categories groups to be used in response to the dominant affected system. Mattei wrote that having obtained plant extracts, he was able to determine in the liquid vegetable electricity.
          </p>
          <p>
          Electrohomoeopathy is a plant orientated system of herbal medicine. The Electrohomoeopathy remadies purity the lymph and blood system of the human body, with Electro – homoeopathy we can find and destroy the gravest disorders of the organism by purifing it , or we can help to prevent disease by keeping the body pure and respecting the Will of the creator.
          </p>
        </section>
        <section className={styles.secondSection}>
          <h2>Principles of Electrohomeopathy:</h2>
          <ul>
            <li><span>Vital Force Balance:</span> Electrohomeopathy operates on the principle that the body possesses a vital force or energy, which, when imbalanced, leads to disease. The remedies used in electrohomeopathy are believed to restore this vital force balance, promoting the body's ability to heal itself.
            </li>
            <li><span>Individualized Treatment:</span> Similar to homeopathy, electrohomeopathy emphasizes individualized treatment based on the patient's unique symptoms, constitution, and overall health status. Remedies are selected to address the underlying causes of illness rather than just treating the symptoms.
            </li>
            <li><span>Holistic Approach:</span> Electrohomeopathy takes a holistic approach to healthcare, considering the interconnectedness of the body, mind, and spirit. It views health as a state of balance and harmony within the individual, encompassing physical, emotional, and spiritual well-being.
            </li>
          </ul>
        </section>
        <section className={styles.thirdSection}>
        <h2 className={styles.heading}>Benefits and Effectiveness:</h2>
            <ul className={styles.list}>
              <li><span>Non-Invasive:</span> Electrohomeopathy offers non-invasive treatment options, making it suitable for individuals seeking gentle and natural healing methods. It avoids the use of invasive procedures or harsh medications, reducing the risk of adverse side effects.</li>
              <li><span>Safe for All Ages:</span> Electrohomeopathy is considered safe for people of all ages, including infants, children, pregnant women, and the elderly. Its gentle approach makes it suitable for individuals with sensitivities or intolerances to conventional medicines.</li>
              <li><span>Complementary to Conventional Medicine:</span> Electrohomeopathy can be used alongside conventional medical treatments as a complementary therapy. It may help alleviate symptoms, enhance overall health, and support the body's natural healing processes.</li>
              <li><span>Treatment of Various Health Conditions:</span> Electrohomeopathy is used to treat a wide range of acute and chronic health conditions, including respiratory disorders, digestive issues, skin problems, hormonal imbalances, musculoskeletal pain, and emotional disturbances. It addresses the underlying imbalances contributing to illness, rather than merely suppressing symptoms.</li>
              <li><span>Promotion of Well-Being:</span> Beyond treating specific ailments, electrohomeopathy promotes overall well-being and vitality. By restoring the body's natural equilibrium, it may enhance energy levels, improve immunity, and enhance quality of life.</li>
            </ul>
            <p className={styles.summary}>
              In summary, electrohomeopathy offers a holistic approach to health and healing, aiming to restore balance and harmony within the body. With its gentle yet effective remedies, it provides safe and natural treatment options for a variety of health conditions, promoting overall well-being and vitality.
            </p>
        </section>
        <section className={styles.fourthSection}>
          <div class={styles.contactInfo}>
            <div>
              <h2>Contact Info:</h2>
              <p>Email: <a href="mailto:sanjivshukla000@gmail.com">sanjivshukla000@gmail.com</a></p>
              <p>Mobile: <a href="tel:+91 9889038280">+91 9889038280</a></p>
            </div>
            <div className={styles.sanjeevaniCircle}>
              {/* <div className={style.sanjeevaniText}></div> */}
              <img src={Logo} alt='logo'/>
            </div>
          </div>
          <div className={styles.copyRight}>
            Copyright © 2024 Sanjiv Shukla. All rights reserved.
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
