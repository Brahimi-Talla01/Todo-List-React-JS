import { createContext, useContext, useState } from "react";

const ThmeContext = createContext();

export const ThemeContextProvider = ({ children }) => {

      const [darkMode, setDarkMode] = useState(false);

      const toggleDarkMode = () => setDarkMode(prev => !prev);

      return (
            <ThmeContext.Provider value={{ darkMode, toggleDarkMode }} >
                  {children}
            </ThmeContext.Provider>
      )
}

export const useTheme = () => useContext(ThmeContext);

