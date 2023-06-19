//import { useState } from "react";

const Login = () => {
  //const [formData, setFormData] = useState();

  //const onInputChange = ({ target }) => {};

  return (
    <section className="lgn-form">
      <h2>Acceso:</h2>
      <input
        type="text"
        name="username"
        id="username"
        onChange={() => {
          /*
          onInputChange();*/
        }}
      />
      <input type="text" name="email" id="email" />
    </section>
  );
};

export default Login;
