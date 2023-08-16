
import React, { useState, useEffect } from 'react';

import Title from './components/Title';
import Banner from './components/Banner';
import Balancetable from './components/Balancetable';
import Balanceservice from './services/Balances';

const App = () => {

  const [balance, setBalance] = useState([]);

  useEffect(() => {
    console.log('Fetching..');
    Balanceservice
      .getAll()
      .then(response => {
        console.log('Balance fetched..');
        setBalance(response.data);
      });
  }, []);

  return (

    <div className="mainapp">
      <Title />
      <Banner />
      <div className="main">
        <div className="balances">
          <Balancetable balance={balance}/>
        </div>
      </div>
    </div>

)};

export default App;
