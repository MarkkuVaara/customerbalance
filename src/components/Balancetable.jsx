
const Balancetable = (props) => {

    const balanceunit = props.balanceunit;

    return (

        <div className="balance">
            <p>{balanceunit.userId}</p>
            <p>{balanceunit.id}</p>
            <p>{balanceunit.title}</p>
        </div>

    )
};

export default Balancetable;
