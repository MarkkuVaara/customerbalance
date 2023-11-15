
import { useState } from 'react';

const Balancetable = (props) => {

    const [cumulBalance, setCumulbalance] = useState(0);
    const balance = props.balance;

    return (
        <>
        <div className="accounttitle">
            <h3>{props.account}</h3>
        </div>
        <div className="accountbalance">
            <h4>Saldo: {cumulBalance} euroa</h4>
        </div>
        <div className="accountbalance">
            <h4>Tapahtumat:</h4>
            {balance.map(balanceunit => 
                <div className="balance" key={balanceunit.id}>
                    <p className="balancemonth">Month</p>
                    <p className="balancedate">{Math.floor(Math.random() * 30 + 1)}th</p>
                    <p className="balancetransaction"><b>{balanceunit.id} e</b></p>
                    <p className="balancedescription">{balanceunit.title}</p>
                </div>
            )}
        </div>
        <br></br>
        </>
    )
};

export default Balancetable;
