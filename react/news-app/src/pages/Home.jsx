import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/userContext";

function Home() {
  const { login, user } = useContext(userContext);
  const textInput = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    user && navigate("/news");
  }, [user]);

  const handleLogin = (textInput) => {
    login(textInput.current.value, fileInput.current.files[0]);
  };

  return (
    <section className="loginContainer">
      {!localStorage.getItem("user") && (
        <>
          <h3>
            ¡Bienvenido! Por favor introduce tu nombre para poder ver las
            ultimas noticias
          </h3>
          <input type="text" ref={textInput} />
          <button className="loginButton" onClick={handleLogin}>
            Registrar
          </button>
        </>
      )}
    </section>
  );
}

export default Home;
