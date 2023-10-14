
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
import Frontpage from './components/Frontpage';

const App = () => {

  const [balance, setBalance] = useState([]);
  const [account, setAccount] = useState("KÄYTTÖTILI 95000120837");

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
          <div className="link">
            <Link to="/" style={{ textDecoration: 'none' }}><h3>Etusivu</h3></Link>
          </div>
          <div className="link">
            <Link to="/account" style={{ textDecoration: 'none' }}><h3>{account}</h3></Link>
          </div>
          <div className="link">
            <Link to="/accounts" style={{ textDecoration: 'none' }}><h3>Tilit</h3></Link>
          </div>
          <div className="link">
            <Link to="/loans" style={{ textDecoration: 'none' }}><h3>Lainat</h3></Link>
          </div>
          <div className="link">
            <Link to="/personalinfo" style={{ textDecoration: 'none' }}><h3>Henkilötiedot</h3></Link>
          </div>
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<div className="balances">
              <Frontpage />
            </div>} />
            <Route path="/account" element={<div className="balances">
              <h3>{account}</h3>
              <Balancetable balance={balance}/>
            </div>} />
            <Route path="/accounts" element={<div className="balances">
              <Accounts />
              <button onClick={() => setAccount("KÄYTTÖTILI 95000120837")}>KÄYTTÖTILI 95000120837</button>
              <br />
              <button onClick={() => setAccount("LAINATILI 95000110010")}>LAINATILI 95000110010</button>
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
