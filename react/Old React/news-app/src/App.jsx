import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import UseRequest from "./hooks/useRequest";

function App() {
  const URLNews = import.meta.env.VITE_APP_NEWS;
  const requestNews = UseRequest(URLNews);

  return (
    <div className="App">
      <h1 className="tittle"> Noticias</h1>
      <Nav />
      <Outlet context={[requestNews]} />
    </div>
  );
}

export default App;
