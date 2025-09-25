import React, { useState } from "react";
import ClassicTemplate from "./templates/ClassicTemplate";
import ModernTemplate from "./templates/ModernTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";
import { useNavigate } from "react-router-dom";

const TemplateSelection = ({ formData, onTemplateSelect, onNext }) => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const templates = [
    { id: "classic", name: "Classic", component: <ClassicTemplate formData={formData} /> },
    { id: "modern", name: "Modern", component: <ModernTemplate formData={formData} /> },
    { id: "minimal", name: "Minimal", component: <MinimalTemplate formData={formData} /> },
    { id: "creative", name: "Creative", component: <CreativeTemplate formData={formData} /> },
  ];

  const handleNext = () => {
    if (selected) {
      navigate("/preview", { state: { formData, selectedTemplate: selected } });
    } else {
      alert("Please select a template first!");
    }
  };

  return (
    <div className="p-8 min-h-screen flex flex-col items-center">
      <h2 className="text-2xl font-bold text-center mb-6">Choose a Resume Template</h2>

      {/* Templates Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        {templates.map((tpl) => (
          <div
            key={tpl.id}
            className={`cursor-pointer border rounded-lg overflow-hidden shadow-md p-4 transition ${
              selected === tpl.id ? "border-purple-600 ring-2 ring-purple-400" : "border-gray-200"
            }`}
            onClick={() => {
              setSelected(tpl.id);
              onTemplateSelect(tpl);
            }}
          >
            <div className="h-72 overflow-auto bg-white">{tpl.component}</div>
            <p className="text-center mt-2 font-semibold">{tpl.name}</p>
          </div>
        ))}
      </div>

      {/* Next Button */}
      <div className="mt-8">
        <button
          disabled={!selected}
          onClick={handleNext}
          className={`px-6 py-3 rounded-lg font-semibold shadow-md transition ${
            selected
              ? "bg-blue-600 text-white hover:bg-blue-700 "
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Next 
        </button>
      </div>
    </div>
  );
};

export default TemplateSelection;
