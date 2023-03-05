import { useRef, useEffect } from "react";

function CodeRefFocus() {
  const focusInputRef = useRef (null);
    //Vamos a hacer que el 1ºfocus sea siempre en el usuario, y que no cambie aunque se renderice o modifique
  useEffect(() => {
    if (focusInputRef.current) focusInputRef.current.focus();
  }, []);

  return (
    <div>
      <form>
        <div>
          <label htmlFor="user">Usuario</label>
          <input type="text" id="user" placeholder="User" ref={focusInputRef} />
        </div>
        <div>
          <label htmlFor="pass">Constraseña</label>
          <input type="password" id="pass" placeholder="Pass" />
        </div>
      </form>
    </div>
  );
}

export default CodeRefFocus;
