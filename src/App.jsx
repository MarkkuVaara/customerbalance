
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

    const newFirstname = event.target.firstname.value;
    const newMiddlename = event.target.middlename.value;
    const newLastname = event.target.lastname.value;
    const newAddress = event.target.address.value;
    const newPostnumber = event.target.postnumber.value;
    const newCity = event.target.city.value;
    const newEmail = event.target.email.value;
    const newPhone = event.target.phone.value;

    setMessage("Muutettu");
    setSubmessage(<><h3>seuraavat käyttäjän {user.firstname} {user.middlename} {user.lastname} tiedot.</h3>
        {newFirstname && <p>Etunimi: {newFirstname}</p>}
        {newMiddlename && <p>Toinen nimi: {newMiddlename}</p>}
        {newLastname && <p>Sukunimi: {newLastname}</p>}
        {newAddress && <p>Osoite: {newAddress}</p>}
        {newPostnumber && <p>Postinumero: {newPostnumber}</p>}
        {newCity && <p>Postitoimipaikka: {newCity}</p>}
        {newEmail && <p>Sähköposti: {newEmail}</p>}
        {newPhone && <p>Puhelinnumero: {newPhone}</p>}</>);

    if (newFirstname) {user.firstname = newFirstname;}
    if (newMiddlename) {user.middlename = newMiddlename;}
    if (newLastname) {user.lastname = newLastname;}
    if (newAddress) {user.address = newAddress;}
    if (newPostnumber) {user.postnumber = newPostnumber;}
    if (newCity) {user.city = newCity;}
    if (newEmail) {user.email = newEmail;}
    if (newPhone) {user.phone = newPhone;}

    setTimeout(() => {
      setMessage(null);
      setSubmessage(null);
    }, 5000);

  };

  const cancelForm = () => {
    setMessage("Poistutaan ilman muutoksia.");
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


  /* Taking a loan */

  const takeLoan = (event) => {
    const loantype = event.target.innerText;

    setMessage(loantype);
    setSubmessage(<Loaning loantype={loantype} loansubmit={loansubmit} cancelForm={cancelForm}/>);

  };

  const loansubmit = (event) => {
    event.preventDefault();

    const loan = event.target.loan.value;
    const guarantee = event.target.insurance.value;
    const signature = event.target.signature.value;

    if (!loan || !guarantee || !signature) {
      setMessage("Antamasi tiedot ovat puutteellisia.");
      setSubmessage(<p>Yritä uudelleen.</p>);
    } else {
      setMessage("Lainahakemus lähetetty.");
      setSubmessage(<p>Otamme sinuun yhteyttä, kun lainasi on hyväksytty.</p>);
    };

    setTimeout(() => {
      setMessage(null);
      setSubmessage(null);
    }, 3000);
  }


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
