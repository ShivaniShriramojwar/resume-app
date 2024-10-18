import React from 'react';
import Header from './Header';

import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Certifications from './Certifications';
import Projects from './Projects';
import Development from './Development';
import References from './Reference';
import AwardsAchievements from './AwardsAchievements'
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <Header />
      <Skills />
      <Experience />
      <AwardsAchievements />
      <Education />

      <Certifications />
      <Projects />
      <Development />
      <References />
    </div>
  );
};

export default Resume;
