import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = (event) => {
    event.preventDefault();
    alert('submitted');
    console.log(username, password);
  };

  return (
    <div className='App'>
      <form onSubmit={onSubmit}>
        <input 
          placeholder='Username' 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        /><br />
        <input 
          placeholder='Password' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
