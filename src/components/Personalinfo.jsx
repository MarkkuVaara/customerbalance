
import Shouse from '../images/shouse.jpg';
import Email from '../images/email.jpg';
import Phone from '../images/phone.jpg';
import Bank from '../images/bank.jpg';
import Info from '../images/info.jpg';

const Personalinfo = (props) => {

    const user = props.user;

    return (
        <div className="info">
            <h3>{user.firstname} {user.middlename} {user.lastname}</h3>
            <div className="subinfo">
                <img src={Shouse}></img>
                <div>
                    <b>Osoite</b>
                    <p>{user.address} {user.postnumber} {user.city}</p>
                </div>
            </div>
            <div className="subinfo">
                <img src={Email}></img>
                <div>
                    <b>Sähköpostiosoite</b>
                    <p>{user.email}</p>
                </div>
            </div>
            <div className="subinfo">
                <img src={Phone}></img>
                <div>
                    <b>Puhelinnumero</b>
                    <p>{user.phone}</p>
                </div>
            </div>
            <div className="subinfo">
                <img src={Bank}></img>
                <div>
                    <b>Asiakkuus</b>
                    <p>{user.homebank}</p>
                </div>
            </div>
            <div className="subinfo">
                <img src={Info}></img>
                <div>
                    <button onClick={props.editInfo}>Muokkaa tietojasi</button>
                </div>
            </div>
        </div>
    )

};

export default Personalinfo;
