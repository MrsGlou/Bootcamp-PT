import { Link, useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Link to="/gallery">
        <figure></figure>
      </Link>
    </div>
  );
};

export default Dashboard;
