
const Transaction = (props) => {

    const user = props.user;
    const accounts = props.accounts;
    const filteredaccounts = accounts.filter(account => account.userid === user.id);
    const useronly = props.useronly;

    return(
        <div>
            <p>Raha on näkyvissä toisella tilillä tietyn ajan kuluessa.</p>
            <form onSubmit={props.transactionsubmit}>
                <div className="formfield">
                    <label>Tililtä</label>
                    <select name="source">
                        {filteredaccounts.map(account =>
                            <option key={account.id}>{account.name}</option>
                        )}
                    </select>
                    <label>Tilille</label>
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
                    <button type="submit">Tee tilisiirto</button>
                    <button type="button" onClick={props.cancelForm}>Peruuta toiminto</button>
                </div>
            </form>
        </div>
    )

}

export default Transaction;
