import { useRef, useState } from "react";

const CodeUseRef = () => {
  const textInput = useRef(null);
  const [name, setName] = useState("Andrea");
    
  //Hasta que no haces click, el valor de useRef no se modifica y por lo tanto no cambia el valor de useState
  const printValue = () => {
		const inputValue = textInput.current?.value;
    if (inputValue) setName(inputValue);

    console.log("Imprime nombre:", inputValue);
  };

  return (
    <div>
      <h1>Hola soy {name}</h1>
      <input type="text" placeholder="name" ref={textInput} />
      <button onClick={printValue}>Mostrar</button>
    </div>
  );
};

export default CodeUseRef