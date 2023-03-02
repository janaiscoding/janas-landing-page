function setTheme() {
  const root = document.documentElement;
  const newTheme = root.className === "Dark" ? "Light" : "Dark";
  root.className = newTheme;
  document.querySelector(".theme-name").textContent = newTheme;
}

function toggleTheme() {
  if (localStorage.getItem("theme") === "Dark") {
    setTheme("Light");
  } else {
    setTheme("Dark");
  }
}

const toggleBtn = document.querySelector(".theme-toggle");
toggleBtn.addEventListener("click", setTheme);

//SET INITIAL IMAGE

const img = document.querySelector(".api-img");
fetch(
  `https://api.giphy.com/v1/gifs/translate?api_key=qYYK4VN0QiCjprWKsTCA6UPAnHrQEAju&s=angel`,
  {
    mode: "cors",
  }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });

// API TESTS
const generateGIF = function () {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=qYYK4VN0QiCjprWKsTCA6UPAnHrQEAju&s=${searchedGif}`,
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch(function () {
      if (searchedGif === "") {
        alert("Please type something in the search bar");
        return;
      }
    });
};
const getGifBtn = document.querySelector(".new-gif");
getGifBtn.addEventListener("click", () => {
  searchedGif = "cat";
  generateGIF()
});

const searchBar = document.getElementById("search");
const submitButton = document.querySelector(".search-button");
let searchedGif;

const handleUserInput = function () {
  searchedGif = searchBar.value;
  return searchedGif;
};

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  handleUserInput();
  generateGIF();
});
