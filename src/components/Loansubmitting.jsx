
const Loansubmitting = (props) => {

    return(
        <div>
            <form onSubmit={props.loansubmitsubmit}>
                <div className="formfield">
                    <button type="button" onClick={props.cancelForm}>Hylkää hakemus</button>
                    <button type="submit"><strong>Lähetä hakemus</strong></button>
                </div>
            </form>
        </div>
    )

}

export default Loansubmitting;
