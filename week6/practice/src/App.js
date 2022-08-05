// import logo from './logo.svg';
import './App.css';
import {Modal} from './components/modal'
import React, {useState} from "react";

function App() {
  
  let [modal, setModal] = useState(false);

  return (
    <div className="container">
      <h2 className="title" onClick={() => {
        setModal(!modal);}}>TITLE</h2>
      <div>{modal ? <Modal /> : null }</div>
    </div>
  );
}

export default App;
