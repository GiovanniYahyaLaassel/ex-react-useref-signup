import React, {useState} from "react";

function SignupForm () {
    // Stato per il nome completo
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [specialization, setSpecialization] = useState("Full Stack");
    const [experience, setExperience] = useState("");


    // Handler per aggiornare lo stato 
    const handleFullName = (e) => {
        setFullName(e.target.value);
        console.log("Nome completo:", e.target.value)
    };

    const handleUserNameChange = (e) => {
        setUsername(e.target.value);
        console.log("Username:", e.target.value);
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

             <div>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username"
                    value={username}
                    onChange={handleUserNameChange}
                />
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

        </form>
    );
}

export default SignupForm;