
import House from '../images/house.jpg';
import Email from '../images/email.jpg';
import Phone from '../images/phone.jpg';
import Bank from '../images/bank.jpg';
import Info from '../images/info.jpg';

const Personalinfo = (props) => {

    return (
        <div className="info">
            <h3>MARKKU TAPIO VAARA</h3>
            <div className="subinfo">
                <img src={House}></img>
                <div>
                    <b>Osoite</b>
                    <p>Kullerovuorentie 9 R 52 90900 Fingerpori</p>
                </div>
            </div>
            <div className="subinfo">
                <img src={Email}></img>
                <div>
                    <b>Sähköpostiosoite</b>
                    <p>markku.vaara@customer.com</p>
                </div>
            </div>
            <div className="subinfo">
                <img src={Phone}></img>
                <div>
                    <b>Puhelinnumero</b>
                    <p>0500 111 222</p>
                </div>
            </div>
            <div className="subinfo">
                <img src={Bank}></img>
                <div>
                    <b>Asiakkuus</b>
                    <p>Fingerporin Monetarum</p>
                </div>
            </div>
            <div className="subinfo">
                <img src={Info}></img>
                <div>
                    <button onClick={props.editInfo}>Muokkaa asiakastietoja</button>
                </div>
            </div>
        </div>
    )

};

export default Personalinfo;
