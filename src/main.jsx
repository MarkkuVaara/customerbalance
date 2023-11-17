
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';

const account = [
    {
        id: 109,
        date: "15.11.2023",
        transactiontype: "unknown",
        transactioner: "Punttipojat",
        transaction: -160
    },
    {
        id: 110,
        date: "16.11.2023",
        transactiontype: "shop",
        transactioner: "K-market",
        transaction: -22
    },
    {
        id: 111,
        date: "15.11.2023",
        transactiontype: "loan",
        transactioner: "Osuuspankki opintolaina",
        transaction: -100
    },
    {
        id: 112,
        date: "15.11.2023",
        transactiontype: "phone",
        transactioner: "Telia",
        transaction: -22
    },
    {
        id: 113,
        date: "15.11.2023",
        transactiontype: "shop",
        transactioner: "Citymarket",
        transaction: -104
    },
    {
        id: 114,
        date: "15.11.2023",
        transactiontype: "shop",
        transactioner: "Citymarket",
        transaction: -3.90
    },
    {
        id: 115,
        date: "13.11.2023",
        transactiontype: "shop",
        transactioner: "S-market",
        transaction: -42.95
    },
    {
        id: 116,
        date: "10.11.2023",
        transactiontype: "gov",
        transactioner: "KELA",
        transaction: 1100
    }
]

ReactDOM.createRoot(document.getElementById('root'))
    .render(<App account={account} />);
