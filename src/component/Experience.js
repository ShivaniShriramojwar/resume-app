import React from 'react';

const experienceData = [
  {
    title: 'Executive Front End Developer',
    company: 'Furtados High Music Pvt. Ltd, Mumbai',
    duration: 'May 2021 – October 2024',
    responsibilities: [
      'Designed and developed applications using ReactJS to meet business requirements.',
      'Collaborated with cross-functional teams for successful project delivery.',
      'Developed and maintained technical documentation.',
      'Optimized applications, improving speed and performance by 30%.',
      'Debugged errors and performed routine performance optimizations.',
    ],
  },
];

const projectsData = [
  {
    title: 'Online Class Management System',
    technologies: 'React JS, Next JS, NPM, Google Analytics',
    description: [
      'Integrated Google Analytics and applied SEO best practices, leading to a 90% increase in SEO performance and a 50% improvement in user engagement metrics.',
      'Collaborated with designers to create user-friendly landing pages, resulting in a 30% decrease in bounce rate.',
    ],
  },
  {
    title: 'FSM Learnbuddy Management System',
    technologies: 'React JS, HTML5, CSS3, Material UI, Tailwind CSS',
    description: [
      'Implemented secure login authentication, reducing unauthorized access attempts by 95%.',
      'Implemented backend API integrations that enabled dynamic course mapping, resulting in a 40% increase in content accessibility and decreasing load times to under 2 seconds, significantly enhancing user experience across the platform'
      // 'Integrated backend APIs for dynamic course mapping, improving content accessibility by 40% and reducing load times by 20%.',
    ],
  },
  {
    title: 'Teacher Online Class Management System',
    technologies: 'React JS, Redux, HTML5, CSS3, Material UI, Tailwind CSS',
    description: [
      'Developed chat functionality that increased real-time communication efficiency by 60%.',
      'Designed an intuitive user interface for the teacher portal, enhancing usability and decreasing navigation time by 25%.',
    ],
  },
  {
    title: 'Open Music Sheet Display',
    technologies: 'HTML5, CSS3, Bootstrap, JavaScript, TypeScript',
    description: [
      'Integrated features for annotating, playback, recording, and submitting music recordings, which increased user interaction by 40%.',
    ],
  },
  {
    title: 'FSM Buddy Mobile App',
    technologies: 'React-Native, Redux, Android Studio, Firebase',
    description: [
      'Developed and implemented login authentication systems, managing multiple user types. Built a chat application using Socket.io for real-time communication. Handled complex navigation and API integrations to ensure seamless user experiences. Integrated push notifications to enhance user engagement.Successfully built Android apps and deployed them on the Google Play Store',
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
            <h3 style={{ margin: "0" }}>{exp.company}</h3>
            <div className="company-duration">
              <p style={{ margin: "0" }}>{exp.title}</p>
              <p style={{  fontWeight:"bold" }}>{exp.duration}</p>
            </div>

          </div>
        ))}
           {projectsData.map((project, index) => (
          <div key={index} className="project" style={{ marginTop: "10px" }}>
            <h4 style={{margin: "0px"}} >{project.title}</h4>
            <p style={{ margin: "5px 0", fontWeight:"bold", fontSize: "14px" }}>
              <strong  >Technologies Used:</strong> {project.technologies}
            </p>
            <ul style={{ margin: "10px 0" }}>
              {project.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* <section>
        <h2>Projects</h2>
        {projectsData.map((project, index) => (
          <div key={index} className="project">
            <h4 style={{ margin: "0" }}>{project.title}</h4>
            <p style={{ margin: "5px 0", fontWeight:"bold", fontSize: "14px" }}>
              <strong  >Technologies Used:</strong> {project.technologies}
            </p>
            <ul style={{ margin: "10px 0" }}>
              {project.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section> */}
    </div>
  );
};


export default ExperienceProjects;
