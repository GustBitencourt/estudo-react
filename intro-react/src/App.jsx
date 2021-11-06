import React from 'react';
import './App.css';


const buttonA = <button>Histórico cliente</button>;
const buttonB = <button>Cadastrar Cliente</button>;

const hasCustomer = true;

function App() {
  
  const renderShowHistory = () => (
    <div>
        Clique no botão abaixo para visualisar o histórico de clientes        
        {buttonA}
    </div>
  )

  const renderAddCustumer = () => (
    <div>
        Clique abaixo para cadastrar os clientes
        {buttonB}
    </div>
  )

  const customer = "Gustavo Bitencourt";

  const showCustomer = () => {
    if(!hasCustomer) return null;

    return (
      <div>
        <h1>Nome do Cliente: Gustavo Bitencourt</h1>
      </div>
    )
  }
  
  return (
    <>
      <div>
        <p>Digital Innovation</p>
        <p>Reactzin</p>
        {/* Se existir o cliente ele retorna o botão */}
        {hasCustomer ? renderShowHistory() : renderAddCustumer()}
        <div>
          {showCustomer()}
        </div>
      </div>
    </>
  );
}

export default App;
