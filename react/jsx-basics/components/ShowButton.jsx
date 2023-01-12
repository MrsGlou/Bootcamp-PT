import { useState } from "react";

const ShowButton = () => {
    const [ShowText,  setShowText] = useState(true);


    return (
        <div>
            <h2>{ShowText ? "Hola" : "Adios"}</h2>
            <button onClick={() => setShowText(false)}>Change</button>
        </div>
    );
};

export default ShowButton;