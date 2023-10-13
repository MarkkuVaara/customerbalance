
import House from '../images/house.jpg';

const Personalinfo = () => {

    return (
        <div className="info">
            <h3>MARKKU TAPIO VAARA</h3>
            <div>
                <img src={House}></img>
                <b>Osoite</b>
                <p>Kullerovuorentie 9 R 52</p>
                <p>90900  Fingerpori</p>
            </div>
            <div>
                <b>Sähköpostiosoite</b>
                <p>markku.vaara@customer.com</p>
            </div>
            <div>
                <b>Puhelinnumero</b>
                <p>0500 111 222</p>
            </div>
            <div>
                <b>Asiakkuus</b>
                <p>Fingerporin Monetarum</p>
            </div>
            <div>
                <b>Asiakastiedot</b>
                <br/>
                <button>Muokkaa</button>
            </div>
        </div>
    )

};

export default Personalinfo;
