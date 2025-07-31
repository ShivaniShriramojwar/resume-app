import React from "react";
import Header from "./Header";

const CoverLetter = () => {
  return (
    <div className="min-h-screen bg-[#f4f7fa] p-10 flex flex-col items-center">
      {/* Title */}

      {/* Letter Container */}
      <div className="bg-white w-full max-w-3xl shadow-lg rounded-lg overflow-hidden">
        {/* Blue header strip */}

        <header style={{ textAlign: "center" }}>
          <h1 className="responsive-heading">SHIVANI SHRIRAMOJWAR</h1>
          <div className="role">Full-stack Developer</div>
        </header>

        <p>7020955345</p>
        <p>shivani15bs@gmail.com</p>
        <p>
          <a
            href="https://www.linkedin.com/in/shivanishriramojwar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            linkedin.com/in/shivanishriramojwar
          </a>
        </p>
        <p>
          <strong>Date:</strong> 31<sup>st</sup> July 2025
        </p>

        <p>
          <strong>
            Hiring Manager
            <br />
            Appiness Interactive
          </strong>
        </p>

        <p>
          <strong>Subject:</strong> Application for React Developer Role
        </p>

        {/* Letter Content */}
        <div className="p-8 text-gray-900 leading-relaxed text-[18px] font-sans">
          <p className="mb-4 text-[18px]">Dear Hiring Manager,</p>

          <p className="mb-4 text-[18px] ">
            With a solid background in full-stack JavaScript development and 4
            years of hands-on experience building scalable web applications, I
            am excited to express my interest in the React Developer role at
            Appiness Interactive. My expertise in React.js and JavaScript (ES6+)
            enables me to deliver efficient and high-quality solutions that meet
            both business and user needs.
          </p>

          <p className="mb-4 text-[18px]">
            In my previous roles, I’ve led the development of multiple web
            platforms—ranging from designing RESTful APIs and database schemas
            to implementing responsive front-end interfaces. I’ve worked
            extensively with modern tools and practices including Redux,
            Tailwind CSS, JWT authentication, and Git-based workflows. I have
            strong proficiency in HTML5 and CSS3, including Flexbox, Grid, and
            responsive design. My ability to manage the full development
            lifecycle and resolve performance bottlenecks has consistently
            helped teams deliver robust applications under tight deadlines.
          </p>

          <p className="mb-4 text-[18px]">
            I’m passionate about writing clean, maintainable code and am always
            eager to learn new technologies that improve scalability, security,
            and user experience. I thrive in collaborative environments and take
            pride in translating product visions into working software.
          </p>

          <p className="mb-4 text-[18px]">
            I am excited about the opportunity to bring my experience in
            full-stack development to [Company Name] and contribute to your
            engineering team’s continued success. I’ve attached my resume for
            your review and would welcome the chance to discuss how I can add
            value to your organization.
          </p>

          <p className="mb-4 text-[18px]">
            Thank you for your time and consideration. I look forward to
            speaking with you further.
          </p>

          <p className="mb-4 text-[18px]">Sincerely,</p>
          <p>Shivani Shriramojwar</p>
        </div>
      </div>
    </div>
  );
};

export default CoverLetter;
