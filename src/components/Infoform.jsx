
const Infoform = (props) => {

    const user = props.user;

    return (
        <div className="infoform">
            <p>Muokkaa tietojasi:</p>
            <form onSubmit={props.editInformation} key={user.id} >
                <div className="formfield">
                    <label>Etunimi:</label>
                    <input name="firstname" defaultValue={user.firstname}/>
                    <label>Toinen nimi:</label>
                    <input name="middlename" defaultValue={user.middlename}/>
                    <label>Sukunimi:</label>
                    <input name="lastname" defaultValue={user.lastname}/>
                    <label>Asiakasnumero:</label>
                    <input name="usernumber" defaultValue={user.usernumber}/>
                    <label>Salasana:</label>
                    <input name="password" defaultValue={user.password}/>
                    <label>Osoite:</label>
                    <input name="address" defaultValue={user.address}/>
                    <label>Postinumero:</label>
                    <input name="postnumber" defaultValue={user.postnumber}/>
                    <label>Postitoimipaikka:</label>
                    <input name="city" defaultValue={user.city}/>
                    <label>Sähköposti:</label>
                    <input name="email" defaultValue={user.email}/>
                    <label>Puhelinnumero:</label>
                    <input name="phone" defaultValue={user.phone}/>
                    <button type="submit">Muuta</button>
                    <button type="submit">Poistu ilman muutoksia</button>
                </div>
            </form>
        </div>
    )
}

export default Infoform;
