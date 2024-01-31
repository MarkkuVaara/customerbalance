
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Transaction = (props) => {

    const [startDate, setStartDate] = useState(new Date());

    const user = props.user;
    const account = props.account;
    const accounts = props.accounts;
    const filteredaccounts = accounts.filter(account => account.userid === user.id);
    const useronly = props.useronly;

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
                    <DatePicker name="date" selected={startDate} onChange={(date) => setStartDate(date)} />
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
