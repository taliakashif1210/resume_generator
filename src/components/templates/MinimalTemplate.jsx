import React from "react";

const MinimalTemplate = ({ formData = {} }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white text-gray-900 p-10 shadow-md border border-gray-200 rounded-lg">
      {/* Header */}
      <div className="text-center border-b border-gray-300 pb-4 mb-6">
        <h1 className="text-3xl font-extrabold tracking-wide text-gray-800">
          {formData.name || "Your Name"}
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          {formData.email || "you@example.com"}
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-6">
        {/* Education */}
        <section>
          <h2 className="text-lg font-semibold text-blue-700 border-b border-gray-200 pb-1 mb-2">
            Education
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {formData.education || "Education details go here"}
          </p>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-lg font-semibold text-blue-700 border-b border-gray-200 pb-1 mb-2">
            Skills
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {(formData.skills?.split(",") || ["Skill 1", "Skill 2"]).map(
              (skill, index) => (
                <li key={index}>{skill.trim()}</li>
              )
            )}
          </ul>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-lg font-semibold text-blue-700 border-b border-gray-200 pb-1 mb-2">
            Experience
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {formData.experience || "Experience details go here"}
          </p>
        </section>
      </div>
    </div>
  );
};

export default MinimalTemplate;
