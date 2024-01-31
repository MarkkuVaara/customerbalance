
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Billpayment = (props) => {

    const [startDate, setStartDate] = useState(new Date());

    const account = props.account;
    const accounts = props.accounts;

    return (
        <div>
            <p>(* = pakollinen tieto) (** = toinen pakollinen)</p>
            <form onSubmit={props.billsubmit}>
                <div className="formfield">
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
                    <label>**Viite</label>
                    <input name="reference"></input>
                    <label>**Viesti</label>
                    <textarea name="message"></textarea>
                    <label>*Päiväys</label>
                    <DatePicker name="date" selected={startDate} onChange={(date) => setStartDate(date)} />
                    <button type="submit">Maksa lasku</button>
                    <button type="button" onClick={props.cancelForm}>Peruuta lasku</button>
                </div>
            </form>
        </div>
    )

}

export default Billpayment;
