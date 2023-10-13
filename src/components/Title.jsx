
const Title = () => {

    const logout = () => {
        const confirmation = window.confirm("Haluatko kirjautua ulos?");
        if (confirmation) {
            alert("Kirjautuu ulos...");
        }
    };

    return (
        <div className="title">
            <h1>Monetarum</h1>
            <div>
                <h3>Asiakas: Markku Vaara</h3>
                <button onClick={() => logout()}>Kirjaudu ulos</button>
            </div>
        </div>
    )

};

export default Title;
