function movieHandler() {
  let allMovies = document.querySelectorAll(".page-1 .container .items .item");
  console.log(allMovies);

  if (allMovies.length === 0) return;
  allMovies.forEach((movie) => {
    movie.addEventListener("click", function () {
      let movieName = movie.querySelector(
        ".movie-infos .info-down .movie-name span:last-child"
      ).innerText;
      let movieP = movie.querySelector(".movie-infos .category p ").innerText;
      let movieImg = movie
        .querySelector(".movie-infos .category .coverImg")
        .getAttribute("src");

      let movieCategory = movie.querySelector(
        ".movie-infos .category .cate"
      ).innerText;
      let movieTrailer = movie
        .querySelector(".movie-infos .category .trailer")
        .getAttribute("src");
      localStorage.setItem("itemName", movieName);
      localStorage.setItem("itemP", movieP);
      localStorage.setItem("itemImg", movieImg);
      localStorage.setItem("itemTrailer", movieTrailer);
      localStorage.setItem("itemCategory", movieCategory);
    });
  });
}
movieHandler();
