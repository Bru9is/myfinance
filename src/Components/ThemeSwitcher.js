import React, {useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";

function ThemeSwitcher () {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  
  return (
    <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={60}
    />
  );
};

export default ThemeSwitcher