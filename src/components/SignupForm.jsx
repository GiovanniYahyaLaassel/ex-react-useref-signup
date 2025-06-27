import React, {useState} from "react";

function SignupForm () {
    // Stato per il nome completo
    const [fullName, setFullName] = useState("");

    // Handler per aggiornare lo stato 
    const handleFullName = (e) => {
        setFullName(e.target.value);
        console.log("Nome completo:", e.target.value)
    };

    return (
        <form>
            <h2>Registrati alla piattaforma</h2>

            {/* Campo input controllato */}
            <div>
                <label htmlFor="fullName">Nome completo:</label>
                <input 
                type="text" 
                id="fullName"
                value={fullName}
                onChange={handleFullName}
                />
            </div>

        </form>
    );
}

export default SignupForm;