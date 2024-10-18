import React from 'react';
import phoneIcon from '../images/phone.png'; // Replace with actual path to your icon

import emailIcon from '../images/emails.png'; // Replace with actual path to your icon
import linkedinIcon from '../images/linkedin.png'; // Replace with actual path to your icon

const Header = () => (
  <header style={{ textAlign: 'center', marginBottom: '20px' }}>
    <h1 style={{fontSize:"30px"}}>SHIVANI SHRIRAMOJWAR</h1>
    <p style={{ lineHeight: '24px', fontSize:"14px" }}>
      {/* <img src={phoneIcon} alt="Phone" style={{ width: '16px', verticalAlign: 'middle', marginRight: '3px' }} /> */}
      <span style={{ verticalAlign: 'middle', marginRight: '16px' }}>+91 7020955345</span>
      {/* <img src={emailIcon} alt="Email" style={{ width: '16px', verticalAlign: 'middle', marginRight: '8px' }} /> */}
      <span style={{ verticalAlign: 'middle', marginRight: '16px' }}>
        <a href="mailto:shriramojwarshivani1997@gmail.com">shivani15bs@gmail.com</a>
      </span>
      {/* <img src={linkedinIcon} alt="LinkedIn" style={{ width: '16px', verticalAlign: 'middle', marginRight: '8px' }} /> */}
      <a
        href="https://www.linkedin.com/in/shivanishriramojwar"
        target="_blank"
        rel="noopener noreferrer"
      >
        linkedin.com/in/shivanishriramojwar
      </a>
    </p>
  </header>
);

export default Header;
