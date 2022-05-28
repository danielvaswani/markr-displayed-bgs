function ImageAsset(asset) {
  const image = document.createElement("img");
  image.src = asset.content.url;
  return image;
}

export default ImageAsset;
