import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Icon Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-full mr-4 bg-white text-black shadow hover:bg-gray-100"
      >
        {theme === "light" ? <FaSun size={18} /> : <FaMoon size={18} />}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <ul className="py-1 text-sm text-black">
            <li>
              <button
                onClick={() => {
                  setTheme("light");
                  setOpen(false);
                }}
                className={`flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-white hover:text-black ${
                  theme === "light" ? "font-semibold bg-white text-black" : ""
                }`}
              >
                <FaSun /> Light
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setTheme("dark");
                  setOpen(false);
                }}
                className={`flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-white hover:text-black ${
                  theme === "dark" ? "font-semibold bg-white text-black" : ""
                }`}
              >
                <FaMoon /> Dark
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
