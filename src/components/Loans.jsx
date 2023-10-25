
import Coins from '../images/coins.jpg';

const Loans = () => {

    return (
        <div className="loans">
            <h3>Lainat</h3>
            <button><img src={Coins} alt={Coins}></img>Ota asuntolaina</button>
            <button><img src={Coins} alt={Coins}></img>Ota autolaina</button>
            <button><img src={Coins} alt={Coins}></img>Ota kulutusluotto</button>
            <button><img src={Coins} alt={Coins}></img>Ota VISA</button>
            <button><img src={Coins} alt={Coins}></img>Ota multa rahaa</button>
        </div>
    )

};

export default Loans;
