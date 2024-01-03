
const Billpayment = (props) => {

    const account = props.account;
    const accounts = props.accounts;

    return (
        <div>
            <p>(* = pakollinen tieto)</p>
            <form onSubmit={props.billsubmit}>
                <div class="formfield">
                    <label>*Tililtä</label>
                    <select name="source">
                        <option key={account.id}>{account.name}</option>
                    </select>
                    <label>*Tilille</label>
                    <select name="target">
                        {accounts.map(account =>
                            <option key={account.id}>{account.name}</option>
                        )}
                    </select>
                    <label>*Rahasumma</label>
                    <input name="amount"></input>
                    <label>*Viite</label>
                    <input name="reference"></input>
                    <label>*Päiväys</label>
                    <input name="date"></input>
                    <button type="submit">Maksa lasku</button>
                    <button type="button" onClick={props.cancelForm}>Peruuta lasku</button>
                </div>
            </form>
        </div>
    )

}

export default Billpayment;
