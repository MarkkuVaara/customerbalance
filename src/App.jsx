
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom';

import Title from './components/Title';
import Balancetable from './components/Balancetable';
import Accounts from './components/Accounts';
import Loans from './components/Loans';
import Personalinfo from './components/Personalinfo';

import Balanceservice from './services/Balances';

const App = () => {

  const [balance, setBalance] = useState([]);
  const [account, setAccount] = useState("debit 95000120837");

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
      <Router>
        <div className="banner">
          <Link to="/"><h3>Etusivu</h3></Link>
          <Link to="/account"><h3>{account}</h3></Link>
          <Link to="/accounts"><h3>Tilit</h3></Link>
          <Link to="/loans"><h3>Lainat</h3></Link>
          <Link to="/personalinfo"><h3>Henkilötiedot</h3></Link>
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<div className="balances">
              <h3>ETUSIVU</h3>
            </div>} />
            <Route path="/account" element={<div className="balances">
              <h3>{account}</h3>
              <Balancetable balance={balance}/>
            </div>} />
            <Route path="/accounts" element={<div className="balances">
              <Accounts />
              <button onClick={() => setAccount("debit 95000120837")}>debit 95000120837</button>
              <button onClick={() => setAccount("credit 95000110010")}>credit 95000110010</button>
            </div>} />
            <Route path="/loans" element={<div className="balances">
              <Loans />
            </div>} />
            <Route path="/personalinfo" element={<div className="balances">
              <Personalinfo />
            </div>} />
          </Routes>
        </div>
      </Router>
    </div>

)};

export default App;
