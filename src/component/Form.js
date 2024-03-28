import React, { useState, useEffect } from 'react';

function TimeSlot() {
  const initialSlots = () => JSON.parse(localStorage.getItem('slots')) || Array(200).fill(false);
  const [slots, setSlots] = useState(initialSlots); 

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
    <div>
      <h1>Slot Booking System</h1>
      <div>
        <h2>Available Slots:</h2>
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
  );
}

export default TimeSlot;
