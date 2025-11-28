import React from 'react';
import Counter from './Counter';
import Timer from './Timer';
import { ThemeProvider, ThemeToggle } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: 20, fontFamily: 'Arial' }}>
        <h1>TP React – Hooks de base</h1>
        <Counter />
        <Timer />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
