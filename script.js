  const movieListElement = document.getElementById("movie-list");
  const searchBoxElement = document.getElementById("search-box");
  
  function displayMovies(movies) {
    movieListElement.innerHTML = "";
    movies.forEach(movie => {
      const li = document.createElement("li");
      const title = document.createElement("h2");
      title.innerText = movie.title + " (" + movie.year + ")";
      li.appendChild(title);
      const description = document.createElement("p");
      description.innerText = movie.description;
      description.style.display = "none";
      li.appendChild(description);
      li.addEventListener("click", () => {
        if (description.style.display === "none") {
          description.style.display = "block";
        } else {
          description.style.display = "none";
        }
      });
      movieListElement.appendChild(li);
    });
  }
  
  displayMovies(movies);
  
  searchBoxElement.addEventListener("input", () => {
    const searchTerm = searchBoxElement.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    displayMovies(filteredMovies);
  });
  