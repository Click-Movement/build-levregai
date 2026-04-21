import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Waitlist.css';

const WaitlistConfirmed = () => {
  return (
    <div className="waitlist-page">
      <Helmet>
        <title>LevregAi - Waitlist Confirmed</title>
      </Helmet>

      <div className="waitlist-container waitlist-confirmed-container">
        <img
          className="waitlist-logo"
          src="/LevReg_BlackGreen.png"
          alt="LevRegAi"
          width="200"
        />

        <h1>Thanks! We have you on the waitlist.</h1>
      </div>
    </div>
  );
};

export default WaitlistConfirmed;
