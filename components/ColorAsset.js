import rgbToHex from "../utils";

function ColorAsset(color) {
  const colorElement = document.createElement("div");


  colorElement.appendChild(ColorCircle(color));
  colorElement.appendChild(HexCode(color));
  colorElement.appendChild(ColorName(color.name));

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
  const hexCode = document.createElement("h4");

  hexCode.innerText = rgbToHex(content.red, content.green, content.blue);
  hexCode.style.textAlign = "center"
  return hexCode;
}

function ColorName(name){
  const colorName = document.createElement("h4");
  colorName.innerText = name;
  colorName.style.textAlign = "center"

  return colorName;
}

export default ColorAsset;
