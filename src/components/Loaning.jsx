
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
                    <p>Voit hakea asuntolainaa maksimissaan 200 000 euroa.</p>
                </>
            }
            {loantype === "Autolaina" &&
                <>
                    <p>Voit hakea autolainaa maksimissaan 100 000 euroa.</p>
                </>
            }
            {loantype === "Opintolaina" &&
                <>
                    <p>Voit hakea opintolainaa maksimissaan 20 000 euroa.</p>
                </>
            }
            {loantype === "Kulutusluotto" &&
                <>
                    <p>Voit hakea kulutusluottoa maksimissaan 5 000 euroa.</p>
                </>
            }
            {loantype === "VISA" &&
                <>
                    <p>Voit hakea VISA-luottoa maksimissaan 2 000 euroa.</p>
                </>
            }
            {loantype === "Muu laina" &&
                <>
                    <p>Voit hakea muuta lainaa maksimissaan 100 euroa.</p>
                </>
            }
            <form onSubmit={props.loansubmit}>
                <div className="formfield">
                    <label>Hakemasi lainamuoto</label>
                    <input name="loantype" defaultValue={loantype} disabled></input>
                    <label>Hakemasi lainamäärä</label>
                    <input name="loan" defaultValue={maxloan}></input>
                    <label>Vakuus</label>
                    {(loantype === "Kulutusluotto" || loantype === "VISA" || loantype === "Muu laina") &&
                        <input name="guarantee" defaultValue={"Ei vakuutta"} disabled></input>
                    }
                    {(loantype === "Asuntolaina" || loantype === "Autolaina" || loantype === "Opintolaina") &&
                        <select name="guarantee">
                            <option>Valtio</option>
                            <option>Kunta</option>
                            <option>Kiinteistö</option>
                            <option>Oma sielu</option>
                        </select>
                    }
                    <label>Kuukausitulosi</label>
                    <input name="income"></input>
                    <label>Allekirjoitus</label>
                    <input name="signature"></input>
                    <button type="button" onClick={props.cancelForm}>Hylkää hakemus</button>
                    <button type="submit"><strong>Tiedot on syötetty</strong></button>
                </div>
            </form>
        </div>
    )
}

export default Loaning;
