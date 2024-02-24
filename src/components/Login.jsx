
const Login = (props) => {

    return (
        <form onSubmit={props.loggingin} >
            <div className="formfield">
                <label>Käyttäjätunnus:</label>
                <input name="user"></input>
                <label>Salasana:</label>
                <input name="password"></input>
                <button type="button" onClick={props.closeWindow}>Peruuta</button>
                <button type="submit">Kirjaudu</button>
            </div>
        </form>
    )

}

export default Login;
