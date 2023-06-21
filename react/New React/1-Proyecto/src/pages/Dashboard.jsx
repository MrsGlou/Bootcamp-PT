import { Link, useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Link to="/gallery">
        <figure>
          <img
            src="https://www.vinopack.es/wp-content/uploads/2014/11/tienda-zurich.jpg"
            alt="Wines"
          />
        </figure>
      </Link>
      <button
        onClick={() => {
          navigate("/gallery");
        }}
      >
        Gallery
      </button>
    </div>
  );
};

export default Dashboard;
