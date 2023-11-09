
const Loans = (props) => {

    return (
        <div className="loans">
            <br />
            <h3>Lainat</h3>
            <p>Kun tarvitset lainaa, löydät sopivan vaihtoehdon meiltä.</p>
            <p>Voit hakea lainaa asunnon tai kesämökin hankintaan, auton tai veneen ostoon, remontointiin tai vaikka opintojen rahoittamiseen.</p>
            <span className="houseloan">
                <button onClick={props.takeLoan}>
                    Asuntolaina
                </button>
            </span>
            <span className="carloan">
                <button onClick={props.takeLoan}>
                    Autolaina
                </button>
            </span>
            <span className="studentloan">
                <button onClick={props.takeLoan}>
                    Opintolaina
                </button>
            </span>
            <span className="loan">
                <button onClick={props.takeLoan}>
                    Kulutusluotto
                </button>
            </span>
            <span className="visaloan">
                <button onClick={props.takeLoan}>
                    VISA
                </button>
            </span>
            <span className="moneyloan">
                <button onClick={props.takeLoan}>
                    Muu laina
                </button>
            </span>
            <br />
            <h3>Lainan haku</h3>
            <p>Voit hakea ja saada meiltä vakuudellista lainaa, vaikka et vielä olisi asiakkaamme. 
                Hakemuksen voit täyttää verkossa myös muun pankin tunnuksilla. Vakuudetonta kulutusluottoa 
                voit saada vain, jos olet pääasiallinen asiakas.</p>
            <p>Helpoin tapa selvittää, saisitko lainaa, on tehdä lainahakemus. Yleisesti ottaen lainan 
                myöntämiseen vaikuttaa muun muassa taloudellinen tilanteesi.</p>
            <h3>Lainan määrä</h3>
            <p>Se kuinka paljon voit saada lainaa on monen asian summa. Hae lainaa, kun olet tutustunut 
                lainan myöntämiseen vaikuttaviin tekijöihin. Lainan saantiin vaikuttavat muun muassa: 
                Kuinka paljon lainaa olet hakemassa suhteessa kaikkiin tuloihisi ja menoihisi,
                mahdolliset vakuudet, elämäntilanteesi, ja kuinka olet hoitanut raha-asiasi.</p>
            <p>Voit hakea vakuudellista lainaa 10 000 eurosta ylöspäin ilman maksimiylärajaa. 
                Vakuudetonta lainaa voit hakea tarpeestasi riippuen 2 000 - 15 000 euroa.</p>
        </div>
    )

};

export default Loans;
