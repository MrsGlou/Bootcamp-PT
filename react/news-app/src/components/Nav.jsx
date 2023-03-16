import { useContext } from "react";
import { userContext } from "../context/userContext";
import { NavLink } from "react-router-dom";

function Nav() {
  const { logout, user } = useContext(userContext);

  return (
    <section>
      {user && (
        <nav>
          <ul>
            <li>
              <NavLink to="/Fotovoltaica">Energía Fotovoltaica</NavLink>
            </li>
            <li>
              <NavLink to="/Tecnología">Tecnología</NavLink>
            </li>
            <li>
              <NavLink to="/Cine">Cine</NavLink>
            </li>
          </ul>
          <div className="userContainer">
          <button className="logout">
                <NavLink to="/" onClick={() => logout()} className="logout">
                  <img
                    className="iconLogout"
                    src="https://res.cloudinary.com/dq186ej4c/image/upload/v1678462138/logout_FILL0_wght400_GRAD0_opsz48_dpfnju.png"
                    alt=""
                  />
                </NavLink>
              </button>
          <h2 className="titleUser">{`  Hi ${user}`}</h2>
          </div>
        </nav>
      )}
    </section>
  );
}

export default Nav;
