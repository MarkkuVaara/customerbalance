
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
          <Link to="/">Front page</Link>
          <Link to="/account">Current account transactions</Link>
          <Link to="/accounts">Accounts</Link>
          <Link to="/loans">Loans</Link>
          <Link to="/personalinfo">Personal info</Link>
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<div className="balances">
              <h3>FRONT PAGE</h3>
            </div>} />
            <Route path="/account" element={<div className="balances">
              <Balancetable balance={balance}/>
            </div>} />
            <Route path="/accounts" element={<div className="balances">
              <Accounts />
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
