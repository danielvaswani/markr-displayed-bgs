function IFrameAsset(asset) {
  return `<iframe width="560" height="315" src="${asset.content.url}"
   title="${asset.name}" frameborder="0" allow="accelerometer; autoplay; 
   clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

export default IFrameAsset;
