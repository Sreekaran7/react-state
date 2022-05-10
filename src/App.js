import './App.css';
import { useState } from 'react';
import ChildComponent from './components/ChildComponent';

function App() {
  const [name, setName] = useState("Good morning");
  const changeName = (e) => {
    setName("Happy Morning");
  }
  return (
    <div className="App">
      <ChildComponent name={name} changeNameHandler={changeName}/>
      <p>{name}</p>
    </div>
  );
}

export default App;
