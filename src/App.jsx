import { useState } from 'react'
import ColorPicker from './components/ColorPicker'
import GradientPreview from './components/GradientPreview'
import './App.css'

function App() {
  const [color1, setColor1] = useState('#ff0000')
  const [color2, setColor2] = useState('#0000ff')

  

  return (
    <div className="app-container">
      <h1>Gradient Generator</h1>
      
      <div className="pickers-container">
        <ColorPicker 
          color={color1} 
          onChange={setColor1}
          label="Color 1"
        />
        <ColorPicker 
          color={color2} 
          onChange={setColor2}
          label="Color 2"
        />
      </div>

      <GradientPreview color1={color1} color2={color2} />
      
      <div className="css-code">
        <p>CSS Code:</p>
        <code >
          background: linear-gradient(to right, {color1}, {color2});<br></br>
          

            <button 
              onClick={() => {
                navigator.clipboard.writeText(`background: linear-gradient(to right, ${color1}, ${color2});`);
                alert("Copied CSS to clipboard");
              }}
            >
              Copy CSS
            </button>
          
        </code>
      </div>
    </div>
  )
}

export default App