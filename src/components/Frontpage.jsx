
import Bankclerk from '../images/bankclerk.jpg';

const Frontpage = () => {

    return (
        <div className="frontpage">
            <h3>Tervetuloa Monetarum pankkiin!</h3>
            <p>Olemme Suomen paras ja turvallisin pankki.</p>
            <p>Tarjoamme parhaat talletuskorot ja kilpailukykyisimmät lainat.</p>
            <br />
            <br />
            <img src={Bankclerk}></img>
        </div>
    )

}

export default Frontpage;
