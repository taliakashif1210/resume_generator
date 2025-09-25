import React from "react";

const ClassicTemplate = ({ formData = {} }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white text-black shadow-md rounded-lg p-6 border border-gray-300">
      <h1 className="text-3xl font-bold">{formData.name || "Your Name"}</h1>
      <p>{formData.email || "you@example.com"}</p>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Education</h2>
        <p>{formData.education || "Add your education details here"}</p>
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Skills</h2>
        <p>{formData.skills || "Add your skills here"}</p>
      </section>

      <section className="mt-4">
        <h2 className="text-xl font-semibold">Experience</h2>
        <p>{formData.experience || "Add your work experience here"}</p>
      </section>
    </div>
  );
};

export default ClassicTemplate;
