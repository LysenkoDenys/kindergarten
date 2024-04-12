import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

const getTheme = () => {
  const theme = localStorage.getItem('theme');
  if (!theme) {
    // Default theme is taken as light-theme
    localStorage.setItem('theme', false);
    return false;
  } else {
    if (theme === 'false') {
      document.body.style.backgroundColor = 'white';
    } else {
      document.body.style.backgroundColor = 'black';
    }
    return theme === 'true' ? true : false;
  }
};

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(getTheme());

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    localStorage.setItem('theme', !darkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
