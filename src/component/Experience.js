import React from 'react';

const experienceData = [
  {
    title: 'Executive Front-End Developer',
    company: 'Furtados High Music Pvt. Ltd, Mumbai',
    duration: 'May 2021 – October 2024',
  },
];

const projectsData = [
  {
    title: 'Online Class Management System',
    technologies: 'React JS, Next JS, NPM, Google Analytics',
    description: [
      'Integrated Google Analytics, improving SEO performance by 90% and increasing user engagement metrics by 50%.',
      'Collaborated with designers to create user-friendly landing pages, reducing the bounce rate by 30%.',
    ],
  },
  {
    title: 'FSM Learnbuddy Management System',
    technologies: 'React JS, HTML5, CSS3, Material UI, Tailwind CSS',
    description: [
      'Implemented secure login authentication, reducing unauthorized access by 95%.',
      'Enhanced content accessibility by 40% and optimized page load times to under 2 seconds.',
    ],
  },
  {
    title: 'Teacher Online Class Management System',
    technologies: 'React JS, Redux, HTML5, CSS3, Material UI, Tailwind CSS',
    description: [
      'Developed real-time chat functionality, boosting communication efficiency by 60%.',
      'Designed a user-centric teacher portal interface, reducing navigation time by 25%.',
    ],
  },
  {
    title: 'Open Music Sheet Display',
    technologies: 'HTML5, CSS3, Bootstrap, JavaScript, TypeScript',
    description: [
      'Added interactive features for annotating, playback, and recording, increasing user interaction by 40%.',
    ],
  },
  {
    title: 'FSM Buddy Mobile App',
    technologies: 'React-Native, Redux, Android Studio, Firebase',
    description: [
      'Built a chat application using Socket.io for real-time messaging.',
      'Deployed multiple Android apps on Google Play Store with optimized navigation and API integrations.',
    ],
  },
];

const ExperienceProjects = () => {
  return (
    <div className="experience-projects">
      <section>
        <h2>Professional Experience</h2>
        {experienceData.map((exp, index) => (
          <div key={index} className="job">
            <h3 style={{ margin: '0' }}>{exp.company}</h3>
            <div className="company-duration">
              <p style={{ margin: '0' }}>{exp.title}</p>
              <p style={{ fontWeight: 'bold' }}>{exp.duration}</p>
            </div>
          </div>
        ))}

        {projectsData.map((project, index) => (
          <div key={index} className="project" style={{ marginTop: '10px' }}>
            <h4 style={{ margin: '0px' }}>{project.title}</h4>
           {/* <p style={{ margin: '5px 0', fontWeight: 'bold', fontSize: '14px' }}>
              <strong>Technologies Used:</strong> {project.technologies}
            </p> */}
            <ul style={{ margin: '10px 0' }}>
              {project.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ExperienceProjects;
