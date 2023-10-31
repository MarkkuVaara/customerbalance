
const Title = (props) => {

    return (
        <div className="title">
            <h1>Monetarum</h1>
            {!props.user &&
                <div className="login">
                    <br /><br />
                    <button onClick={() => props.login()}>Kirjaudu sisään</button>
                </div>
            }
            {props.user &&
                <div>
                    <h3>Asiakas: {props.user}</h3>
                    <button onClick={() => props.logout()}>Kirjaudu ulos</button>
                </div>
            }
        </div>
    )

};

export default Title;
