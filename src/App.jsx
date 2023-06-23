import { useState } from "react";
import "./index.css"

const Color = ({ color, selectedColor, setSelectedColor }) => {
  console.log("setSelectedColor", setSelectedColor)
  const isSelected = selectedColor === color;
  return (
    <div
      className={`${color} ${isSelected ? "selected" : ""}`}
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} selectedColor ={selectedColor} />
        <Color color="blue" setSelectedColor={setSelectedColor} selectedColor ={selectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} selectedColor ={selectedColor} />
      </div>
    </div>
  );
};

export default App;
