import './style.css'
import './utils'
import rgbToHex from './utils';

console.log("hello")

//Here I request the API from the rick and morty url
fetch('https://markr-admin-server.vercel.app/api/brandguides/Johnnie%20Walker/')
//parsing the json
  .then(response => response.json())
  .then(data => {
    const colorContainer = document.getElementsByClassName('colorcontainer')[0]
    console.log(colorContainer)
    const flex = document.createElement('div')
    flex.class = 'flex'

    console.log(data);
    
    const colorPage = data.pages.filter((page)=> page.name === 'Colors')[0]  
    console.log(colorPage.Assets)     
    const colors = colorPage.Assets.filter(asset => asset.type === 'color')
    console.log(colors)

    colors.forEach(color => { 
    
      flex.appendChild(getColor(color))
    });


    console.log(colors)

    console.log(colors)

    colorContainer.appendChild(flex)

    console.log(document.getElementById("color-yellow"))
    document.getElementById("color-yellow").style.background = 'rgb(' + color.red + ',' + color.green + ',' + color.blue + ')';
    // color.red 
  });


function getColor(color){
const colorElement = document.createElement('div')
const colorCircle = document.createElement('div')
// colorCircle.class = 'color-' + color.name;
colorCircle.style.width = '200px';
colorCircle.style.height = '200px';
colorCircle.style.borderRadius = '50%';
colorCircle.style.background = 'rgb(' + color.content.red + ',' + color.content.green + ',' + color.content.blue + ')';

const colorCode = document.createElement('h2')

colorCode.innerText = rgbToHex(color.content.red, color.content.green, color.content.blue)
const colorName = document.createElement('h2')

colorName.innerText = color.name

colorElement.appendChild(colorCircle);
colorElement.appendChild(colorCode);
colorElement.appendChild(colorName);


return colorElement;
}


