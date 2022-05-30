function VideoAsset(asset) {
  const video = document.createElement("video");
  video.src = asset.content.url;
  video.controls = true;
  return video;
}

export default VideoAsset;
