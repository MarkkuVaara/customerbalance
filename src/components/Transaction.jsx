
const Transaction = (props) => {

    const user = props.user;
    const account = props.account;
    const accounts = props.accounts;
    const filteredaccounts = accounts.filter(account => account.userid === user.id);
    const useronly = props.useronly;

    const currentDate = new Date();
    const dd = String(currentDate.getDate()).padStart(2, '0');
    const mm = String(currentDate.getMonth() + 1).padStart(2, '0');
    const yyyy = currentDate.getFullYear();

    const today = dd + '.' + mm + '.' + yyyy;

    return(
        <div>
            <p>Raha on näkyvissä toisella tilillä heti tai 1-2 pankkipäivässä. (* = pakollinen tieto)</p>
            <form onSubmit={props.transactionsubmit}>
                <div className="formfield">
                    <label>*Tililtä</label>
                    <select name="source">
                        <option key={account.id}>{account.name}</option>
                    </select>
                    <label>*Tilille</label>
                    <select name="target">
                        {useronly &&
                            <>
                            {filteredaccounts.map(account =>
                                <option key={account.id}>{account.name}</option>
                            )}
                            </>
                        }
                        {!useronly &&
                            <>
                                {accounts.map(account =>
                                    <option key={account.id}>{account.name}</option>
                                )}
                            </>
                        }
                    </select>
                    <label>*Rahasumma</label>
                    <input name="amount"></input>
                    <label>*Päiväys</label>
                    <input name="date" defaultValue={today}></input>
                    <label>Viesti</label>
                    <textarea name="message"></textarea>
                    <button type="submit">Tee tilisiirto</button>
                    <button type="button" onClick={props.cancelForm}>Peruuta toiminto</button>
                </div>
            </form>
        </div>
    )

}

export default Transaction;
