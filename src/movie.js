import { options } from "./options.js";

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => {
    const movieList = response.results;
    movieList.forEach((element) => {
      console.log(element);

      const movieCard = document.createElement("div");
      movieCard.idName = movie.id;
      movieCard.className = "boxlist";
      movieCard.innerHTML = `
        <img class="moviePoster" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2${element.poster_path}" alt="영화 포스터"" />
        <h1 class="movieTitle">${element.title}</h1>
        <p class="movieDescription">${element.overview}</p>
        <p class="movieRating">Rating : ${element.popularity}</p>
        `;
      document.getElementById("movieList").appendChild(movieCard);
      document.addEventListener("click", handleClickCard);
    });
  })
  .catch((err) => console.error(err));
