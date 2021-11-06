import React from 'react';
import './App.css';

function App() {
  
  const name = 'DIO'
  
  const handleChange = (event) => {
    const { value } = event.target;
    console.log(value);
  }

  const showEvents = (e) => {
    console.log("Crickou");
    console.log(e);
    alert(name)
  }
  
  const Button = <button onClick={showEvents} >Mostrar Evento</button>

  return (    
    <>
      <div>
        <p>Digital Innovation</p>
        <p>Reactzin</p>
        <input onChange={handleChange} />
        {Button}
      </div>
    </>
  );
}

export default App;