
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';

const account = [
    {
        id: 1,
        date: "15.11.2023",
        transactionname: "Telia",
        transaction: -22
    },
    {
        id: 2,
        date: "15.11.2023",
        transactionname: "Citymarket",
        transaction: -104
    },
    {
        id: 3,
        date: "15.11.2023",
        transactionname: "Citymarket",
        transaction: -3.90
    },
    {
        id: 4,
        date: "15.11.2023",
        transactionname: "S-market",
        transaction: -42.95
    },
    {
        id: 5,
        date: "14.11.2023",
        transactionname: "KELA",
        transaction: 595
    }
]

ReactDOM.createRoot(document.getElementById('root'))
    .render(<App account={account} />);
