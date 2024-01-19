
const Messagetable = (props) => {

    const messages = props.messages;

    const onTrigger = (event) => {
        props.showmessage(
            event.target.id.value
        );
        event.preventDefault();
    }

    return (
        <div>
            <h3>Viestit</h3>
            <div className="balances">
                {messages.length === 0 &&
                    <p>Ei viestejä.</p>
                }
                {messages.map(message => 
                    <form key={message.id} onSubmit={onTrigger}>
                        <div className="balance">
                            <input name="id" defaultValue={message.id} style={{display: "none"}} disabled></input>
                            <button type="submit" className="balancedate">{message.date}</button>
                            <p>{message.title}</p>
                            <p>{message.message.substring(0, 50)}...</p>
                        </div>
                    </form>
                )}
            </div>
        </div>

    )

}

export default Messagetable;
