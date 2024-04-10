
import { useState } from 'react';

import Phone from '../images/phone.jpg';
import Shop from '../images/shop.jpg';
import Gov from '../images/gov.jpg';
import Payment from '../images/payment.jpg';
import Unknown from '../images/unknown.jpg';

const Balancetable = (props) => {

    const balance = props.balance;
    const account = props.account;
    const accounttransactions = balance.filter(transaction => transaction.accountId === account.id);

    const onTrigger = (event) => {
        props.showtransaction(
            event.target.id.value
        );
        event.preventDefault();
    }

    return (
        <>
        <div className="accounttitle">
            <h3>{account.name}</h3>
        </div>
        <div className="accountbalance">
            <h4 className="accountsaldo">Tilin saldo: {account.balance} euroa</h4>
            <button onClick={props.addTransaction}>Siirrä rahaa omalle tilille</button>
            <button onClick={props.substractTransaction}>Siirrä rahaa toiselle tilille</button>
            <button onClick={props.billPayment}>Maksa lasku</button>
        </div>
        <div className="accountbalance">
            <h4>Tapahtumat:</h4>
            {accounttransactions.map(transaction =>
                <form key={transaction.id} onSubmit={onTrigger}>
                <div className="balance">
                    {transaction.pending && <b>Odottaa</b>}
                    <input name="id" defaultValue={transaction.id} style={{display: "none"}} disabled></input>
                    <button type="submit" className="balancedate">{transaction.date.substring(0, 10)}</button>
                    {transaction.transactiontype === "shop" &&
                        <p className="balancedescription"><img src={Shop} alt={Shop}></img></p>
                    }
                    {transaction.transactiontype === "phone" &&
                        <p className="balancedescription"><img src={Phone} alt={Shop}></img></p>
                    }
                    {transaction.transactiontype === "gov" &&
                        <p className="balancedescription"><img src={Gov} alt={Shop}></img></p>
                    }
                    {transaction.transactiontype === "loan" &&
                        <p className="balancedescription"><img src={Payment} alt={Shop}></img></p>
                    }
                    {transaction.transactiontype === "unknown" &&
                        <p className="balancedescription"><img src={Unknown} alt={Shop}></img></p>
                    }
                    <p className="balanceactioner">{transaction.transactioner}</p>
                    <p className="balancetransaction"><b>{transaction.transaction}</b></p>
                </div>
                </form>
            )}
        </div>
        <br></br>
        </>
    )
};

export default Balancetable;
