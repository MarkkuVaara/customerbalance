
import { useState } from 'react';

import Phone from '../images/phone.jpg';
import Shop from '../images/shop.jpg';
import Gov from '../images/gov.jpg';
import Payment from '../images/payment.jpg';
import Unknown from '../images/unknown.jpg';

const Balancetable = (props) => {

    const [cumulBalance, setCumulbalance] = useState(5000);
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
                    {balanceunit.transactiontype === "shop" &&
                        <p className="balancedescription"><img src={Shop} alt={Shop}></img></p>
                    }
                    {balanceunit.transactiontype === "phone" &&
                        <p className="balancedescription"><img src={Phone} alt={Shop}></img></p>
                    }
                    {balanceunit.transactiontype === "gov" &&
                        <p className="balancedescription"><img src={Gov} alt={Shop}></img></p>
                    }
                    {balanceunit.transactiontype === "loan" &&
                        <p className="balancedescription"><img src={Payment} alt={Shop}></img></p>
                    }
                    {balanceunit.transactiontype === "unknown" &&
                        <p className="balancedescription"><img src={Unknown} alt={Shop}></img></p>
                    }
                    <p className="balanceactioner">{balanceunit.transactioner}</p>
                    <p className="balancetransaction"><b>{balanceunit.transaction} e</b></p>
                </div>
            )}
        </div>
        <br></br>
        </>
    )
};

export default Balancetable;
