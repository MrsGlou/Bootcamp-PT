
import ShowArray from '../components/ShowArray';
import ShowButton from '../components/ShowButton';
import ShowObject from '../components/ShowObject';
import './App.css'

function App() {
 const date = 6;
 let time;
 if(6 <= date && date <= 12){
  time="Buenos Días";
 } if(12< date && date <= 19) {
  time="Buenas Tardes";
 } if(20 <= date || 5 >= date) {
  time = "Buenas Noches";
 }
  return (
    <div className="App">
      <p>{time}</p>
      <ShowArray />
      <ShowObject />
      <ShowButton />
    </div>
  )
}

export default App
