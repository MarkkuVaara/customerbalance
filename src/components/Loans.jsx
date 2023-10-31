
import Coins from '../images/coins.jpg';
import House from '../images/house.jpg';
import Car from '../images/car.jpg';

const Loans = (props) => {

    return (
        <span className="loans">
            <h3>Lainat</h3>
            <button onClick={props.takeLoan}><img height={70} src={House} alt={Coins}></img>Ota asuntolaina</button>
            <button onClick={props.takeLoan}><img height={70} src={Car} alt={Coins}></img>Ota autolaina</button>
            <button onClick={props.takeLoan}><img src={Coins} alt={Coins}></img>Ota kulutusluotto</button>
            <button onClick={props.takeLoan}><img src={Coins} alt={Coins}></img>Ota VISA</button>
            <button onClick={props.takeLoan}><img src={Coins} alt={Coins}></img>Ota multa rahaa</button>
        </span>
    )

};

export default Loans;
