import React from 'react';

function App() {

  const onSubmit = () => {
    alert('submitted');
  };

  const onKeyUp = (event) => {
    if(event.keyCode === 13) {
      onSubmit();
    } 
    console.log('key up');
  };
 
  return (
    <div className='App'>
      <input onKeyUp={onKeyUp} />
      <button onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default App;
