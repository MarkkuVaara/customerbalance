
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
                <p>{balanceunit.userId}</p>
                <p>{balanceunit.id}</p>
                <p>{balanceunit.title}</p>
            </div>
        )}
        <button onClick={() => countBalance()}>Fetch your balance</button>
        <div>
            <p>{cumulBalance}</p>
        </div>
        </>
    )
};

export default Balancetable;
