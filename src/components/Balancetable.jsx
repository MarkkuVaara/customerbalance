
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
                {balanceunit.userId === 1 && <p>January</p>}
                {balanceunit.userId === 2 && <p>February</p>}
                {balanceunit.userId === 3 && <p>March</p>}
                {balanceunit.userId === 4 && <p>April</p>}
                {balanceunit.userId === 5 && <p>May</p>}
                {balanceunit.userId === 6 && <p>June</p>}
                {balanceunit.userId === 7 && <p>July</p>}
                {balanceunit.userId === 8 && <p>August</p>}
                {balanceunit.userId === 9 && <p>September</p>}
                {balanceunit.userId === 10 && <p>October</p>}
                {balanceunit.userId === 11 && <p>November</p>}
                {balanceunit.userId === 12 && <p>December</p>}
                <p>{Math.floor(Math.random() * 30 + 1)}th</p>
                <p><b>{balanceunit.id}</b></p>
                <p>{balanceunit.title}</p>
            </div>
        )}
        <button onClick={() => countBalance()}>Calculate cumulative balance</button>
        <div>
            <h2>{cumulBalance}</h2>
        </div>
        </>
    )
};

export default Balancetable;
