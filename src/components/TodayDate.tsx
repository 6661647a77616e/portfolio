import React, { useState, useEffect } from 'react';
import './components.css'
const nursi_date = new Date('1960-03-23');

export default function TodayDate() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 20000); // Set the duration in milliseconds after which the fade-out effect starts

    return () => clearTimeout(timer);
  }, []);

  const renderDate = () => {
    const date = new Date();
    return date.toDateString();
  };

  const calculateDaysBetween = () => {
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - nursi_date.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  };

  return (
    <div>
      <h1>Today is, {renderDate()}.</h1>
      <h1 className={`fade-container ${fadeOut ? 'fade-out' : ''}`}>
        It has been {calculateDaysBetween()} days since the death of respected Nursi.
      </h1>
    </div>
  );
}