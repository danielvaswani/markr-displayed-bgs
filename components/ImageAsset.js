function ImageAsset(asset) {
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  image.src = asset.content.url;
  imageContainer.className = "banner";
  imageContainer.appendChild(image);

  return imageContainer;
}


export default ImageAsset;
