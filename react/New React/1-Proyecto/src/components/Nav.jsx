import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      {" "}
      <nav>
        <NavLink to="/">
          <button className="btn-nav">HOME</button>
        </NavLink>
        <NavLink to="/gallery">
          <button className="btn-nav">GALLERY</button>
        </NavLink>
        <NavLink to="/login">
          <button className="btn-nav">LOGOUT</button>
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
