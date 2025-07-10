import React from 'react';

// const experienceData = [
//   {
//     title: 'Executive Front-End Developer',
//     company: 'Furtados High Music Pvt. Ltd, Mumbai',
//     duration: 'May 2021 – October 2024',
//   },
// ];

// const projectsData = [
//   {
//     title: 'Online Class Management System',
//     technologies: 'React JS, Next JS, NPM, Google Analytics',
//     description: [
//       'Integrated Google Analytics, improving SEO performance by 90% and increasing user engagement metrics by 50%.',
//       'Collaborated with designers to create user-friendly landing pages, reducing the bounce rate by 30%.',
//     ],
//   },
//   {
//     title: 'FSM Learnbuddy Management System',
//     technologies: 'React JS, HTML5, CSS3, Material UI, Tailwind CSS',
//     description: [
//       'Implemented secure login authentication, reducing unauthorized access by 95%.',
//       'Enhanced content accessibility by 40% and optimized page load times to under 2 seconds.',
//     ],
//   },
//   {
//     title: 'Teacher Online Class Management System',
//     technologies: 'React JS, Redux, HTML5, CSS3, Material UI, Tailwind CSS',
//     description: [
//       'Developed real-time chat functionality, boosting communication efficiency by 60%.',
//       'Designed a user-centric teacher portal interface, reducing navigation time by 25%.',
//     ],
//   },
//   {
//     title: 'Open Music Sheet Display',
//     technologies: 'HTML5, CSS3, Bootstrap, JavaScript, TypeScript',
//     description: [
//       'Added interactive features for annotating, playback, and recording, increasing user interaction by 40%.',
//     ],
//   },
//   {
//     title: 'FSM Buddy Mobile App',
//     technologies: 'React-Native, Redux, Android Studio, Firebase',
//     description: [
//       'Built a chat application using Socket.io for real-time messaging.',
//       'Deployed multiple Android apps on Google Play Store with optimized navigation and API integrations.',
//     ],
//   },
// ];


// const combinedData = [
//   {
//     company: 'Furtados High Music Pvt. Ltd, Mumbai',
//     title: 'Executive Front-End Developer',
//     duration: 'May 2021 – October 2024',
//     projects: [
//       {
//         title: 'Online Class Management System',
//         technologies: 'React JS, Next JS, NPM, Google Analytics',
//         description: [
//           'Integrated Google Analytics, improving SEO performance by 90% and increasing user engagement metrics by 50%.',
//           'Collaborated with designers to create user-friendly landing pages, reducing the bounce rate by 30%.',
//         ],
//       },
//       {
//         title: 'FSM Learnbuddy Management System',
//         technologies: 'React JS, HTML5, CSS3, Material UI, Tailwind CSS',
//         description: [
//           'Implemented secure login authentication, reducing unauthorized access by 95%.',
//           'Enhanced content accessibility by 40% and optimized page load times to under 2 seconds.',
//         ],
//       },
//       {
//         title: 'Teacher Online Class Management System',
//         technologies: 'React JS, Redux, HTML5, CSS3, Material UI, Tailwind CSS',
//         description: [
//           'Developed real-time chat functionality, boosting communication efficiency by 60%.',
//           'Designed a user-centric teacher portal interface, reducing navigation time by 25%.',
//         ],
//       },
//       {
//         title: 'Open Music Sheet Display',
//         technologies: 'HTML5, CSS3, Bootstrap, JavaScript, TypeScript',
//         description: [
//           'Added interactive features for annotating, playback, and recording, increasing user interaction by 40%.',
//         ],
//       },
//     ],
//   },
//   {
//     company: 'NxtGen Cloud and Data Center',
//     title: 'Senior Executive Full Stack Developer',
//     duration: 'Jan 2025 – Current',
//     projects: [
//      {
//   title: 'NextGen Website',
//   technologies: 'React, Tailwind CSS, Vite',
//   description: [
//     'Developed a fully responsive static website using React and Vite, ensuring fast performance and optimized build.',
//     'Utilized Tailwind CSS for utility-first, clean, and scalable UI styling across all components.',
//     'Designed and implemented reusable React components to maintain consistency and improve development efficiency.',
     
//   ],
// },
//      {
//   title: 'Speed Cloud 2.0',
//   technologies: 'React, Tailwind CSS, Vite, shadcn Ui, hooks',
// description: [
//     'Built a fully dynamic and responsive cloud platform using React and Vite, enabling users to manage AI/processor instances in real time.',
//     'Integrated RESTful APIs for user management, project tracking, ticketing systems, and resource provisioning.',
//     'Connected payment gateways via secure APIs to handle subscriptions, billing history, and invoice generation.',
//     'Developed modular and reusable UI components using ShadCN UI and Tailwind CSS to ensure design consistency and scalability.',
//     'Implemented secure authentication with token-based API calls and role-based access control.',
//     'Enabled users to upload and share billing files, manage support tickets, and monitor AI instance usage via dynamic dashboards.',
//     'Collaborated with AI and backend teams to integrate intelligent APIs for performance insights and automated provisioning of cloud resources.',
//     'implemented React Query’s useMutation to handle form submissions and data mutations efficiently with built-in loading and error states.'
//   ],
// }

//     ],
//   },
// ];

 const combinedData = [
  {
    title: 'Senior Executive Full Stack Developer',
    company: 'NxtGen Cloud Technologies Private Limited',
    duration: 'Jan 2025 – Present',
    description: [
      'Developed and launched the official website (nxtgen.com) with responsive design and optimized performance.',
      'Built Speed Cloud 2.0 platform for real-time AI/processor instance management.',
      'Integrated secure APIs for authentication, billing, and support ticketing systems.',
      'Created reusable components and dashboards using Tailwind CSS and ShadCN UI.',
      'Implemented role-based access, React Query, and collaborated with backend teams for cloud resource provisioning.'
    ]
  },
  {
    title: 'Executive Front-End Developer',
    company: 'Furtados High Music Pvt. Ltd, Mumbai',
    duration: 'May 2021 – Oct 2024',
    description: [
      'Integrated Google Analytics, boosting SEO visibility by 90% and user engagement by 50%.',
      'Built responsive landing pages with designers, reducing bounce rate by 30%.',
      'Implemented secure authentication, cutting unauthorized access by 95%.',
      'Developed tools such as real-time chat, dashboards, and interactive music features.',
      'Optimized load times under 2 seconds and improved accessibility by 40%.'
    ]
  }
];




const ExperienceProjects = () => {
  return (
    <div className="experience-projects">
  <section>
    <h2>Professional Experience</h2>

    {combinedData.map((job, index) => (
      <div key={index} className="job" style={{ marginBottom: '25px' }}>
        <h3 style={{ margin: '0' }}>{job.title}</h3>
        <p style={{ margin: '0' }}>{job.company}</p>
        <p style={{ fontWeight: 'bold' }}>{job.duration}</p>

        <ul style={{ margin: '10px 0' }}>
          {job.description.map((item, idx) => (
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

