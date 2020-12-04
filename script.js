let url;
const cardContainer = document.querySelector("#card_container");
const cardLayout = document.querySelector("#card_layout");
const resultsContainer = document.querySelector("#results_container");
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
  card.style.width = "350px";
  card.style.height = "350px";
  card.style.backgroundColor = "orange";

  const title = document.createElement("h3");
  title.innerHTML = search;
  card.appendChild(title);

  const buttonGif = document.createElement("button");
  buttonGif.textContent = "Gifs";
  card.appendChild(buttonGif);
  buttonGif.addEventListener("click", () => searchGifs(search));

  const buttonMovie = document.createElement("button");
  buttonMovie.textContent = "Movies";
  card.appendChild(buttonMovie);
  buttonMovie.addEventListener("click", () => searchMovies(search));
  cardContainer.appendChild(card);
  //   button.textContent = search;
  //   buttonContainer.appendChild(button);
  //   button.addEventListener("click", () => searchGifs(search));
}

function searchGifs(search) {
  // set search term
  let searchTerm = search;

  // query giphy api with search term and capture result
  // need api key
  axios
    .get(
      `https://api.giphy.com/v1/gifs/search?api_key=[yourkey]&q=${searchTerm}&limit=12`
    )
    .then((result) => {
      const {
        data: { data },
      } = result;

      // Clear gifs container
      cardContainer.innerHTML = "";

      // create img tag forEach gif returned and append to container
      data.map((gif) => printGifs(gif));
    })
    .catch(function (error) {
      console.log(error);
    });
}

function searchMovies(search) {
  // set search term
  let searchTerm = search;

  // query giphy api with search term and capture result
  // need api key
  axios
    .get(`http://img.omdbapi.com/?apikey=[yourkey]&s=${searchTerm}&limit=12`)
    .then((result) => {
      const {
        data: { data },
      } = result;

      // Clear gifs container
      resultsContainer.innerHTML = "";

      // create img tag forEach gif returned and append to container
      data.map((movie) => printGifs(movie));
    })
    .catch(function (error) {
      console.log(error);
    });
}

function printGifs(gif) {
  const url = gif.images.downsized.url;
  const photo = document.createElement("IMG");
  photo.src = url;

  const title = gif.title;
  const caption = document.createElement("p");
  caption.innerHTML = title;
  cardContainer.appendChild(photo);
  cardContainer.appendChild(caption);
}
