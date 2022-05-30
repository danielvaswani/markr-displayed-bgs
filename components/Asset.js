import ColorAsset from "./ColorAsset";
import VideoAsset from "./VideoAsset";
import ImageAsset from "./ImageAsset";
import TextAsset from "./TextAsset";
import IFrameAsset from "./IFrameAsset";

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
    case "iframe":
      return IFrameAsset(asset);
    default:
      break;
  }
  return document.createElement("div");
}

export default Asset;
