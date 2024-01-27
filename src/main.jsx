
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
        creationdate: "Nov 5 2023 12:00:00 AM",
        name: "KÄYTTÖTILI 1009004555",
        balance: 590.45,
        limit: null,
        userid: 10
    },
    {
        id: 51,
        creationdate: "Nov 5 2023 12:00:00 AM",
        name: "SÄÄSTÖTILI 1009004577",
        balance: 1010,
        limit: null,
        userid: 10
    },
    {
        id: 52,
        creationdate: "Nov 5 2023 12:00:00 AM",
        name: "LAINATILI 1008001110",
        balance: -2915,
        limit: -3000,
        userid: 10
    },
    {
        id: 53,
        creationdate: "Nov 5 2023 12:00:00 AM",
        name: "KÄYTTÖTILI 1008005210",
        balance: 189.5,
        limit: null,
        userid: 11
    },
    {
        id: 54,
        creationdate: "Nov 5 2023 12:00:00 AM",
        name: "KÄYTTÖTILI 1008004599",
        balance: 32019,
        limit: null,
        userid: 12
    }
]

const transactions = [
    {
        id: 108,
        date: "Nov 19 2023 7:01:00 PM",
        transactiontype: "shop",
        transactioner: "K-Citymarket",
        transaction: -22,
        accountid: 50
    },
    {
        id: 109,
        date: "Nov 18 2023 6:00:00 PM",
        transactiontype: "unknown",
        transactioner: "Punttipojat",
        transaction: -160,
        accountid: 50
    },
    {
        id: 111,
        date: "Nov 17 2023 11:23:00 AM",
        transactiontype: "loan",
        transactioner: "Monetarum opintolaina",
        transaction: -100,
        accountid: 50
    },
    {
        id: 112,
        date: "Nov 17 2023 12:03:00 PM",
        transactiontype: "phone",
        transactioner: "Telia",
        transaction: -22,
        accountid: 50
    },
    {
        id: 113,
        date: "Nov 15 2023 12:57:00 PM",
        transactiontype: "shop",
        transactioner: "K-Citymarket",
        transaction: -104,
        accountid: 50
    },
    {
        id: 114,
        date: "Nov 15 2023 1:49:00 PM",
        transactiontype: "shop",
        transactioner: "K-Citymarket",
        transaction: -3.90,
        accountid: 50
    },
    {
        id: 115,
        date: "Nov 13 2023 4:01:00 PM",
        transactiontype: "shop",
        transactioner: "S-market",
        transaction: -42.95,
        accountid: 50
    },
    {
        id: 116,
        date: "Nov 10 2023 6:23:00 AM",
        transactiontype: "gov",
        transactioner: "KELA",
        target: "KÄYTTÖTILI 1009004555",
        transaction: 1100,
        accountid: 50
    },
    {
        id: 117,
        date: "Nov 17 2023 8:00:00 AM",
        transactiontype: "loan",
        transactioner: "Markku Vaara",
        transaction: 100,
        accountid: 52
    },
    {
        id: 118,
        date: "Oct 17 2023 8:00:00 AM",
        transactiontype: "loan",
        transactioner: "Markku Vaara",
        transaction: 100,
        accountid: 52
    },
    {
        id: 119,
        date: "Oct 30 2023 10:04:00 AM",
        transactiontype: "unknown",
        transactioner: "Markku Vaara",
        transaction: 500,
        accountid: 51
    },
    {
        id: 120,
        date: "Nov 30 2023 7:43 PM",
        transactiontype: "shop",
        transactioner: "Musti ja Mirri",
        transaction: -39,
        accountid: 53
    },
    {
        id: 121,
        date: "Nov 30 2023 6:32 PM",
        transactiontype: "shop",
        transactioner: "Prisma",
        transaction: -12.95,
        accountid: 53
    },
    {
        id: 122,
        date: "Dec 8 2023 11:02:00 AM",
        transactiontype: "unknown",
        transactioner: "Elli Jelkänen",
        transaction: 100,
        accountid: 53
    },
    {
        id: 123,
        date: "Dec 1 2023 7:35:00 AM",
        transactiontype: "gov",
        transactioner: "Ympäristölaboratorio",
        transaction: 1900,
        accountid: 54
    },
    {
        id: 124,
        date: "Dec 5 2023 6:01:00 PM",
        transactiontype: "shop",
        transactioner: "Lidl",
        transaction: -79,
        accountid: 54
    },
    {
        id: 125,
        date: "Dec 8 2023 5:35:00 AM",
        transactiontype: "unknown",
        transactioner: "Seppo Virolainen",
        transaction: -100,
        accountid: 54
    }
]

const messages = [
    {
        id: 15,
        date: "Jan 1 2024 6:00:00 AM",
        read: false,
        title: "Tervetuloa",
        message: "Tervetuloa, uusi asiakas. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Et malesuada fames ac turpis egestas integer eget. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Integer feugiat scelerisque varius morbi enim nunc."
    }
]

ReactDOM.createRoot(document.getElementById('root'))
    .render(<App users={users} accounts={accounts} transactions={transactions} messages={messages} />);
