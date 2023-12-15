
const Loansubmitting = (props) => {

    return(
        <div>
            <form onSubmit={props.loansubmitsubmit}>
                <div className="formfield">
                    <button type="submit">Lähetä hakemus</button>
                    <button type="button" onClick={props.cancelForm}>Hylkää hakemus</button>
                </div>
            </form>
        </div>
    )

}

export default Loansubmitting;
