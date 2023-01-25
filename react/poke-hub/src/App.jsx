import Header from './components/Header'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <h2>Welcome to Pokemon</h2>
      <Header />
      <Outlet />
    </div>
  )
}

export default App
