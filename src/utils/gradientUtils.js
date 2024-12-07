export const generateGradientCSS = (color1, color2) => {
  return `linear-gradient(to right, ${color1}, ${color2})`;
};

export const isValidHexColor = (color) => {
  const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return regex.test(color);
};