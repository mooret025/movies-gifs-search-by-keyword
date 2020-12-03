let url;
const cardContainer = document.querySelector("#card_container");
document
  .querySelector("#search-form")
  .addEventListener("submit", (event) => getSearch(event));

function getSearch(event) {
  event.preventDefault();
  let search = event.target.search.value;
  event.target.search.value = "";
  createCards(search);
}

function createCards(search) {
  // take search term and use it to create a card
  // with keyword as the title, and two buttons.
  // One to search for 12 movies for search keyword
  // and one to search gifs.

  const card = document.createElement("div");
  card.style.width = "100px";
  card.style.height = "100px";
  card.style.backgroundColor = "blue";
  cardContainer.appendChild(card);
  //   button.textContent = search;
  //   buttonContainer.appendChild(button);
  //   button.addEventListener("click", () => searchGifs(search));
}
