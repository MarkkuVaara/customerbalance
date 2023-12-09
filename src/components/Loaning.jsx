
const Loaning = (props) => {

    const loantype = props.loantype;
    let maxloan;

    if (loantype === "Asuntolaina") {
        maxloan = 200000;
    } else if (loantype === "Autolaina") {
        maxloan = 100000;
    } else if (loantype === "Opintolaina") {
        maxloan = 20000;
    } else if (loantype === "Kulutusluotto") {
        maxloan = 5000;
    } else if (loantype === "VISA") {
        maxloan = 2000;
    } else { maxloan = 100; }

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
                    <input name="loan" defaultValue={maxloan}></input>
                    <label>Vakuus</label>
                    <select name="insurance">
                        <option>Valtio</option>
                        <option>Kunta</option>
                        <option>Kiinteistö</option>
                        <option>Oma sielu</option>
                        <option>Muu</option>
                    </select>
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
