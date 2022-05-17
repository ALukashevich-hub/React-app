import './App.css';
//import { Link } from "react-router-dom";
import Characteristics from './components/Characteristics/Characteristics';
import Header from './components/Header/Header';
import Avatar from './components/CharacterHeader/Avatar';
import SubSections from './components/SubSections/SubSections';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <section className='section-characteristics'>
        <Avatar></Avatar>
        <Characteristics></Characteristics>
        <SubSections></SubSections>
      </section>
    </div>
      
  );
}

export default App;
