import React from "react";

const ModernTemplate = ({ formData = {} }) => {
  return (
    <div className="max-w-3xl mx-auto bg-gray-900 text-white shadow-lg rounded-lg p-8">
      <h1 className="text-4xl font-extrabold">{formData.name || "Your Name"}</h1>
      <p className="text-gray-300">{formData.email || "you@example.com"}</p>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-1">Education</h2>
        <p>{formData.education || "Education goes here"}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-1">Skills</h2>
        <p>{formData.skills || "Skills go here"}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold border-b border-gray-600 pb-1">Experience</h2>
        <p>{formData.experience || "Experience goes here"}</p>
      </section>
    </div>
  );
};

export default ModernTemplate;
