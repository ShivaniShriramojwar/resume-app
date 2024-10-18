import React from 'react';

const Education = () => (
  <section  >
    <h2>Education</h2>
    <ul style={{ listStyleType: 'none', padding: '0' }}>
      <li style={{ marginBottom: '15px' }}>
        <h3>Master's in Computer Applications</h3>
        <p style={{marginTop:"-10px"}}>
          Government College of Engineering, Karad, 2021<br />
          {/* CGPA: 7.5 */}
        </p>
      </li>
      <li>
        <h3>Bachelor of Science (Computer Science)</h3>
        <p style={{marginTop:"-10px"}}>
          Janata Mahavidyalaya, Chandrapur, 2017
        </p>
      </li>
    </ul>
  </section>
);

export default Education;
