import { useContext } from "react";
import { userContext } from "../context/userContext";
import { NavLink } from "react-router-dom";

function Nav() {
  const { logout, user } = useContext(userContext);

  return (
    <section>
      {user && (
        <nav>
            <h2 className="titleUser">{`  Hi ${user}`}</h2>
          <ul>
          <li>
              <NavLink to="/news">Home</NavLink>
            </li>
            <li>
              <NavLink to="/fotovoltaica">Energía Fotovoltaica</NavLink>
            </li>
            <li>
              <NavLink to="/tecnologia">Tecnología</NavLink>
            </li>
            <li>
              <NavLink to="/cine">Cine</NavLink>
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
          </div>
        </nav>
      )}
    </section>
  );
}

export default Nav;
