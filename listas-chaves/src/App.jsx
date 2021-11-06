import React from 'react';
import './App.css';


const listCustomer = [
  {
    id: 1,
    name: "Gustavo Bitencourt",
    skills: ['React', 'Node', 'CSS']
  },
  {
    id: 2,
    name: "Alfredo Macedo",
    skills: ['CSS']
  },
  {
    id: 3,
    name: "Isabelle Diberto",
    skills: ['React', 'HTML', 'CSS', 'Java']
  },
  {
    id: 4,
    name: "José Matos",
    skills: ['CSS', 'JavaScript']
  }
]

function App() {

  const renderCustomer = (customer, index) => {
    const handleClick = (e, id) => {
      console.log('deletar cliente')
      alert(`Id do cliente: ${customer.id}`)
    }
    return (  

      <div key={ `customer-${customer.id}`}>
        <li>{ customer.name} <button onClick={(e) => handleClick(e, customer.id)}>Deletar Cliente</button></li>
        { customer.skills.map(renderSkills) }
      </div>
    )
  }
  //retorno implicito
  const renderSkills = (skill, index) => {
    return (
      <div key={`skill-${index}`}>      
          <li style={{color: 'green'}}>{skill}</li>
      </div>
    )
  }
  

  return (
    
    <>
      <div>
        <p>Digital Innovation</p>
        <p>Reactzin</p>
        <div>
          <ul>
            {listCustomer.map(renderCustomer)}
            </ul>
        </div>
      </div>
    </>
  );
}

export default App;