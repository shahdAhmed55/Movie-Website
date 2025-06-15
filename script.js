let itemsPageOne = {
  data: [
    {
      year: "2017",
      itemName: "JUMANJI",
      category: "Comedy | Adventure",
      degree: "7.0",
      img: "./MoviesWebsiteImages/img/movie-1.jpg",
      className: "item",
      paragragh:
        "Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game.",

      coverImg: "./MoviesWebsiteImages/covers/adventure.jpg",
      videoTrailer: "./MoviesWebsiteImages/trailers/Jumanji.mp4",
    },
    {
      year: "2017 - 2021",
      itemName: "MONEY HEIST",
      category: "Crime | Drama",
      degree: "8.2",
      img: "./MoviesWebsiteImages/img/movie-6.jpg",
      className: "item",
      paragragh:
        "Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.",
      coverImg: "./MoviesWebsiteImages/covers/money-heist.webp",
      videoTrailer: "./MoviesWebsiteImages/trailers/Money Heist.mp4",
    },

    {
      year: "2021",
      itemName: "SHANG-CHI",
      category: "Action",
      degree: "2.8",
      img: "./MoviesWebsiteImages/img/movie-3.jpg",
      className: "item",
      paragragh:
        "Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.",
      coverImg: "./MoviesWebsiteImages/covers/SHANG-CHI.webp",
      videoTrailer:
        "./MoviesWebsiteImages/trailers/Shang-Chi and the Legend of the Ten Rings.mp4",
    },

    {
      year: "2021",
      itemName: "ETERNALS",
      category: "Action",
      degree: "2.8",
      img: "./MoviesWebsiteImages/img/movie-4.jpg",
      className: "item",
      paragragh:
        "An new team of Super Heroes in the Marvel Cinematic Universe, have been forced to reunite against mankind's most ancient enemy, the Deviants",
      coverImg: "./MoviesWebsiteImages/covers/ETERNALS.webp",
      videoTrailer: "./MoviesWebsiteImages/trailers/Eternals.mp4",
    },

    {
      year: "2017",
      itemName: "SPECTRE",
      category: "Action | Spy",
      degree: "6.8",
      img: "./MoviesWebsiteImages/img/movie-5.jpg",
      className: "item",
      paragragh:
        "A cryptic message from James Bond's past sends him on a trail to uncover the existence of a sinister organisation named SPECTRE.",
      coverImg: "./MoviesWebsiteImages/covers/wp2393105.webp",
      videoTrailer: "./MoviesWebsiteImages/trailers/SPECTRE Trailer.mp4",
    },
    {
      year: "2003",
      itemName: "JOHNNY ENGLISH",
      category: "Adventure | Comedy",
      degree: "6.3",
      img: "./MoviesWebsiteImages/img/movie-8.jpg",
      className: "item",
      paragragh:
        "After a sudden attack on MI7, Johnny English, Britain's most confident, yet unintelligent spy, becomes Britain's only spy.",
      coverImg: "./MoviesWebsiteImages/covers/JOHNNY ENGLISH.webp",
      videoTrailer: "./MoviesWebsiteImages/trailers/Johnny English.mp4",
    },

    {
      year: "2013",
      itemName: "THE WOLVERINE",
      category: "Samurai | Sci-Fi",
      degree: "6.7",
      img: "./MoviesWebsiteImages/img/movie-7.jpg",
      className: "item",
      paragragh:
        "Wolverine comes to Japan to meet an old friend whose life he saved years ago, and gets embroiled in a conspiracy involving yakuza and mutants.",
      coverImg: "./MoviesWebsiteImages/covers/THE WOLVERINE.webp",
      videoTrailer: "./MoviesWebsiteImages/trailers/The Wolverine.mp4",
    },
    {
      year: "2019",
      itemName: "Spider-Man: Far from Home",
      category: "Super hero | Action",
      degree: "2.8",
      img: "./MoviesWebsiteImages/img/Spider-Man_ Far from Home (2019)_files/MV5BMzNhNTE0NWQtN2E1Ny00NjcwLTg1YTctMGY1NmMwODJmY2NmXkEyXkFqcGc@._V1_.jpg",
      className: "item",
      paragragh:
        "Peter Parker, the beloved superhero Spider-Man, faces four destructive elemental monsters while on holiday in Europe. Soon, he receives help from Mysterio, a fellow hero with mysterious origins.",
      coverImg: "./MoviesWebsiteImages/covers/download.jpeg",
      videoTrailer:
        "./MoviesWebsiteImages/trailers/SPIDER-MAN  FAR FROM HOME.mp4",
    },
  ],
};

