
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
import Frontpage from './components/Frontpage';

import Loaning from './components/Loaning';
import Infoform from './components/Infoform';
import Password from './components/Password';

import Balanceservice from './services/Balances';

const App = (props) => {

  const [balance, setBalance] = useState(props.transactions);
  const [accounts, setAccounts] = useState(props.accounts);
  const [account, setAccount] = useState(accounts[0]);
  const [users, setUsers] = useState(props.users);

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


  /* Logging in and out */

  const logout = () => {
    const confirmation = window.confirm("Haluatko kirjautua ulos?");
    if (confirmation) {
        setMessage("Kirjaudun ulos...");
        setSubmessage(<p>Muista sulkea selain uloskirjautumisen jälkeen.</p>)
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
    setUser(users[1]);
  };


  /* Editing personal information */

  const editInfo = () => {
    setMessage(<h3>{user.firstname} {user.middlename} {user.lastname}</h3>);
    setSubmessage(<Infoform user={user} editInformation={editInformation} cancelForm={cancelForm} />);
  };

  const editInformation = (event) => {
    event.preventDefault();

    setMessage("Muutettu");
    setSubmessage(<><h3>seuraavat käyttäjän {user.firstname} {user.middlename} {user.lastname} tiedot.</h3>
        <p>Osoite: {event.target.address.value}</p>
        <p>Sähköposti: {event.target.email.value}</p>
        <p>Puhelinnumero: {event.target.phone.value}</p></>);

    setTimeout(() => {
      setMessage(null);
      setSubmessage(null);
    }, 5000);

  };

  const cancelForm = () => {
    setMessage("Poistutaan muuttamatta käyttäjän tietoja.");
    setSubmessage(null);

    setTimeout(() => {
      setMessage(null);
      setSubmessage(null);
    }, 3000);
  };


  /* Changing password */

  const editPassword = () => {
    setMessage(<h3>Muutetaan käyttäjän {user.firstname} {user.middlename} {user.lastname} salasana</h3>);
    setSubmessage(<Password user={user} changePassword={changePassword} />);

  };

  const changePassword = (event) => {
    event.preventDefault();

    const pword = event.target.password.value;
    const npword = event.target.newpassword.value;
    const npword2 = event.target.newpassword2.value;

    if (pword != user.password) {
      setMessage("Vanha salasana ei täsmää");
      setSubmessage(<p>Salasanaa ei vaihdettu</p>);
    } else if (npword != npword2) {
      setMessage("Virhe syötteessä 'uusi salasana'");
      setSubmessage(<p>Salasanaa ei vaihdettu</p>);
    } else {
      setMessage("Salasana vaihdettu");
      setSubmessage(null);
      setUser((prevState) => {
        return ({
          ...prevState,
          password: npword
        })
      });
    }

    setTimeout(() => {
      setMessage(null);
      setSubmessage(null);
    }, 3000);

  };


  /* Taking loan */

  const takeLoan = (event) => {
    const loantype = event.target.innerText;
    setMessage(loantype);
    setSubmessage(<Loaning loantype={loantype}/>);
    setTimeout(() => {
      setMessage(null);
      setSubmessage(null);
    }, 5000);
  };

  return (

    <div className="mainapp">
      <Title user={user} logout={logout} login={login}/>
      {message &&
        <Popup content={
          <>
            <h3>{message}</h3>
            <div>{submessage}</div>
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
              <Link to="/accounts" style={{ textDecoration: 'none' }}><h3>Tilit</h3></Link>
            </div>
            <div className="link">
              <Link to="/account" style={{ textDecoration: 'none' }}><h3>{account.name}</h3></Link>
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
                <h3>Tilit</h3>
                {accounts.map(account =>
                  <span className="accounts" key={account.id}>
                    <button onClick={() => setAccount(account)}>{account.name}</button>
                  </span>
                )}
                <Accounts />
              </div>} />
              <Route path="/loans" element={<div className="balances">
                <Loans takeLoan={() => takeLoan}/>
              </div>} />
              <Route path="/personalinfo" element={<div className="balances">
                <Personalinfo user={user} editInfo={editInfo} editPassword={editPassword} />
              </div>} />
              </>
            }
          </Routes>
        </div>
      </Router>
    </div>

)};

export default App;
