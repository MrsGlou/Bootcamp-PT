import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/login"}>Logout</Link>
    </div>
  );
};

export default Home;
