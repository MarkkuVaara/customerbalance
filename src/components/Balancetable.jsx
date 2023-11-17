
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
            <h4>Tilin saldo: {cumulBalance} euroa</h4>
        </div>
        <div className="accountbalance">
            <h4>Tapahtumat:</h4>
            {balance.map(balanceunit => 
                <div className="balance" key={balanceunit.id}>
                    <p className="balancedate">{balanceunit.date}</p>
                    <p className="balancedescription">{balanceunit.transactionname}</p>
                    <p className="balancetransaction"><b>{balanceunit.transaction} e</b></p>
                </div>
            )}
        </div>
        <br></br>
        </>
    )
};

export default Balancetable;
