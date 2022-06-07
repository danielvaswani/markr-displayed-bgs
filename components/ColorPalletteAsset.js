import ColorAsset from "./ColorAsset";

function ColorPalletteAsset(pallette){
    const colorPalletteElement = document.createElement("div")
    const palletteName = document.createElement("h2");
    palletteName.innerText = pallette.name;
    colorPalletteElement.appendChild(palletteName)
    colorPalletteElement.className = "colorPallette";
    console.log(pallette)
    const colors = pallette.content.colors;
   
    colorPalletteElement.appendChild(PalletteRow(colors));
    

return colorPalletteElement;

    
}

function PalletteRow(colors){
    const palletteRow = document.createElement("div")
    palletteRow.className = "palletterow";
    for (const colorIndex in colors) {
        console.log(colors)
        const color = colors[colorIndex];   
       const colorElement = ColorAsset(color);
       palletteRow.appendChild(colorElement)
    }
    return palletteRow;
}

export default ColorPalletteAsset;