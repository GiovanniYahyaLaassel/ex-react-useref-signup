import React, {useState} from "react";

function SignupForm () {
    // Stato per il nome completo
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [specialization, setSpecialization] = useState("Full Stack");
    const [experience, setExperience] = useState("");
    const [bio, setBio] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isUserNameValid, setIsUserNameValid] = useState(false);


    // Handler per aggiornare lo stato 
    const handleFullName = (e) => {
        setFullName(e.target.value);
        console.log("Nome completo:", e.target.value)
    };

    const handleUserNameChange = (e) => {
        const value =  e.target.value;
        setUsername(value);

        const isValid = 
            value.length >= 6 &&
             /^[a-zA-Z0-9]+$/.test(value);

        setIsUserNameValid(isValid);

        console.log("Username Valido?:", isValid);
    };    

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        console.log("Password:", e.target.value);
    };

    const handleSpecializationChange = (e) => {
        setSpecialization(e.target.value);
        console.log("Specializzazione:", e.target.value);
    };

    const handleExperienceChange = (e) => {
        setExperience(e.target.value);
        console.log("Anni di esperienza:", e.target.value);
    };

    const handleBioChange = (e) => {
        setBio(e.target.value);
        console.log("Bio:", e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //Controllo che tutti i campi siano stati compilati 
        if (
            !fullName.trim() ||
            !username.trim() ||
            !password.trim() ||
            !specialization.trim() ||
            !experience.trim() ||
            !bio.trim() 
        ) {
            alert("Compila tutti i campi"); 
            return;
        }
        // Controllo che anni esperienza sia positivo
        if (isNaN(experience) || Number(experience) <= 0) {
            alert("Gli anni di esperienza devono essere un numero positivo!");
            return;
        }
        // Controllo che la specializzazione sia valida
        const validSpecializations = ["Fullstack", "Frontend", "Backend"];
        if (!validSpecializations.includes(specialization)) {
            alert("Seleziona una specializzazione valida");
            return;
        }

        //  Se tutto è ok, stampo i dati
        console.log("Dati del form VALIDI:", {
            fullName,
            username,
            password,
            specialization,
            experience,
            bio,
        });

        setIsSubmitted(true);   
    }



    return (
        <>

        <form onSubmit={handleSubmit}>
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

             <div>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username"
                    value={username}
                    onChange={handleUserNameChange}
                />
                {username && !isUserNameValid &&(
                    <p style={{color: "red"}}>
                         Lo username deve contenere solo lettere e numeri, almeno 6 caratteri.
                    </p>
                )}
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>

            <div>
                <label htmlFor="specialization">Specializzazione:</label>
                <select 
                    id="specialization"
                    value={specialization}
                    onChange={handleSpecializationChange}
                >
                    <option value="Full Stack">Full Stack</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                </select>
            </div>

            <div>
                <label htmlFor="experience">Anni di esperienza:</label>
                <input 
                    type="number" 
                    id="experience"
                    value={experience}
                    onChange={handleExperienceChange}
                    min="0"
                />
            </div>

            <div>
                <label htmlFor="bio">Breve descrizione:</label>
                <textarea
                    id="bio"
                    value={bio}
                    onChange={handleBioChange}
                    rows="4"
                    cols="40"
                    placeholder="Scrivi qualcosa su di te..."
                />
            </div>
            <button type="submit">Registrati</button>
        </form>
        {isSubmitted && <p>Registrazione completata con successo</p>}
    </>
    )
}

export default SignupForm;