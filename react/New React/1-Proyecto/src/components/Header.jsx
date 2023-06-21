import Nav from "./Nav";
import "./Header.css";

const Header = () => {
  return (
    <div className="wn-header">
      <img
        src="https://st2.depositphotos.com/2571355/7034/v/450/depositphotos_70340565-stock-illustration-wine-bottle-and-wine-glass.jpg"
        alt="icono Vino"
      />
      <Nav />
    </div>
  );
};

export default Header;
