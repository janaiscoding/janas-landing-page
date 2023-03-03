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
async function getAngels() {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=qYYK4VN0QiCjprWKsTCA6UPAnHrQEAju&s=angel`,
    {
      mode: "cors",
    }
  );
  const angelData = await response.json();
  img.src = angelData.data.images.original.url;
}
getAngels();
// API TESTS
async function generateGIF(searchedGif) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=qYYK4VN0QiCjprWKsTCA6UPAnHrQEAju&s=${searchedGif}`,
      {
        mode: "cors",
      }
    );
    const searchedGifData = await response.json();
    img.src = searchedGifData.data.images.original.url;
  } catch (error) {
    if (searchedGif === "") {
      console.log("Please type something in the search bar");
      img.src = "./images/cold-forest.jpg";
    }
  }
}
const getGifBtn = document.querySelector(".new-gif");
getGifBtn.addEventListener("click", () => {
  generateGIF("cat");
});

const searchBar = document.getElementById("search");
const submitButton = document.querySelector(".search-button");

const handleUserInput = function () {
  let searchedGif = searchBar.value;
  return searchedGif;
};

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let searchedGif = handleUserInput();
  generateGIF(searchedGif);
});
