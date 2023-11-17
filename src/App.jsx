
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom';

import Title from './components/Title';
import Popup from './components/Popup';
import Balancetable from './components/Balancetable';
import Accounts from './components/Accounts';
import Loans from './components/Loans';
import Personalinfo from './components/Personalinfo';

import Balanceservice from './services/Balances';
import Frontpage from './components/Frontpage';

const App = (props) => {

  const [balance, setBalance] = useState(props.account);
  const [account, setAccount] = useState("KÄYTTÖTILI 95000120837");

  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);
  const [submessage, setSubmessage] = useState(null);

  /* useEffect(() => {
    console.log('Fetching..');
    Balanceservice
      .getAll()
      .then(response => {
        console.log('Balance fetched..');
        setBalance(response.data);
      });
  }, []); */

  const logout = () => {
    const confirmation = window.confirm("Haluatko kirjautua ulos?");
    if (confirmation) {
        setMessage("Kirjaudun ulos...");
        setSubmessage("Muista sulkea selain uloskirjautumisen jälkeen.")
        setTimeout(() => {
          setMessage(null);
          setSubmessage(null);
        }, 2000);
        setUser(null);
    }
  };

  const login = () => {
    setMessage("Kirjaudun sisään..");
    setTimeout(() => {
      setMessage(null);
    }, 2000);
    setUser("Markku Vaara");
  };

  const editInfo = () => {
    setMessage("Muokkaan tietoja..");
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const takeLoan = (event) => {
    const loantype = event.target.innerText;
    setMessage(loantype);
    setSubmessage("Otan lainaa..");
    setTimeout(() => {
      setMessage(null);
      setSubmessage(null);
    }, 3000);
  };

  return (

    <div className="mainapp">
      <Title user={user} logout={logout} login={login}/>
      {message &&
        <Popup content={
          <>
            <h3>{message}</h3>
            <p>{submessage}</p>
          </>
        }></Popup>
      }
      <Router>
        <div className="banner">
          <div className="link">
            <Link to="/" style={{ textDecoration: 'none' }}><h3>Etusivu</h3></Link>
          </div>
          {user &&
            <>
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
            </>
          }
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<div className="balances">
              <Frontpage />
            </div>} />
            {user &&
              <>
              <Route path="/account" element={<div className="balances">
                <Balancetable balance={balance} account={account}/>
              </div>} />
              <Route path="/accounts" element={<div className="balances">
                <Accounts />
                <button onClick={() => setAccount("KÄYTTÖTILI 95000120837")}>KÄYTTÖTILI 95000120837</button>
                <br />
                <button onClick={() => setAccount("LAINATILI 95000110010")}>LAINATILI 95000110010</button>
              </div>} />
              <Route path="/loans" element={<div className="balances">
                <Loans takeLoan={() => takeLoan}/>
              </div>} />
              <Route path="/personalinfo" element={<div className="balances">
                <Personalinfo editInfo={editInfo} />
              </div>} />
              </>
            }
          </Routes>
        </div>
      </Router>
    </div>

)};

export default App;
