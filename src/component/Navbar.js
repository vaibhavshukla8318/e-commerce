

// import React, { useState } from 'react';
// import style from "../css/navbar.module.css";
// import { Link } from 'react-router-dom';
// import TimeSlot from './Form';
// import MenuIcon from '../image/menu.png';
// import Home from '../image/home.png';
// import About from '../image/about.png';
// import Services from '../image/services.png';
// import Blog from '../image/blog.png';
// import Contact from '../image/contact.png';
// import Appointment from '../image/appointment.png';

// const Navbar = () => {
//   const [showLinks, setShowLinks] = useState(true);

//   const handleMenuClick = () => {
//     setShowLinks(!showLinks);
//   };

//   return (
//     <div className={style.navbar}>
//       <Link to="/" className={style.pageLink}>
//         <p>
//           <span>Aarogya Sanjeevani Clinic</span>
//         </p>
//       </Link>
//       <div className={style.rightContainer}>
       
//         {showLinks && (
//           <div className={style.displayNone}>
//             <Link to='/' className={style.link}>
//               <span>Home</span>
//               <img src={Home} alt='home'/>
//             </Link>
//             <Link to='/about' className={style.link}>
//               <span>About</span>
//               <img src={About} alt='about'/>
//             </Link>
//             {/* <Link to='/services' className={style.link}>
//               <span>Services</span>
//               <img src={Services} alt='services'/>
//             </Link> */}
//             <Link to='/blog' className={style.link}>
//               <span>Blog</span>
//               <img src={Blog} alt='blog'/>
//             </Link>
//             <Link to='/contact' className={style.link}>
//               <span>Contact</span>
//               <img src={Contact} alt='contact'/>
//             </Link>
//             <div className={style.paraContainer}>
//              <p>Make an Appointment</p>
//              <img src={Appointment} alt='appointment'/>
//             </div>
//           </div>
//         )}
//         {/* <img src={MenuIcon} alt='menuIcon' onClick={handleMenuClick} /> */}
//       </div>
//     </div>
//   );
// };

// export default Navbar;










import React, { useState, useEffect } from 'react';
import style from "../css/navbar.module.css";
import { Link } from 'react-router-dom';
import TimeSlot from './Form';
import MenuIcon from '../image/menu.png';
import Home from '../image/home.png';
import About from '../image/about.png';
import Services from '../image/services.png';
import Blog from '../image/blog.png';
import Contact from '../image/contact.png';
import Appointment from '../image/appointment.png';

const Navbar = () => {
  const initialSlots = () => JSON.parse(localStorage.getItem('slots')) || Array(6).fill(false);
  const [slots, setSlots] = useState(initialSlots); 
  const [showLinks, setShowLinks] = useState(true);
  const [showTimeSlot, setShowTimeSlot] = useState(false);


  const handleMenuClick = () => {
    setShowLinks(!showLinks);
  };

  const handleAppointmentClick = () => {
    console.log("Appointment section clicked");
    setShowTimeSlot(!showTimeSlot);
  };
  

  useEffect(() => {
    localStorage.setItem('slots', JSON.stringify(slots));
  }, [slots]);

 

  const bookSlot = (slotNumber) => {
    if (slots[slotNumber]) {
      alert("Slot is already booked.");
    } else {
      const updatedSlots = [...slots];
      updatedSlots[slotNumber] = true;
      setSlots(updatedSlots);
      alert(`Slot ${slotNumber} booked successfully.`);
    }
  };

  const cancelBooking = (slotNumber) => {
    if (!slots[slotNumber]) {
      alert("Slot is already available.");
    } else {
      const updatedSlots = [...slots];
      updatedSlots[slotNumber] = false;
      setSlots(updatedSlots);
      alert(`Booking for slot ${slotNumber} cancelled.`);
    }
  };

  return (
    <div className={style.navbar}>
      <Link to="/" className={style.pageLink}>
        <p>
          <span>Aarogya Sanjeevani Clinic</span>
        </p>
      </Link>
      <div className={style.rightContainer}>
       
     
          <div className={style.displayNone}>
            <Link to='/' className={style.link}>
              <span>Home</span>
              <img src={Home} alt='home'/>
            </Link>
            <Link to='/about' className={style.link}>
              <span>About</span>
              <img src={About} alt='about'/>
            </Link>
            {/* <Link to='/services' className={style.link}>
              <span>Services</span>
              <img src={Services} alt='services'/>
            </Link> */}
            {/* <Link to='/blog' className={style.link}>
              <span>Blog</span>
              <img src={Blog} alt='blog'/>
            </Link> */}
            <Link to='/contact' className={style.link}>
              <span>Contact</span>
              <img src={Contact} alt='contact'/>
            </Link>
            {/* <Link to='/contact' className={style.link}>
              <div className={style.paraContainer} onClick={handleAppointmentClick}>
              <p>Make an Appointment</p>
              <img src={Appointment} alt='appointment'/>
              </div>
            </Link> */}
            {/* {showTimeSlot && ( 
            <div className={style.timeSlot}>
              <h2>Slot Booking System</h2>
              <div>
                <ul>
                  {slots.map((isBooked, index) => (
                    <li key={index}>
                      Slot {index} is {isBooked ? "booked" : "available"}
                      <button onClick={() => bookSlot(index)} disabled={isBooked}>Book</button>
                      <button onClick={() => cancelBooking(index)} disabled={!isBooked}>Cancel</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            )} */}
          </div>
        
        {/* <img src={MenuIcon} alt='menuIcon' onClick={handleMenuClick} /> */}
      </div>
    </div>
  );
};

export default Navbar;





