
const Login = (props) => {


    return (
        <div className="formfield">
            <label>Käyttäjätunnus:</label>
            <input></input>
            <label>Salasana:</label>
            <input></input>
            <button onClick={props.closeWindow}>Peruuta</button>
            <button onClick={props.loggingin}>Kirjaudu</button>
        </div>
    )

}

export default Login;
