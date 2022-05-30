import "./style.css";

import Page from "./components/Page";

const host = window.location.host;
console.log(host);
const subdomain = host.split(".")[0];

const bgsName =
  host !== "localhost:3000" && host !== "127.0.0.1:3000"
    ? subdomain
    : "johnniewalker";

const API = import.meta.env.VITE_API;

fetch(`${API}/api/brandguides/${bgsName}?subdomain=true`)
  //parsing the json
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    createApp(data.pages);
  });

function createApp(pages) {
  for (const pageIndex in pages) {
    const page = pages[pageIndex];

    addLinkToNav(page.name);

    document.body.appendChild(Page(page));
  }
}

function addLinkToNav(link) {
  const newPageLink = document.createElement("a");
  newPageLink.href = "#" + link;
  newPageLink.innerText = link;
  document.querySelector("#mySidenav").appendChild(newPageLink);
}
