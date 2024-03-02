
import Titleimage from '../images/title.jpg';

const Title = (props) => {

    const user = props.user;

    return (
        <div className="title">
            <h1>Monetarum</h1>
            {!user &&
                <div className="login">
                    <br /><br />
                    <button onClick={() => props.login()}>Kirjaudu sisään</button>
                </div>
            }
            {user &&
                <div>
                    <h3>{user.firstname} {user.middlename} {user.lastname}</h3>
                    <button onClick={() => props.logout()}>Kirjaudu ulos</button>
                </div>
            }
        </div>
    )

};

export default Title;
