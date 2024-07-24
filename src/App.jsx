
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom';
import bcrypt from 'bcryptjs';

import Title from './components/Title';
import Popup from './components/Popup';
import Balancetable from './components/Balancetable';
import Accounts from './components/Accounts';
import Loans from './components/Loans';
import Personalinfo from './components/Personalinfo';
import Frontpage from './components/Frontpage';

import Transaction from './components/Transaction';
import Loaning from './components/Loaning';
import Loansubmitting from './components/Loansubmitting';
import Infoform from './components/Infoform';
import Password from './components/Password';
import Billpayment from './components/Billpayment';
import Messagetable from './components/Messagetable';
import Login from './components/Login';
import Logout from './components/Logout';

import Userservice from './services/userservice';
import Loginservice from './services/loginservice';
import Accountservice from './services/accountservice';
import Transactionservice from './services/transactionservice';
import Messageservice from './services/messageservice';
import Predictservice from './services/predictservice';

import ChatComponent from './components/ChatComponent';
import ChatBox from './components/ChatBox';

const App = (props) => {

  const [balance, setBalance] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [account, setAccount] = useState(null);

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const [message, setMessage] = useState(null);
  const [submessage, setSubmessage] = useState(null);
  const [circles, setCircles] = useState(true);

  const [loanapplications, setLoanapplications] = useState([]);
  const [messages, setMessages] = useState([]);
  const [usermessages, setUsermessages] = useState([]);
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);


  useEffect(() => {

    Userservice
      .getAll()
      .then(response => {
        console.log('Users fetched..');
        setUsers(response.data);
      });

    Accountservice
      .getAll()
      .then(response => {
        console.log('Accounts fetched..');
        setAccounts(response.data);
    });

    Transactionservice
      .getAll()
      .then(response => {
        console.log('Transactions fetched..');
        setBalance(response.data.sort( function(a, b){
          let x = new Date(a.date);
          let y = new Date(b.date);
          return y-x;
          }));
    });

    Messageservice
      .getAll()
      .then(response => {
        console.log('Messages fetched..');
        setMessages(response.data.sort( function(a, b){
          let x = new Date(a.date);
          let y = new Date(b.date);
          return y-x;
          }));
    });
  
  }, []);

  useEffect(() => {
    console.log('Accounts updated:', accounts);
  }, [accounts]);

  useEffect(() => {
    console.log('Transactions updated:', balance);
  }, [balance]);

  useEffect(() => {
    console.log('Messages updated:', messages);
  }, [messages]);


  /* Logging in and out */

  const logout = () => {

    setCircles(false);
    setMessage("Haluatko kirjautua ulos?");
    setSubmessage(<Logout loggingout={loggingout} closeWindow={closeWindow} />);

  };

  const loggingout = async (event) => {
    event.preventDefault();

    setCircles(true);
    setMessage("Kirjaudun ulos...");
    setSubmessage(<p>Muista sulkea selain uloskirjautumisen jälkeen.</p>)
    setTimeout(() => {
      setMessage(null);
      setSubmessage(null);
    }, 2000);
    setUser(null);
    setAccount(null);

  };

  const login = () => {

    setCircles(false);
    setMessage("Kirjaudu sisään verkkopankkiin:");
    setSubmessage(<Login loggingin={loggingin} closeWindow={closeWindow} />);

  };

  const loggingin = async (event) => {
    event.preventDefault();

    const usernumber = event.target.user.value;
    const password = event.target.password.value;

    try {
      const user = await Loginservice.login({
        usernumber, password,
      });
      const loginuser = users.filter(userb => userb.usernumber == user.usernumber);
      setUser(loginuser[0]);

      const usermssgs = messages.filter(message => message.userId == loginuser[0].id);

      setUsermessages(usermssgs);

      Userservice.setToken(user.token);
      Accountservice.setToken(user.token);
      Messageservice.setToken(user.token);
      Transactionservice.setToken(user.token);

      setCircles(true);
      setMessage("Kirjautuminen suoritettu!");
      setSubmessage(null);
    } catch (exception) {
      setCircles(true);
      setMessage("Väärä tunnus tai salasana.");
      setSubmessage(null);
    }

    setTimeout(() => {
      setMessage(null);
      setSubmessage(null);
    }, 2000);

  }


  /* Editing personal information */

  const editInfo = () => {
    setCircles(null);
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

    const newUser = { };

    if (newFirstname) {newUser.firstname = newFirstname;}
    if (newMiddlename) {newUser.middlename = newMiddlename;}
    if (newLastname) {newUser.lastname = newLastname;}
    if (newAddress) {newUser.address = newAddress;}
    if (newPostnumber) {newUser.postnumber = newPostnumber;}
    if (newCity) {newUser.city = newCity;}
    if (newEmail) {newUser.email = newEmail;}
    if (newPhone) {newUser.phone = newPhone;}

    Userservice
      .update(user.id, newUser)
      .then(response => {

        console.log(response.data);
        if (newFirstname) {user.firstname = newFirstname;}
        if (newMiddlename) {user.middlename = newMiddlename;}
        if (newLastname) {user.lastname = newLastname;}
        if (newAddress) {user.address = newAddress;}
        if (newPostnumber) {user.postnumber = newPostnumber;}
        if (newCity) {user.city = newCity;}
        if (newEmail) {user.email = newEmail;}
        if (newPhone) {user.phone = newPhone;}

        setCircles(true);
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

      })
      .catch(error => {
        setCircles(true);
        setMessage("Virhe muutettaessa käyttäjätietoja");
        setSubmessage(<p>{error.message}</p>);
      })

    setTimeout(() => {
      setMessage(null);
      setSubmessage(null);
    }, 5000);

  };

  const cancelForm = () => {
    setCircles(true);
    setMessage("Poistutaan ilman muutoksia.");
    setSubmessage(null);

    setTimeout(() => {
      setMessage(null);
      setSubmessage(null);
    }, 3000);
  };


  /* Changing password */

  const editPassword = () => {
    setCircles(null);
    setMessage(<h3>Muutetaan käyttäjän {user.firstname} {user.middlename} {user.lastname} salasana</h3>);
    setSubmessage(<Password user={user} changePassword={changePassword} />);
  };

  const changePassword = (event) => {
    event.preventDefault();

    const pword = event.target.password.value;
    const npword = event.target.newpassword.value;
    const npword2 = event.target.newpassword2.value;

    setCircles(true);

    const newUser = {
      password: pword,
      npassword: npword,
      npassword2: npword2
    }

    if (!pword || !npword || !npword2) {

      setMessage("Joitain tietoja puuttuu.");
      setSubmessage("Yritä uudelleen.");

    } else {

      Userservice
        .update(user.id, newUser)
        .then(response => {
            setUser((prevState) => { return ({ ...prevState, password: response.data.password }) });
            setCircles(true);
            setMessage("Salasana vaihdettu.");
            setSubmessage(null);
        })
        .catch(error => {
          setCircles(true);
          setMessage("Virhe!");
          setSubmessage(<p>{error.response.data.error}</p>);
        })

    }

    setTimeout(() => {
      setMessage(null);
      setSubmessage(null);
    }, 3000);

  };


  /* Taking a loan */

  const takeLoan = (event) => {
    const loantype = event.target.innerText;

    setCircles(null);
    setMessage(loantype);
    setSubmessage(<Loaning loantype={loantype} loansubmit={loansubmit} cancelForm={cancelForm}/>);

  };

  const loansubmit = (event) => {
    event.preventDefault();

    const loantype = event.target.loantype.value;
    const loan = event.target.loan.value;
    const guarantee = event.target.guarantee.value;
    const income = event.target.income.value;
    const signature = event.target.signature.value;

    let denied = null;
    let approvement = false;

    if (loan > 200000) {
      denied = true;
    }

    const allloans = accounts.filter(account => account.balancelimit < 0);
    const allownloans = allloans.filter(account => account.userId == user.id);
    let alllimit = 0;

    for (let i = 0; i < allownloans.length; i++) {
      alllimit = alllimit - allownloans[i].balancelimit;
    }

    const predictiondata = {
      income: Number(income),
      loan_amount: Number(loan),
      existing_debts: alllimit,
      repayment_history: "good"
    }

    if (!loan || !guarantee || !signature || !income) {

      setCircles(true);
      setMessage("Antamissasi tiedoissa on puutteita.");
      setSubmessage(<p>Yritä uudelleen.</p>);
      setTimeout(() => {
        setMessage(null);
        setSubmessage(null);
      }, 3000);

    } else if (denied) {

      setCircles(true);
      setMessage("Hakemasi lainamäärä on liian suuri.");
      setSubmessage(<p>Yritä uudelleen.</p>);
      setTimeout(() => {
        setMessage(null);
        setSubmessage(null);
      }, 3000);

    } else if (loanapplications.length != 0) {

      setCircles(true);
      setMessage("Et voi lähettää uutta lainahakemusta ennen kuin edellinen on käsitelty.");
      setSubmessage(<p>Yritä myöhemmin uudelleen.</p>);
      setTimeout(() => {
        setMessage(null);
        setSubmessage(null);
      }, 3000);

    } else {

      Predictservice
      .predict(predictiondata)
      .then(response => {
        console.log(response.data);
        approvement = response.data.approved;
        handleResponse({ approvement, loan, income, allownloans, alllimit, guarantee, signature, loantype });
      })
      .catch(error => {
        console.log(error);
        setCircles(true);
        setMessage("Virhe! Jokin tieto oli väärää muotoa.");
        setSubmessage(error.message);
        setTimeout(() => {
          setMessage(null);
          setSubmessage(null);
        }, 3000);
      })

    }

  };


  const handleResponse = ({ approvement, loan, income, allownloans, alllimit, guarantee, signature, loantype }) => {

    if (approvement === false) {

      setMessage("Et voi saada pyytämääsi lainaa tämänhetkisillä kuukausituloilla ja/tai luottotiedoilla.");
      setSubmessage(<div className="loanwindow">
          <p>Yritä uudelleen pienempää lainaa tai ota yhteyttä pankkivirkailijaan.</p>
          <h3>Lainapäätökseen vaikuttavat tiedot:</h3>
          <div className="loandenial"></div>
          <p><strong>Hakemasi lainamäärä:</strong> {loan} euroa</p>
          <div className="loandenial"></div>
          <p><strong>Kuukausitulosi:</strong> {income} euroa/kk </p>
          <div className="loandenial"></div>
          <p><strong>Aikaisemmat lainasi, lainarajat ja myöntöpäivät:</strong> </p>
          {allownloans.map(account => 
            <>
            <div className="accounttitle" key={account.id}>
              <p><strong>{account.name.substring(10)}</strong></p> <p> {0 - account.balancelimit} e </p> <p> {account.creationdate.substring(0,10)}</p>
            </div>
            <div className="loandenial"></div>
            </>
          )}
          <p><strong>Tämänhetkiset lainasi yhteensä: </strong> {alllimit} euroa</p>
          <div className="loandenial"></div>
          <button type="button" onClick={closeWindow}>Sulje ikkuna</button>
        </div>);

    } else {

      setMessage("Lainahakemuksesi tiedot:");
      setSubmessage(<>
        <p>Tarkista ovatko kaikki tiedot hakemuksessasi oikein.</p>
        <div>
        <div className="formfield">
          <label>Lainamuoto:</label>
          <input defaultValue={loantype} disabled></input>
          <label>Lainamäärä:</label>
          <input defaultValue={loan} disabled></input>
          <label>Vakuutesi:</label>
          <input defaultValue={guarantee} disabled></input>
          <label>Kuukausitulosi:</label>
          <input defaultValue={income} disabled></input>
          <label>Allekirjoituksesi:</label>
          <input defaultValue={signature} disabled></input>
        </div>
        </div>
        <Loansubmitting loansubmitsubmit={() => loansubmitsubmit({loan, loantype})} cancelForm={cancelForm}/>
      </>);

    }

  };
  

  const loansubmitsubmit = ({loan, loantype}) => {

    setCircles(true);

    const currentDate = new Date();
    const formatter = new Intl.DateTimeFormat('en-us', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const formattedTime = formatter.format(currentDate);
    const dd = String(currentDate.getDate()).padStart(2, '0');
    const mm = String(currentDate.getMonth()+1).padStart(2, '0');
    const yyyy = currentDate.getFullYear();
  
    const today = mm + '/' + dd + '/' + yyyy + ' ' + formattedTime;

    setLoanapplications(loanapplications.concat({
      id: loanapplications.length + 1000,
      loannumber: "1008" + dd + mm + yyyy,
      loantype: loantype}));

    const newloanaccount = {
      creationdate: today,
      name: "LAINATILI 1008" + dd + mm + yyyy,
      balance: 0,
      balancelimit: 0 - parseInt(loan),
      userId: user.id
    };

    setMessage("Kiitos hakemuksestasi!");
    setSubmessage(<p>Otamme sinuun yhteyttä, kun lainahakemuksesi on käsitelty.</p>);

    setTimeout(() => {
      setMessage(null);
      setSubmessage(null);
    }, 3000);

    setTimeout(() => {

      setLoanapplications([]);

      Accountservice
        .create(newloanaccount)
        .then(response => {
            console.log(response.data.balancelimit);
            setAccounts(accounts.concat(response.data));
        })
        .catch(error => {
            console.log(error);
            setCircles(true);
            setMessage("Virhe! Jokin tieto oli väärää muotoa.");
            setSubmessage(error.message);
        })

      const newMessage = {
        title: "Lainahakemus " + newloanaccount.name,
        message: "Lainahakemuksesi on hyväksytty. Lainatilisi numero on " + newloanaccount.name + ", laina on tyyppiä " + loantype + " ja lainaraja on " + loan + " euroa. Lainasi on käytössä tästä päivästä alkaen. Lainaehdot ovat nähtävillä Monetarumin sivuilla.",
        date: today,
        read: false,
        userId: user.id
      }

      Messageservice
        .create(newMessage)
        .then(response => {
          setMessages(messages.concat(response.data)
            .sort( function(a, b){
              let x = new Date(a.date);
              let y = new Date(b.date);
              return y-x;
            })
          );
          setUsermessages(usermessages.concat(response.data)
            .sort( function(a, b){
              let x = new Date(a.date);
              let y = new Date(b.date);
              return y-x;
            })
          );
        })
      
    }, 30000);

  };


  /* Transaction methods */

  const addTransaction = () => {

    setCircles(null);
    setMessage("Rahan siirto omalle tilille");
    setSubmessage(<Transaction user={user} account={account} accounts={accounts} useronly={true} transactionsubmit={transactionsubmit} cancelForm={cancelForm} />);

  }

  const substractTransaction = () => {
    
    setCircles(null);
    setMessage("Rahan siirto toiselle tilille");
    setSubmessage(<Transaction user={user} account={account} accounts={accounts} useronly={false} transactionsubmit={transactionsubmit} cancelForm={cancelForm}/>);

  }

  const transactionsubmit = (event) => {
    event.preventDefault();

    setCircles(true);

    const source = event.target.source.value;
    const target = event.target.target.value;
    const amount = event.target.amount.value;
    const date = event.target.date.value;
    const messagge = event.target.message.value;
    let pending = false;
    let datetime;

    if ((account.balance - amount) < 0 && source.substring(0,5) !== "LAINA" ) {
      setMessage("Tilin saldo ei riitä");
      setSubmessage(<p>Yritä uudelleen.</p>);

      setTimeout(() => {
        setMessage(null);
        setSubmessage(null);
      }, 3000);

      return;

    }

    if (account.name.substring(0,5) === "LAINA" && (account.balance - amount) < account.balancelimit) {

      setMessage("Tilisiirto ylittää lainarajasi");
      setSubmessage(<p>Yritä myöhemmin uudelleen.</p>);

      setTimeout(() => {
        setMessage(null);
        setSubmessage(null);
      }, 3000);

      return;

    }

    const date2 = new Date(date);
    const currentDate = new Date();

    if (date2.getFullYear() < currentDate.getFullYear()
      || (date2.getFullYear() == currentDate.getFullYear() && date2.getMonth() < currentDate.getMonth())
      || (date2.getFullYear() == currentDate.getFullYear() && date2.getMonth() == currentDate.getMonth() && date2.getDate() < currentDate.getDate())) {
      setMessage("Et voi antaa päiväystä, joka on nykyistä ajankohtaa aikaisempi");
      setSubmessage(<p>Yritä uudelleen.</p>);

      setTimeout(() => {
        setMessage(null);
        setSubmessage(null);
      }, 3000);

      return;

    }

    if (date2.getFullYear() > currentDate.getFullYear()
      || (date2.getFullYear() == currentDate.getFullYear() && date2.getMonth() > currentDate.getMonth())
      || (date2.getFullYear() == currentDate.getFullYear() && date2.getMonth() == currentDate.getMonth() && date2.getDate() > currentDate.getDate())) {
        pending = true;
    }

    if (!amount || !date) {
      setMessage("Tietoja puuttuu");
      setSubmessage(<p>Yritä uudelleen.</p>);
    } else {

      const newsaldo = (account.balance - amount).toFixed(2);

      if (pending === false) {

        const newAccount = {
          balance: newsaldo
        };

        Accountservice
          .update(account.id, newAccount)
          .then(response => {
            console.log("Changed account: " + response.data.id);
            const newSaldoaccount = account;
            newSaldoaccount.balance = newsaldo;
            const newAccounts = accounts.filter(faccount => faccount.id !== account.id);
            setAccounts(newAccounts.concat(newSaldoaccount));
          })

        const currDate = new Date();
        const formatter = new Intl.DateTimeFormat('en-us', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const formattedTime = formatter.format(currDate);
        datetime = date + " " + formattedTime;

      }

      if (pending === true) {
        datetime = date + " 06:00:00 AM";
      }

      const newTransaction = {
        date: datetime,
        pending: pending,
        transactiontype: "unknown",
        transactioner: user.firstname + " " + user.lastname,
        target: target,
        transaction: 0 - amount,
        accountidd: account.id,
        userId: user.id,
        message: messagge
      }

      Transactionservice
        .create(newTransaction)
        .then(response => {
            console.log("New transaction:" + response.data.id);
            setBalance(balance.concat(response.data).sort( function(a, b){
              let x = new Date(a.date);
              let y = new Date(b.date);
              return y-x;
              })
            );
        })

      const targetAccounts = accounts.filter(account => account.id === parseInt(target));
      const targetAccount = targetAccounts[0];

      const newTargetsaldo = (targetAccount.balance - (0 - amount)).toFixed(2);

      const newTargetaccount = {
        balance: newTargetsaldo
      };

      Accountservice
        .update(targetAccount.id, newTargetaccount)
        .then(response => {
          console.log("Changed target account: " + response.data.id);
          targetAccount.balance = newTargetsaldo;
          const newAccounts = accounts.filter(faccount => faccount.id !== targetAccount.id);
          setAccounts(newAccounts.concat(targetAccount));
        })

      const newTargetTransaction = {
        date: datetime,
        pending: pending,
        transactiontype: "loan",
        transactioner: user.firstname + " " + user.lastname,
        target: target,
        transaction: amount,
        accountidd: targetAccount.id,
        userId: targetAccount.userId,
        message: messagge
      }

      console.log(newTargetTransaction);

      Transactionservice
        .create(newTargetTransaction)
        .then(response => {
          console.log("New targetTransaction: " + response.data.id);
          setBalance(balance.concat(response.data).sort( function(a, b){
            let x = new Date(a.date);
            let y = new Date(b.date);
            return y-x;
            })
          );
        })
        .catch(error => {
          console.log(error);
          setCircles(true);
          setMessage("Virhe! Jokin tieto oli väärää muotoa.");
          setSubmessage(error.message);
        }) 

      setMessage("Tilisiirto suoritettu");
      setSubmessage(<>
        <p><b>Tililtä</b> {source}</p>
        <p><b>Tilille</b> {targetAccount.name}</p>
        <p><b>Rahasumma</b> {amount}</p>
        <p><b>Päivämäärä</b> {date}</p>
        {messagge &&
          <p><b>Lisätietoja:</b> {messagge}</p>
        }
      </>);

    }

    setTimeout(() => {
      setMessage(null);
      setSubmessage(null);
    }, 5000);

  }


  /* Bill payment */

  const billPayment = () => {

    setCircles(null);
    setMessage("Laskun maksu");
    setSubmessage(<Billpayment account={account} accounts={accounts} 
      billsubmit={billsubmit} cancelForm={cancelForm} />)

  }

  const billsubmit = (event) => {
    event.preventDefault();

    const source = event.target.source.value;
    const amount = event.target.amount.value;
    const target = event.target.target.value;
    const reference = event.target.reference.value;
    const messagge = event.target.message.value;
    const date = event.target.date.value;
    let pending = false;
    let datetime;

    setCircles(true);

    if ((account.balance - amount) < 0 && source.substring(0,5) !== "LAINA" ) {
      setMessage("Tilin saldo ei riitä");
      setSubmessage(<p>Yritä uudelleen.</p>);

      setTimeout(() => {
        setMessage(null);
        setSubmessage(null);
      }, 3000);

      return;

    }

    if (account.name.substring(0,5) === "LAINA" && (account.balance - amount) < account.balancelimit) {

      setMessage("Tilisiirto ylittää lainarajasi");
      setSubmessage(<p>Yritä myöhemmin uudelleen.</p>);

      setTimeout(() => {
        setMessage(null);
        setSubmessage(null);
      }, 3000);

      return;

    }

    const date2 = new Date(date);
    const currentDate = new Date();

    if (date2.getFullYear() < currentDate.getFullYear()
      || (date2.getFullYear() == currentDate.getFullYear() && date2.getMonth() < currentDate.getMonth())
      || (date2.getFullYear() == currentDate.getFullYear() && date2.getMonth() == currentDate.getMonth() && date2.getDate() < currentDate.getDate())) {
      setMessage("Et voi antaa päiväystä, joka on nykyistä ajankohtaa aikaisempi");
      setSubmessage(<p>Yritä uudelleen.</p>);

      setTimeout(() => {
        setMessage(null);
        setSubmessage(null);
      }, 3000);

      return;

    }

    if (date2.getFullYear() > currentDate.getFullYear()
      || (date2.getFullYear() == currentDate.getFullYear() && date2.getMonth() > currentDate.getMonth())
      || (date2.getFullYear() == currentDate.getFullYear() && date2.getMonth() == currentDate.getMonth() && date2.getDate() > currentDate.getDate())) {
        pending = true;
    }

    const newsaldo = (account.balance - amount).toFixed(2);

    if (!source || !target || !amount || (!reference && !messagge) || !date ) {

      setMessage("Tärkeitä tietoja puuttuu");
      setSubmessage(<p>Yritä uudelleen.</p>)

    } else if (Number(reference) > 100000) {

      setMessage("Viite on väärää muotoa.");
      setSubmessage(<p>Yritä uudelleen.</p>)
      
    } else {

      if (pending !== true) {

        const newAccount = {
          balance: newsaldo
        };

        Accountservice
          .update(account.id, newAccount)
          .then(response => {
            console.log(response.data.id);
            const newSaldoaccount = account;
            newSaldoaccount.balance = newsaldo;
            const newAccounts = accounts.filter(faccount => faccount.id !== account.id);
            setAccounts(newAccounts.concat(newSaldoaccount));
          })

        const currDate = new Date();
        const formatter = new Intl.DateTimeFormat('en-us', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const formattedTime = formatter.format(currDate);
        datetime = date + " " + formattedTime;

      } else {
        datetime = date + " 06:00:00 AM";
      }

      const newTransaction = {
        date: datetime,
        pending: pending,
        transactiontype: "loan",
        transactioner: user.firstname + " " + user.lastname,
        target: target,
        transaction: 0 - amount,
        accountidd: account.id,
        userId: user.id,
        message: messagge,
        reference: reference
      }

      Transactionservice
        .create(newTransaction)
        .then(response => {
            console.log(response.data.id);
            setBalance(balance.concat(response.data).sort( function(a, b){
              let x = new Date(a.date);
              let y = new Date(b.date);
              return y-x;
              })
            );
        })
        .catch(error => {
          console.log(error);
          setCircles(true);
          setMessage("Virhe! Jokin tieto oli väärää muotoa.");
          setSubmessage(error.message);
        }) 

      const targetAccounts = accounts.filter(account => account.id === parseInt(target));
      const targetAccount = targetAccounts[0];

      const newTargetsaldo = (targetAccount.balance - (0 - amount)).toFixed(2);

      const newTargetaccount = {
        balance: newTargetsaldo
      };

      Accountservice
        .update(targetAccount.id, newTargetaccount)
        .then(response => {
          console.log(response.data);
          targetAccount.balance = newTargetsaldo;
          const newAccounts = accounts.filter(faccount => faccount.id !== targetAccount.id);
          setAccounts(newAccounts.concat(targetAccount));
        })

      const newTargetTransaction = {
        date: datetime,
        pending: pending,
        transactiontype: "loan",
        transactioner: user.firstname + " " + user.lastname,
        target: target,
        transaction: amount,
        accountidd: targetAccount.id,
        userId: targetAccount.userId,
        message: messagge,
        reference: reference
      }

      console.log(newTargetTransaction);

      Transactionservice
        .create(newTargetTransaction)
        .then(response => {
          console.log(response.data.id);
          setBalance(balance.concat(response.data).sort( function(a, b){
            let x = new Date(a.date);
            let y = new Date(b.date);
            return y-x;
            })
          );
        })
        .catch(error => {
          console.log(error);
          setCircles(true);
          setMessage("Virhe! Jokin tieto oli väärää muotoa.");
          setSubmessage(error.message);
        }) 

      setMessage("Lasku maksettu");
      setSubmessage(<>
        <p><b>Tililtä</b> {source}</p>
        <p><b>Tilille</b> {targetAccount.name}</p>
        <p><b>Rahasumma</b> {amount}</p>
        {reference &&
          <p><b>Viite</b> {reference}</p>
        }
        {messagge &&
          <p><b>Viesti</b> {messagge}</p>
        }
        <p><b>Päivämäärä</b> {date}</p>
      </>);

    }

    setTimeout(() => {
      setMessage(null);
      setSubmessage(null);
    }, 5000);

  }


  /* Show and delete popups */

  const showtransaction = (data) => {

    const id = parseInt(data);

    const traction = balance.filter(transaction => transaction.id === id);
    const transactionn = traction[0];

    const targetAccounts = accounts.filter(account => account.id === parseInt(transactionn.target));
    const targetAccount = targetAccounts[0];

    setCircles(null);

    setMessage("Valitsemasi tilitapahtuman tiedot");
    setSubmessage(<div className="formfield">
        <label><strong>Päiväys</strong></label> <p>{transactionn.date}</p>
        <label><strong>Toimija</strong></label> <p>{transactionn.transactioner}</p>
        {transactionn.target && <><label><strong>Kohdetili</strong></label> <p>{targetAccount.name}</p></>}
        <label><strong>Määrä</strong></label> <p>{transactionn.transaction}</p>
        <label><strong>Tyyppi</strong></label> 
        {transactionn.transactiontype === "shop" && <p>Kauppa</p>}
        {transactionn.transactiontype === "loan" && <p>Tilisiirto</p>}
        {transactionn.transactiontype === "phone" && <p>Puhelin</p>}
        {transactionn.transactiontype === "gov" && <p>Virasto</p>}
        {transactionn.transactiontype === "unknown" && <p>Tuntematon</p>}
        {transactionn.reference && <><label><strong>Viite</strong></label> <p>{transactionn.reference}</p></>}
        {transactionn.message && <><label><strong>Viesti</strong></label> <p>{transactionn.message}</p></>}
        <button className="closebutton" onClick={closeWindow}>Sulje ikkuna</button>
      </div>);

  }


  const showmessage = (data) => {

    const id = parseInt(data);

    const messagges = messages.filter(message => message.id === id);
    const onemessage = messagges[0];

    const newmessages = messages.filter(message => message.id !== id);
    onemessage.read = true;

    Messageservice
      .update(id, onemessage)
      .then(response => {
        console.log(response.data);
        setMessages(newmessages.concat(response.data).sort( function(a, b){
          let x = new Date(a.date);
          let y = new Date(b.date);
          return y-x;
          })
        );
      })

    setCircles(null);

    setMessage("Valitsemasi viestin tiedot");
    setSubmessage(<div className="formfield">
      <label><strong>Otsikko</strong></label><h3>{onemessage.title}</h3>
      <label><strong>Päiväys</strong></label><p>{onemessage.date}</p>
      <label><strong>Viesti</strong></label><p>{onemessage.message}</p>
      <button className="closebutton" onClick={closeWindow}>Sulje ikkuna</button>
    </div>);

  }

  const deletemessage = (id) => {

    setCircles(null);
    setMessage("Haluatko poistaa tämän viestin?");
    setSubmessage(<div>
      <button type="button" onClick={() => deletedelete(id)}>Kyllä</button>
      <button type="button" onClick={closeWindow}>Peruuta</button>
    </div>);

  }

  const deletedelete = (id) => {

    setCircles(true);
    setMessage("Viesti poistettu");
    setSubmessage(null);

    Messageservice
      .erase(id)
      .then(response => {
        console.log(response.data);
        const newmessages = messages.filter(message => message.id !== id);
        setMessages(newmessages);
      })

    setTimeout(() => {
      setMessage(null);
      setSubmessage(null);
    }, 3000);

  }

  const closeWindow = () => {

    setCircles(true);
    setMessage(null);
    setSubmessage(null);

  }

  const toggleChatBox = () => {

    setIsChatBoxOpen(!isChatBoxOpen);

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
        } circles={circles}></Popup>
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
            {account &&
              <div className="link">
                <Link to="/account" style={{ textDecoration: 'none' }}><h3>{account.name}</h3></Link>
              </div>
            }
            <div className="link">
              <Link to="/loans" style={{ textDecoration: 'none' }}><h3>Lainat</h3></Link>
            </div>
            <div className="link">
              <Link to="/personalinfo" style={{ textDecoration: 'none' }}><h3>Henkilötiedot</h3></Link>
            </div>
            <div className="link">
              <Link to="/messages" style={{ textDecoration: 'none' }}><h3>Viestit ({usermessages.length})</h3></Link>
            </div>
            </>
          }
        </div>
        <div className="main">
          {!isChatBoxOpen &&
            <button className="chatboxbutton" onClick={toggleChatBox}>Kalevi pankkibotti</button>
          }
          <ChatBox isOpen={isChatBoxOpen} onClose={toggleChatBox}>
            <ChatComponent />
          </ChatBox>
          {loanapplications &&
            loanapplications.map(loanapplication =>
              <div className="loanapplication" key={loanapplication.id}>
                <p>Lainahakemuksesi <b>{loanapplication.loantype} {loanapplication.loannumber}</b> odottaa käsittelyä..</p>
              </div>
            )
          }
          <Routes>
            <Route path="/" element={<div className="balances">
              <Frontpage />
            </div>} />
            {user &&
              <>
              <Route path="/account" element={<div className="balances">
                <Balancetable balance={balance} account={account} addTransaction={addTransaction}
                  substractTransaction={substractTransaction} billPayment={billPayment} showtransaction={showtransaction}/>
              </div>} />
              <Route path="/accounts" element={<div className="balances">
                <h3>Tilit</h3>
                {accounts.map(account =>
                    account.userId === user.id &&
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
              <Route path="/messages" element={<div className="balances">
                <Messagetable messages={messages} user={user} showmessage={showmessage} deletemessage={deletemessage} />
              </div>} />
              </>
            }
          </Routes>
        </div>
      </Router>
    </div>

)};

export default App;