let itemsContainer = document.querySelector(".items");
let itemsNumber = document.querySelectorAll(".item");

if (itemsNumber.length > 0) {
  for (i of itemsPageOne.data) {
    //make item
    let item = document.createElement("div");
    item.classList.add(i.className);
    //make first div (img)
    let pageOneItemImgDiv = document.createElement("div");
    pageOneItemImgDiv.classList.add("img");
    let pageOneItemImg = document.createElement("img");
    pageOneItemImg.setAttribute("src", i.img);
    pageOneItemImg.setAttribute("alt", "");

    //movie info
    let movieInfoContainer = document.createElement("div");
    movieInfoContainer.classList.add("movie-infos");

    let infoUpDiv = document.createElement("div");
    infoUpDiv.classList.add("info-up");
    let FHDspan = document.createElement("span");
    FHDspan.classList.add("full-hd");
    FHDspan.innerText = "FULL HD";
    infoUpDiv.append(FHDspan);
    movieInfoContainer.append(infoUpDiv);

    let infoDownDiv = document.createElement("div");
    infoDownDiv.classList.add("info-down");
    let MovieNameDiv = document.createElement("div");
    MovieNameDiv.classList.add("movie-name");

    let yearSpan = document.createElement("span");
    yearSpan.innerText = i.year;
    let nameSpan = document.createElement("span");
    nameSpan.innerText = i.itemName;

    MovieNameDiv.append(yearSpan);
    MovieNameDiv.append(nameSpan);
    infoDownDiv.append(MovieNameDiv);
    movieInfoContainer.append(infoDownDiv);

    let CategoryDiv = document.createElement("div");
    CategoryDiv.classList.add("category");

    let classification = document.createElement("span");
    classification.classList.add("cate");
    classification.innerText = i.category;

    let degreeDiv = document.createElement("div");
    degreeDiv.classList.add("degree");

    let degreeSpan = document.createElement("span");
    degreeSpan.innerText = i.degree;

    let imgDegree = document.createElement("img");
    imgDegree.setAttribute("src", "./MoviesWebsiteImages/img/fav-icon.png");

    degreeDiv.append(degreeSpan);
    degreeDiv.append(imgDegree);

    CategoryDiv.append(classification);
    CategoryDiv.append(degreeDiv);

    
    let paragragh = document.createElement("p");
    paragragh.classList.add("hide");
    paragragh.innerText = i.paragragh;

    let coverPng = document.createElement("img");
    coverPng.setAttribute("src", i.coverImg);
    coverPng.setAttribute("alt", " ");
    coverPng.classList.add("coverImg");
    coverPng.classList.add("hide");

    let trailer = document.createElement("video");
    trailer.setAttribute("src", i.videoTrailer);
    trailer.setAttribute("controls", "");
    trailer.classList.add("trailer");
    trailer.classList.add("hide");

    CategoryDiv.append(trailer);
    CategoryDiv.append(paragragh);
    CategoryDiv.append(coverPng);
    item.onmouseenter = function () {
      CategoryDiv.style.right = -100 + "%";
      infoUpDiv.style.left = -100 + "%";
      infoDownDiv.style.left = -100 + "%";

      item.style.scale = 1.02;
    };
    item.onmouseleave = function () {
      CategoryDiv.style.right = 0 + "px";
      infoUpDiv.style.left = 0 + "px";
      infoDownDiv.style.left = 0 + "px";
      item.style.scale = 1;
    };

    movieInfoContainer.append(CategoryDiv);
    //append th img in its container
    pageOneItemImgDiv.append(pageOneItemImg);
    item.append(pageOneItemImgDiv);
    item.append(movieInfoContainer);

    itemsContainer.append(item);

    // when movie clicked
    item.onclick = function openPopUp() {
      let imgOfpopup = document.querySelector(
        ".page-1 .container .movie-popup .container .right .img img"
      );
      let conImgOfpopup = document.querySelector(
        ".page-1 .container .movie-popup .container .right .img"
      );
      moviePopup.classList.remove("hide");
      popupClose.classList.remove("hide");
      setTimeout(function wait() {
        conImgOfpopup.style.transition = 0.5 + "s";
        imgOfpopup.style.transition = 0.5 + "s";
        conImgOfpopup.style.right = 0;
        imgOfpopup.style.right = 0;
      }, 100);
      conImgOfpopup.style.right = -100 + "%";
      imgOfpopup.style.right = -100 + "%";
      imgOfpopup.setAttribute("src", pageOneItemImg.getAttribute("src"));
      let movieText = document.querySelector(
        ".page-1 .container .movie-popup .container .left .discription p"
      );
      movieText.innerText = paragragh.innerText;

      let titlePopdowny = document.querySelector(
        ".page-1 .container .movie-popup .container .left .title pre .y"
      );

      titlePopdowny.innerText = yearSpan.innerText;

      let titlePopdownc = document.querySelector(
        ".page-1 .container .movie-popup .container .left .title pre .c"
      );
      titlePopdownc.innerText = classification.innerText;

      let titlePop = document.querySelector(
        ".page-1 .container .movie-popup .container .left .title h3"
      );
      titlePop.innerText = nameSpan.innerText;
    };
  }

  let videoPlay = document.querySelector(".intro-page .video");
  let video = document.querySelector(".intro-page .video video");
  let closeBtn = document.querySelector(".video .close-list-btn");

  function playVideo() {
    video.src = "./MoviesWebsiteImages/play-page/Jumanji.mp4";
    videoPlay.classList.remove("hide");

    video.play();
    closeBtn.classList.remove("hide");
  }

  function closeVideo() {
    console.log("hi");
    videoPlay.classList.add("hide");
    closeBtn.classList.add("hide");
    video.pause();
  }

  let coverBg = document.querySelector(".intro-page .item .cover-bg img");
  let coverBgContainer = document.querySelector(".intro-page .item .cover-bg ");

  setInterval(function changeBg() {
    console.log(1);

    if (itemsNumber.length > 0) {
      coverBg.style.transition = 0.5 + "s";
    }

    if (coverBg.getAttribute("src") === "./MoviesWebsiteImages/adventure.jpg") {
      console.log(2);
      coverBg.setAttribute(
        "src",
        "./MoviesWebsiteImages/play-page/play-background.jpg"
      );
    } else {
      coverBg.setAttribute("src", "./MoviesWebsiteImages/adventure.jpg");
    }
  }, 3000);

  let itemsCategory = document.querySelectorAll(
    ".page-2 .container .down-page .item"
  );
  let headsTitle = document.querySelectorAll(
    ".page-2 .container .down-page .item h4"
  );

  itemsCategory.forEach((itemCategory, index) => {
    itemsCategory[index].onmouseenter = function () {
      headsTitle[index].style.left = -100 + "%";
      console.log("hi");
    };
    itemsCategory[index].onmouseleave = function () {
      headsTitle[index].style.left = 10 + "px";
    };
  });

  let moviePopup = document.querySelector(".page-1 .container .movie-popup");
  let popupClose = document.querySelector(
    ".page-1 .container .movie-popup .close-list-btn"
  );
  function closePopUp() {
    moviePopup.classList.add("hide");
    popupClose.classList.add("hide");
  }

  if (itemsNumber.length > 0) {
    moviePopup.style.top = scroll + "px";
  }
}

// close and open list
let list = document.querySelector(".list .nav-bar");
let listBtn = document.querySelector(".list .list-btn");
let listBtnClose = document.querySelector(".list .close-list-btn");
function openList() {
  list.classList.remove("hide");
  listBtn.classList.add("hide");
  listBtnClose.classList.remove("hide");
}

function closeList() {
  list.classList.add("hide");
  listBtn.classList.remove("hide");
  listBtnClose.classList.add("hide");
}
