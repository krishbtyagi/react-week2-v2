import { useState } from "react";

function App() {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <div>
      <Light bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </div>
  );
}

function Light({ bulbOn, setBulbOn }) {
  return (
    <div>
      <LightBulb bulbOn={bulbOn} />
      <LightSwitch setBulbOn={setBulbOn} />
    </div>
  );
}

function LightBulb({ bulbOn }) {
  return (
    <div>
      {bulbOn ? "Bulb On" : "Bulb Off"}
    </div>
  );
}

function LightSwitch({ setBulbOn }) {
  function toggle() {
    setBulbOn(currentState => !currentState);
  }

  return (
    <div>
      <button onClick={toggle}>Toggle Bulb</button>
    </div>
  );
}

export default App;
