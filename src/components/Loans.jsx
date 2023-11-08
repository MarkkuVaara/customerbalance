
const Loans = (props) => {

    return (
        <div className="loans">
            <h3>Lainat</h3>
            <span className="houseloan">
                <button onClick={props.takeLoan}>
                    <p>Asuntolaina</p>
                </button>
            </span>
            <span className="carloan">
                <button onClick={props.takeLoan}>
                    <p>Autolaina</p>
                </button>
            </span>
            <span className="loan">
                <button onClick={props.takeLoan}>
                    <p>Kulutusluotto</p>
                </button>
            </span>
            <span className="visaloan">
                <button onClick={props.takeLoan}>
                    <p>VISA</p>
                </button>
            </span>
            <span className="moneyloan">
                <button onClick={props.takeLoan}>
                    <p>Muu laina</p>
                </button>
            </span>
        </div>
    )

};

export default Loans;
