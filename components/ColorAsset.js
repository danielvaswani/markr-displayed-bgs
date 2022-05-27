import rgbToHex from "../utils";

function ColorAsset(color) {
  const colorElement = document.createElement("div");

  const colorName = document.createElement("h2");
  colorName.innerText = color.name;

  colorElement.appendChild(ColorCircle(color.content));
  colorElement.appendChild(HexCode(color.content));
  colorElement.appendChild(colorName);

  return colorElement;
}

function ColorCircle(content) {
  const colorCircle = document.createElement("div");
  // colorCircle.class = 'color-' + color.name;
  colorCircle.style.width = "200px";
  colorCircle.style.height = "200px";
  colorCircle.style.borderRadius = "50%";
  colorCircle.style.background =
    "rgb(" + content.red + "," + content.green + "," + content.blue + ")";
  return colorCircle;
}

function HexCode(content) {
  const hexCode = document.createElement("h2");

  hexCode.innerText = rgbToHex(content.red, content.green, content.blue);

  return hexCode;
}

export default ColorAsset;
