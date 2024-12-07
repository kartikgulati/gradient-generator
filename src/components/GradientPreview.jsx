import React from 'react';
import '../index.css';

function GradientPreview({ color1, color2 }) {
  const gradientCSS = `linear-gradient(to right, ${color1}, ${color2})`;
  document.body.style.background = gradientCSS;
  
}
export default GradientPreview;