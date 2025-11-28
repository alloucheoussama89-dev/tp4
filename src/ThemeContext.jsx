import React, { createContext, useContext, useState } from 'react';

// Création du contexte
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Composant pour basculer le thème
export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    padding: '10px',
    marginTop: '10px',
    backgroundColor: theme === 'light' ? '#eee' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Exercice 3 : Thème</h2>
      <p>Thème actuel : {theme}</p>
      <button style={style} onClick={toggleTheme}>Changer le thème</button>
    </div>
  );
}
