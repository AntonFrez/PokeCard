import React, { useEffect, onMouseEnter, onMouseLeave, useRef } from "react";
import Button from "./components/UI/Button";
import TypeIcons from "./components/UI/Icons";
import './App.css'

function PokeApp(props) {

  return (
    <div>
        <h1>Find out what kind of Pokemon you are today!</h1>
        <Button/>
      </div>
  );
}

export default PokeApp;