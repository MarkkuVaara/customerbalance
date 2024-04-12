
const Messagetable = (props) => {

    let accountmessages;
    const messages = props.messages;
    const user = props.user;
    if (messages.length > 0) {
        accountmessages = messages.filter(message => message.userId === user.id);
    } else {
        accountmessages = [];
    }

    const onTrigger = (event) => {
        props.showmessage(
            event.target.id.value
        );
        event.preventDefault();
    }

    return (
        <div>
            <h3>Viestit</h3>
            <div>
                {accountmessages.length === 0 &&
                    <p>Ei viestejä.</p>
                }
                {accountmessages.map(message => 
                    <form key={message.id} onSubmit={onTrigger}>
                        <div className="balance">
                            <input name="id" defaultValue={message.id} style={{display: "none"}} disabled></input>
                            {message.read == false &&
                                <p className="unread">Uusi</p>
                            }
                            <button type="submit" className="balancedate">{message.date.substring(0, 10)}</button>
                            <p className="balancemessagetitle">{message.title}</p>
                            <p className="balanceactioner">{message.message.substring(0, 50)}...</p>
                        </div>
                    </form>
                )}
            </div>
        </div>

    )

}

export default Messagetable;
