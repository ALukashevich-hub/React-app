import './App.css';
//import { Link } from "react-router-dom";
import Characteristics from './components/Characteristics/Characteristics';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <section className='section-characteristics'>
        <Characteristics></Characteristics>
      </section>
      <section className='section-fill'>
      </section>
    </div>
      
  );
}

export default App;
