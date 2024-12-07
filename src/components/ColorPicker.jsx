import React from 'react';
import { HexColorPicker } from 'react-colorful';

function ColorPicker({ color, onChange, label }) {
  return (
    <div className="color-picker">
      <label>{label}</label>
      <HexColorPicker color={color} onChange={onChange} />
      <input 
        type="text" 
        value={color} 
        onChange={(e) => onChange(e.target.value)}
        style={{ 
          width: '100px', 
          padding: '5px',
          marginTop: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />
    </div>
  );
}

export default ColorPicker;