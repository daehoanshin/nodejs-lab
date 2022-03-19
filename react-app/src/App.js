import React, { useState } from 'react';

function App() {

  const [text, setText] = useState('Kossie');
  const onSubmit = () => {
    alert('submitted');
  };

  const onKeyUp = (event) => {
    if(event.keyCode === 13) {
      onSubmit();
    } 
    console.log('key up');
  };

  const updateText = () => {
    // text = 'Coder';
    setText('Coder');
    console.log(text);
  }
  console.log(text);
  return (
    <div className='App'>
      <input onKeyUp={onKeyUp} />
      <button onClick={onSubmit}>
        Submit
      </button>

      <br /> <br />

      <span>{text}</span>
      <button onClick={updateText}>Update</button>
    </div>
  );
}

export default App;
