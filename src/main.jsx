
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
        balance: 590.45,
        userid: 10
    },
    {
        id: 51,
        creationdate: "5.11.2023",
        name: "SÄÄSTÖTILI 1009004577",
        balance: 1010,
        userid: 10
    },
    {
        id: 52,
        creationdate: "5.11.2023",
        name: "LAINATILI 1008001110",
        balance: -2915,
        userid: 10
    },
    {
        id: 53,
        creationdate: "5.11.2023",
        name: "KÄYTTÖTILI 1008005210",
        balance: 189.5,
        userid: 11
    },
    {
        id: 54,
        creationdate: "5.11.2023",
        name: "KÄYTTÖTILI 1008004599",
        balance: 32019,
        userid: 12
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
        target: "KÄYTTÖTILI 1009004555",
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
    },
    {
        id: 120,
        date: "30.11.2023",
        transactiontype: "shop",
        transactioner: "Musti ja Mirri",
        transaction: -39,
        accountid: 53
    },
    {
        id: 121,
        date: "30.11.2023",
        transactiontype: "shop",
        transactioner: "Prisma",
        transaction: -12.95,
        accountid: 53
    },
    {
        id: 122,
        date: "8.12.2023",
        transactiontype: "unknown",
        transactioner: "Elli Jelkänen",
        transaction: 100,
        accountid: 53
    },
    {
        id: 123,
        date: "1.12.2023",
        transactiontype: "gov",
        transactioner: "Ympäristölaboratorio",
        transaction: 1900,
        accountid: 54
    },
    {
        id: 124,
        date: "5.12.2023",
        transactiontype: "shop",
        transactioner: "Lidl",
        transaction: -79,
        accountid: 54
    },
    {
        id: 125,
        date: "8.12.2023",
        transactiontype: "unknown",
        transactioner: "Seppo Virolainen",
        transaction: -100,
        accountid: 54
    }
]

const messages = [
    {
        id: 15,
        date: "01.01.2024 6:00",
        read: false,
        title: "Tervetuloa",
        message: "Tervetuloa, uusi asiakas. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Et malesuada fames ac turpis egestas integer eget. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Integer feugiat scelerisque varius morbi enim nunc."
    }
]

ReactDOM.createRoot(document.getElementById('root'))
    .render(<App users={users} accounts={accounts} transactions={transactions} messages={messages} />);
