import React, {useState} from "react";
import Counter from "./components/Counter";
import InputtValue from "./components/InputValue";
import ToggleBtn from "./components/ToggleBtn";
import "./style/style.css"
function App() {
  

  return (
    <div className="app w-50 mx-auto">
      <Counter/>
      <hr/>
      <InputtValue/>
      <ToggleBtn/>
    </div>
  );
}

export default App;
