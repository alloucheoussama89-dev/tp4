import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => clearInterval(interval); // nettoyage
  }, []);

  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Exercice 2 : Timer</h2>
      <p>Temps écoulé : {seconds}s</p>
    </div>
  );
}

export default Timer;
