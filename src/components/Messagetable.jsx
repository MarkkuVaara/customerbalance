
const Messagetable = (props) => {

    const messages = props.messages;

    return (
        <div>
            <h3>Viestit</h3>
            <div className="balances">
                {messages.length === 0 &&
                    <p>Ei viestejä.</p>
                }
                {messages.map(message => 
                    <div className="balance" key={message.id}>
                        <b>{message.date}</b>
                        <p>{message.message}</p>
                    </div>
                )}
            </div>
        </div>

    )

}

export default Messagetable;
