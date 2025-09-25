import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResumeForm = ({ onFormChange }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    education: "",
    skills: "",
    experience: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    onFormChange(updatedData); // send data to parent
  };

  const handleNext = (e) => {
    e.preventDefault();
    navigate("/templates"); // move to TemplateSelection screen
  };

  return (
    <div className="flex justify-center items-center min-h-screen text-black">
      <div className=" p-8 rounded-lg shadow-lg w-full max-w-2xl bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Enter Your Details
        </h2>

        <form className="space-y-4" onSubmit={handleNext}>
          {/* Name + Email in one row */}
          <div className="flex gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-1/2 px-4 py-2 border rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-1/2 px-4 py-2 border rounded-md"
            />
          </div>

          <textarea
            name="education"
            placeholder="Education"
            value={formData.education}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
          <textarea
            name="skills"
            placeholder="Skills"
            value={formData.skills}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />
          <textarea
            name="experience"
            placeholder="Work Experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
          />

          {/* Next Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Choose Your Template
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResumeForm;
