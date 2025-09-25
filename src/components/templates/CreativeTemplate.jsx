import React from "react";

const CreativeTemplate = ({ formData = {} }) => {
  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold drop-shadow-md">
        {formData.name || "Your Name"}
      </h1>
      <p className="italic">{formData.email || "you@example.com"}</p>

      <section className="mt-6">
        <h2 className="text-2xl font-bold">🎓 Education</h2>
        <p>{formData.education || "Education goes here"}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-bold">💡 Skills</h2>
        <p>{formData.skills || "Skills go here"}</p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-bold">💼 Experience</h2>
        <p>{formData.experience || "Experience goes here"}</p>
      </section>
    </div>
  );
};

export default CreativeTemplate;
