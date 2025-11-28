import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Exercice 1 : Compteur</h2>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrémenter</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: 10 }}>
        Décrémenter
      </button>
    </div>
  );
}

export default Counter;
