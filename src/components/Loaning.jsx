
const Loaning = (props) => {

    const loantype = props.loantype;
    let loan;

    if (loantype === "Asuntolaina") {
        loan = 200000;
    } else if (loantype === "Autolaina") {
        loan = 100000;
    } else if (loantype === "Opintolaina") {
        loan = 20000;
    } else if (loantype === "Kulutusluotto") {
        loan = 5000;
    } else if (loantype === "VISA") {
        loan = 2000;
    } else { loan = 100; }

    return (
        <div>
            {loantype === "Asuntolaina" &&
                <>
                    <b>Otat siis asuntolainaa!</b>
                    <p>Voit hakea lainaa maksimissaan 200 000 euroa.</p>
                </>
            }
            {loantype === "Autolaina" &&
                <>
                    <b>Otat siis autolainaa!</b>
                    <p>Voit hakea lainaa maksimissaan 100 000 euroa.</p>
                </>
            }
            {loantype === "Opintolaina" &&
                <>
                    <b>Otat siis opintolainaa!</b>
                    <p>Voit hakea lainaa maksimissaan 20 000 euroa.</p>
                </>
            }
            {loantype === "Kulutusluotto" &&
                <>
                    <b>Haet siis kulutusluottoa!</b>
                    <p>Voit hakea lainaa maksimissaan 5 000 euroa.</p>
                </>
            }
            {loantype === "VISA" &&
                <>
                    <b>Haet siis Visa-korttia!</b>
                    <p>Voit hakea lainaa maksimissaan 2 000 euroa.</p>
                </>
            }
            {loantype === "Muu laina" &&
                <>
                    <b>Otat siis muuta lainaa!</b>
                    <p>Voit hakea lainaa maksimissaan 100 euroa.</p>
                </>
            }
            <form onSubmit={props.loansubmit}>
                <div className="formfield">
                    <label>Lainamäärä</label>
                    <input name="loan" defaultValue={loan}></input>
                    <label>Vakuus</label>
                    <input name="insurance"></input>
                    <label>Allekirjoitus</label>
                    <input name="signature"></input>
                    <button type="submit">Lähetä hakemus</button>
                    <button type="button" onClick={props.cancelForm}>Peruuta</button>
                </div>
            </form>
        </div>
    )
}

export default Loaning;
