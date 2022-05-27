import "./style.css";

import Page from "./components/Page";

fetch("https://markr-admin-server.vercel.app/api/brandguides/Johnnie%20Walker/")
  //parsing the json
  .then((response) => response.json())
  .then((data) => {
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
