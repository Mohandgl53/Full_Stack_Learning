import { useState } from 'react';
import ColorBox from './ColorBox';
import TextColor from './TextColor';
import ToggleColor from './ToggleColor';

function App() {
  const [color,setColor] = useState("");
  
  const [textColor,setTextColor] = useState("#000000ff");
  const handleTextColor = () => {
    const x = textColor==="#000000ff" ? "#ffffffff" : "#000000ff";
    setTextColor(x);
  }

  return (
    <div className="App">
      <ColorBox
        color = {color}
        setColor = {setColor}
        textColor = {textColor}
        setTextColor = {setTextColor}
      />
      <TextColor
        color = {color}
        setColor = {setColor}
      />
      <ToggleColor
        handleTextColor={handleTextColor}
      />
    </div>
  );
}

export default App;
