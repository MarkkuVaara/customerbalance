
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';

const users = [
    {
        id: 10,
        firstname: "Markku",
        middlename: "Tapio",
        lastname: "Vaara",
        usernumber: 155010,
        password: "cdk51dhh",
        address: "Kullerovuorentie 22 B 9",
        postnumber: "80000",
        city: "Fingerpori",
        email: "markku.vaara@customer.com",
        phone: "0500 111 222",
        homebank: "Fingerporin Monetarum"
    },
    {
        id: 11,
        firstname: "Seppo",
        middlename: "Johannes",
        lastname: "Virolainen",
        usernumber: 155011,
        password: "Seppo2016",
        address: "Virolaisentie 50 A 1",
        postnumber: "50000",
        city: "Kissakaupunki",
        email: "seppo.virolainen@tuhmuus.fi",
        phone: "050 987 654",
        homebank: "Kissakaupungin Monetarum"
    },
    {
        id: 12,
        firstname: "Elli",
        middlename: "Elina",
        lastname: "Jelkänen",
        usernumber: 155012,
        password: "Elli1989",
        address: "Kullerovuorenkatu 22 B 9",
        postnumber: "80000",
        city: "Fingerpori",
        email: "elli.jelkanen@hotmail.com",
        phone: "040 111 555",
        homebank: "Enon Monetarum"
    }
]

const accounts = [
    {
        id: 50,
        creationdate: "5.11.2023",
        name: "KÄYTTÖTILI 1009004555",
        userid: 10
    },
    {
        id: 51,
        creationdate: "5.11.2023",
        name: "SÄÄSTÖTILI 1009004577",
        userid: 10
    },
    {
        id: 52,
        creationdate: "5.11.2023",
        name: "LAINATILI 1008001110",
        userid: 10
    }
]

const transactions = [
    {
        id: 108,
        date: "19.11.2023",
        transactiontype: "shop",
        transactioner: "K-Citymarket",
        transaction: -22,
        accountid: 50
    },
    {
        id: 109,
        date: "18.11.2023",
        transactiontype: "unknown",
        transactioner: "Punttipojat",
        transaction: -160,
        accountid: 50
    },
    {
        id: 111,
        date: "17.11.2023",
        transactiontype: "loan",
        transactioner: "Monetarum opintolaina",
        transaction: -100,
        accountid: 50
    },
    {
        id: 112,
        date: "17.11.2023",
        transactiontype: "phone",
        transactioner: "Telia",
        transaction: -22,
        accountid: 50
    },
    {
        id: 113,
        date: "15.11.2023",
        transactiontype: "shop",
        transactioner: "K-Citymarket",
        transaction: -104,
        accountid: 50
    },
    {
        id: 114,
        date: "15.11.2023",
        transactiontype: "shop",
        transactioner: "K-Citymarket",
        transaction: -3.90,
        accountid: 50
    },
    {
        id: 115,
        date: "13.11.2023",
        transactiontype: "shop",
        transactioner: "S-market",
        transaction: -42.95,
        accountid: 50
    },
    {
        id: 116,
        date: "10.11.2023",
        transactiontype: "gov",
        transactioner: "KELA",
        transaction: 1100,
        accountid: 50
    },
    {
        id: 117,
        date: "17.11.2023",
        transactiontype: "loan",
        transactioner: "Markku Vaara",
        transaction: 100,
        accountid: 52
    },
    {
        id: 118,
        date: "17.10.2023",
        transactiontype: "loan",
        transactioner: "Markku Vaara",
        transaction: 100,
        accountid: 52
    },
    {
        id: 119,
        date: "30.10.2023",
        transactiontype: "unknown",
        transactioner: "Markku Vaara",
        transaction: 500,
        accountid: 51
    }
]

ReactDOM.createRoot(document.getElementById('root'))
    .render(<App users={users} accounts={accounts} transactions={transactions} />);
