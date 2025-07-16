import React from 'react';


const Header = () => (
//   <header style={{ textAlign: 'center', marginBottom: '20px' }}>
//   <h1 className="responsive-heading">SHIVANI SHRIRAMOJWAR</h1>
//   <p className="contact-info">
//     <span>+91 7020955345</span>
//     <span>
//       <a href="mailto:shriramojwarshivani1997@gmail.com">shivani15bs@gmail.com</a>
//     </span>
//     <a href="https://www.linkedin.com/in/shivanishriramojwar" target="_blank" rel="noopener noreferrer">
//       linkedin.com/in/shivanishriramojwar
//     </a>
//   </p>
// </header>

<div className="resume-header">
      <h1 className="name">SHIVANI SHRIRAMOJWAR</h1>
      <div className="role">
         Full-stack Developer
      </div>
      <p className="contact">
   +91 7020955345 | {" "}
  <a href="mailto:shivani15bs@gmail.com">shivani15bs@gmail.com</a> | {" "}
 <a
  href="https://www.linkedin.com/in/shivanishriramojwar"
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn
</a>

</p>

    </div>

);


export default Header;
