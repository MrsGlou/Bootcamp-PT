import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li> 
                <NavLink to="Pokedex">Pokedex</NavLink>
            </li>
            <li>
                <NavLink to="Store">Store</NavLink>
            </li>
        </ul>
    )

};

export default Header