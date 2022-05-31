function TextAsset(asset) {
  switch (asset.content.variant) {
    case "subtitle":
      return Subtitle(asset.content.value);
    case "paragraph":
      return Paragraph(asset.content.value);
    default:
      break;
  }
  return document.createElement("div");
}

function Subtitle(value) {
  const subtitle = document.createElement("h2");
  subtitle.innerText = value;
  return subtitle;
}

function Paragraph(value) {
  const paragraph = document.createElement("p");
  paragraph.innerText = value;
  return paragraph;
}

export default TextAsset;
