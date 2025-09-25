import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import ClassicTemplate from "./templates/ClassicTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";
import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

const ResumePreview = () => {
  const location = useLocation();
  const { formData, selectedTemplate } = location.state || {};
  const resumeRef = useRef();

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "classic":
        return <ClassicTemplate formData={formData} />;
      case "modern":
        return <ModernTemplate formData={formData} />;
      case "minimal":
        return <MinimalTemplate formData={formData} />;
      case "creative":
        return <CreativeTemplate formData={formData} />;
      default:
        return <p>No template selected</p>;
    }
  };

  
const handleDownload = () => {
  const node = resumeRef.current;

  toPng(node, { cacheBust: true, quality: 1 })
    .then((imgData) => {
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      const margin = 10; // mm margin around content
      const usableWidth = pdfWidth - margin * 2;
      const usableHeight = pdfHeight - margin * 2;

      const img = new Image();
      img.src = imgData;
      img.onload = () => {
        const ratio = Math.min(usableWidth / img.width, usableHeight / img.height);
        const finalWidth = img.width * ratio;
        const finalHeight = img.height * ratio;

        const x = (pdfWidth - finalWidth) / 2;
        const y = (pdfHeight - finalHeight) / 2;

        pdf.addImage(imgData, "PNG", x, y, finalWidth, finalHeight);
        pdf.save("resume.pdf");
      };
    })
    .catch((err) => console.error("Error generating PDF:", err));
};



  return (
    <div className="min-h-screen p-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Resume Preview</h2>
      <div
        ref={resumeRef}
        className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto"
      >
        {renderTemplate()}
      </div>

      {/* Download Button */}
      <div className="text-center mt-6">
        <button
          onClick={handleDownload}
          className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
        >
          Download as PDF
        </button>
      </div>
    </div>
  );
};

export default ResumePreview;
