import ColorAsset from "./ColorAsset";
import VideoAsset from "./VideoAsset";
import ImageAsset from "./ImageAsset";
import TextAsset from "./TextAsset";

function Asset(asset) {
  switch (asset.type) {
    case "color":
      return ColorAsset(asset);
    case "video":
      return VideoAsset(asset);
    case "image":
      return ImageAsset(asset);
    case "text":
      return TextAsset(asset);
    default:
      break;
  }
  return document.createElement("div");
}

export default Asset;
