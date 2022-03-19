import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [kossie, setKossie] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count, kossie]);
  const increment = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('first rendering')
  }, []);

  return (
    <div className='App'>
      <h1>Kossie Code</h1>
      <button onClick={increment}>Click</button>
      <button onClick={() => setKossie(kossie + 1)}>Click1</button>
    </div>
  );
}

export default App;
