import Asset from "./Asset";

function Page(page) {
  const newPage = document.createElement("section");
  newPage.id = page.name;

  const title = document.createElement("h1");
  title.innerText = page.name;

  newPage.appendChild(title);

  for (const assetIndex in page.Assets) {
    const asset = page.Assets[assetIndex];
    asset.type === "iframe" ? newPage.innerHTML += Asset(asset) : newPage.appendChild(Asset(asset));
  }
  return newPage;
}

export default Page;
