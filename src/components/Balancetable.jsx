
import { useState } from 'react';

const Balancetable = (props) => {

    const [cumulBalance, setCumulbalance] = useState(0);
    const balance = props.balance;

    const countBalance = () => {
        let cumulativebalance = 0;
        balance.map(balanceunit => {
            cumulativebalance = cumulativebalance + balanceunit.id;
        });
        setCumulbalance(cumulativebalance);
    };

    return (
        <>
        {balance.map(balanceunit => 
            <div className="balance" key={balanceunit.id}>
                {balanceunit.userId === 1 && <p className="balancemonth">January</p>}
                {balanceunit.userId === 2 && <p className="balancemonth">February</p>}
                {balanceunit.userId === 3 && <p className="balancemonth">March</p>}
                {balanceunit.userId === 4 && <p className="balancemonth">April</p>}
                {balanceunit.userId === 5 && <p className="balancemonth">May</p>}
                {balanceunit.userId === 6 && <p className="balancemonth">June</p>}
                {balanceunit.userId === 7 && <p className="balancemonth">July</p>}
                {balanceunit.userId === 8 && <p className="balancemonth">August</p>}
                {balanceunit.userId === 9 && <p className="balancemonth">September</p>}
                {balanceunit.userId === 10 && <p className="balancemonth">October</p>}
                {balanceunit.userId === 11 && <p className="balancemonth">November</p>}
                {balanceunit.userId === 12 && <p className="balancemonth">December</p>}
                <p className="balancedate">{Math.floor(Math.random() * 30 + 1)}th</p>
                <p className="balancetransaction"><b>{balanceunit.id} e</b></p>
                <p className="balancedescription">{balanceunit.title}</p>
            </div>
        )}
        <br></br>
        <button onClick={() => countBalance()}>Calculate cumulative balance</button>
        <div>
            <h2>{cumulBalance} euros</h2>
        </div>
        <br></br>
        </>
    )
};

export default Balancetable;
