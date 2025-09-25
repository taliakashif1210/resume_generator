import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ResumeForm from "./components/ResumeForm";
import TemplateSelection from "./components/TemplateSelection";
import ResumePreview from "./components/ResumePreview";
import { motion } from "framer-motion";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const [resumeData, setResumeData] = useState({});
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          theme === "light" ? "bg-[#F1F8FB] text-black" : "bg-gray-800 text-white"
        }`}
      >
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />

            <Route
              path="/form"
              element={<ResumeForm onFormChange={setResumeData} />}
            />

            <Route
              path="/templates"
              element={
                <TemplateSelection
                  formData={resumeData}
                  selectedTemplate={selectedTemplate}
                  setSelectedTemplate={setSelectedTemplate}
                />
              }
            />

            <Route
              path="/preview"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="p-6"
                >
                  <ResumePreview
                    resumeData={resumeData}
                    template={selectedTemplate}
                  />
                </motion.div>
              }
            />
          </Routes>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
