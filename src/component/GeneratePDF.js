import React from "react";
import jsPDF from "jspdf";
import "./Resume.css";
import Header from "./Header";

import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
 import Summary  from "./Summary";
import AwardsAchievements from "./AwardsAchievements";
import ProfessionalExperience from "./ProfessionalExperience";


const GeneratePDF = () => {
  const generatePDF = () => {
    const content = document.querySelector("#resume-content");
    const doc = new jsPDF("p", "pt", [680, 850]); // Width: 700pt, Height: 1000pt

    // const doc = new jsPDF('p', 'pt', 'a4');
    const margin = 20; // Add margin value to ensure content doesn't stick to the edges
    // const margin = 20;
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const fontSize = 16;

    // Calculate content width and position
    const contentWidth = 850; // Adjust based on your content width
    const xPosition = (pageWidth - contentWidth) / 2;

    // Apply styles to the content if needed
    content.style.width = `${contentWidth}px`;
    content.style.margin = `0 auto`;

    doc.html(content, {
      callback: function (pdf) {
        const totalPages = pdf.internal.getNumberOfPages();

        for (let i = 1; i <= totalPages; i++) {
          pdf.setPage(i);
          pdf.setFontSize(10);
          pdf.text(
            `${i} of ${totalPages}`,
            pdf.internal.pageSize.width / 2,
            pdf.internal.pageSize.height - margin,
            {
              align: "center",
            }
          );

          // Add margin at the top of each page except the first one
          if (i > 1) {
            pdf.setPage(i);
            pdf.setFontSize(12);
            pdf.text(" ", margin, margin); // Add margin at the top of the new page
          }
        }

        pdf.save("resume.pdf");

        setTimeout(() => {
          window.location.reload(); // Refresh the page after some time
      }, 2000);
      },
      x: margin,
      y: margin,
      html2canvas: { scale: 0.75, useCORS: true, scrollX: 0, scrollY: -margin },
      autoPaging: true, // Ensure auto paging for content
    });

  };


  return (
    <div>
      <button className="download-btn" onClick={generatePDF}>Download PDF</button>
      <div id="resume-content" className="resume-container">
        <Header />
        <Skills />
        <Summary />
        <ProfessionalExperience />
        {/* <Experience /> */}
        <Education />
        <AwardsAchievements />

      </div>
    </div>
  );
};

export default GeneratePDF;
