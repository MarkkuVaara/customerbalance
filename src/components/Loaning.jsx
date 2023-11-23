
const Loaning = (props) => {

    const loantype = props.loantype;

    return (
        <div>
            {loantype === "Asuntolaina" &&
                <>
                    <b>Otat siis asuntolainaa!</b>
                    <p>Tässä sinulle 100 000 euroa.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Leo duis ut diam quam nulla. Commodo ullamcorper a lacus vestibulum sed. 
                        Tristique nulla aliquet enim tortor at auctor urna nunc id. </p>
                    <p> Nisl suscipit adipiscing bibendum est. Sed blandit libero volutpat 
                        sed cras ornare arcu dui vivamus. Vitae suscipit tellus mauris a diam 
                        maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. 
                        Sagittis vitae et leo duis. Tempus quam pellentesque nec nam aliquam sem et.</p>
                </>
            }
            {loantype === "Autolaina" &&
                <>
                    <b>Otat siis autolainaa!</b>
                    <p>Tässä sinulle 50 000 euroa.</p>
                </>
            }
            {loantype === "Opintolaina" &&
                <>
                    <b>Otat siis opintolainaa!</b>
                    <p>Tässä sinulle 10 000 euroa.</p>
                </>
            }
            {loantype === "Kulutusluotto" &&
                <>
                    <b>Haet siis kulutusluottoa!</b>
                    <p>Tässä sinulle 2 000 euroa.</p>
                </>
            }
            {loantype === "VISA" &&
                <>
                    <b>Haet siis Visa-korttia!</b>
                    <p>Tässä sinulle 1 000 euroa.</p>
                </>
            }
            {loantype === "Muu laina" &&
                <>
                    <b>Otat siis muuta lainaa!</b>
                    <p>Tässä sinulle 5 euroa.</p>
                </>
            }
        </div>
    )
}

export default Loaning;
