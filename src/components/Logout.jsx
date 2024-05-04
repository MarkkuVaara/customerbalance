
const Logout = (props) => {

    return (
        <form onSubmit={props.loggingout} >
            <div className="formfield">
                <button type="button" onClick={props.closeWindow}>Peruuta</button>
                <button type="submit">Kirjaudu ulos</button>
            </div>
        </form>
    )

}

export default Logout;
