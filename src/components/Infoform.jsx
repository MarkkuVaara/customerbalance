
const Infoform = (props) => {

    const user = props.user;

    return (
        <div className="infoform">
            <p>Muokkaa tietojasi (Tähdellä merkityt tiedot eivät muokattavissa tätä kautta):</p>
            <form onSubmit={props.editInformation} key={user.id} >
                <div className="formfield">
                    <label>Uusi etunimi:</label>
                    <input name="firstname"/>
                    <label>Uusi toinen nimi:</label>
                    <input name="middlename"/>
                    <label>Uusi sukunimi:</label>
                    <input name="lastname"/>
                    <label>* Asiakasnumero:</label>
                    <input name="usernumber" defaultValue={user.usernumber} disabled/>
                    <label>* Salasana:</label>
                    <input name="password" defaultValue={"*********"} disabled/>
                    <label>Uusi osoite:</label>
                    <input name="address"/>
                    <label>Uusi postinumero:</label>
                    <input name="postnumber"/>
                    <label>Uusi postitoimipaikka:</label>
                    <input name="city"/>
                    <label>Uusi sähköposti:</label>
                    <input name="email"/>
                    <label>Uusi puhelinnumero:</label>
                    <input name="phone"/>
                    <label>* Oma pankkisi:</label>
                    <input name="homebank" defaultValue={user.homebank} disabled/>
                    <button type="submit">Muuta</button>
                    <button type="button" onClick={props.cancelForm}>Poistu ilman muutoksia</button>
                </div>
            </form>
        </div>
    )
}

export default Infoform;
