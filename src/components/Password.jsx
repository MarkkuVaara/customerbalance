
const Password = (props) => {

    const user = props.user;

    return (
        <div>
            <form onSubmit={props.changePassword} key={user.id}>
                <div className="formfield">
                    <label>Vanha salasana:</label>
                    <input name="password"></input>
                    <label>Uusi salasana:</label>
                    <input name="newpassword"></input>
                    <label>Toista uusi salasana:</label>
                    <input name="newpassword2"></input>
                    <button type="submit">Vaihda</button>
                </div>
            </form>
        </div>
    )
}

export default Password;
