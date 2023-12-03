
const Password = (props) => {

    const user = props.user;

    return (
        <div>
            <form onSubmit={props.changePassword} key={user.id}>
                <div className="formfield">
                    <label>Vanha salasana:</label>
                    <input></input>
                    <label>Uusi salasana:</label>
                    <input></input>
                    <label>Toista uusi salasana:</label>
                    <input></input>
                    <button type="submit">Vaihda</button>
                </div>
            </form>
        </div>
    )
}

export default Password;
