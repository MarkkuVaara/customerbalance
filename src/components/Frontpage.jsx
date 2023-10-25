
import Bankclerk from '../images/bankclerk.jpg';

const Frontpage = () => {

    return (
        <div className="frontpage">
            <h3>Tervetuloa Monetarum-pankkiin!</h3>
            <br />
            <p>Monetarumilla on kattava konttoriverkosto Ruotsissa, Suomessa, Norjassa ja Alankomaissa. Monetarum on perustettu vuonna 1971.</p>
            <p>Pankilla on yli 2 000 työntekijää. Vuonna 2019 pankkimme esihenkilöistä 40 prosenttia oli naisia. Toimintatapamme on hajautettu, ja toiminnan keskiössä ovat aina asiakkaan tarpeet.</p>
            <p>Monetarum on vuosia ollut asiakastyytyväisyyden, vastuullisuuden ja luotettavuuden kärkikolmikossa. Pankkimme on myös yksi Euroopan kustannustehokkaimmista ja vakaimmista pörssinoteeratuista pankeista.</p>
            <br />
            <img src={Bankclerk}></img>
        </div>
    )

}

export default Frontpage;
