import React from 'react';
import Customers from './components/Customers/Customer'
import Button from './components/Button/Button'
import './App.css';




function App() {

  const renderCustomer = (customer, index) => {
    const handleClick = (id) => {
      console.log('deletar cliente')
      alert(`Id do cliente: ${customer.id}`)
    }
    return (  

      <div key={ `customer-${customer.id}`}>

        <li>{ customer.name}<Button onClick={() => handleClick(customer.id)}>Deleter Cliente</Button></li>
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
            {Customers.map(renderCustomer)}
            </ul>
        </div>
      </div>
    </>
  );
}

export default App;