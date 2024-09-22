import React, { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const ThemeTogle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded focus:outline-none dark:text-white"
    >
      {theme === "light" ? (
        <FaMoon size={"20px"} color="red" />
      ) : (
        <FaSun size={"20px"} color="red" />
      )}
    </button>
  );
};

export default ThemeTogle;
