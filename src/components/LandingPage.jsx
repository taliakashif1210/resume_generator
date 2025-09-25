import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center ">
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold mb-6"
      >
        Build Your Professional Resume
      </motion.h1>

      {/* Animated Subheading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-xl max-w-2xl mb-10"
      >
        Create stunning, job-winning resumes in just a few minutes. Choose a
        template, fill in your details, and download your resume instantly.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/form")}
        className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        Generate Resume
      </motion.button>

      {/* Animated Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl">
        {[
          {
            title: "Easy to Use",
            desc: "Simple form-based input to fill your details quickly.",
          },
          {
            title: "Modern Templates",
            desc: "Choose from multiple pre-designed professional templates.",
          },
          {
            title: "Instant Download",
            desc: "Preview and export your resume to PDF in seconds.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
            className="p-6 bg-white dark:bg-gray-500 rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
