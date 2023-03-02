function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'Dark' ? 'Light' : 'Dark';
    root.className = newTheme;
    document.querySelector('.theme-name').textContent = newTheme;
}
function toggleTheme() {
    if (localStorage.getItem('theme') === 'Dark') {
        setTheme('Light');
    } else {
        setTheme('Dark');
    }
}


const toggleBtn = document.querySelector(".theme-toggle");
toggleBtn.addEventListener('click', setTheme)

// API TESTS
const img = document.querySelector('.api-img')

fetch('https://api.giphy.com/v1/gifs/translate?api_key=qYYK4VN0QiCjprWKsTCA6UPAnHrQEAju&s=peepo', {
  mode: 'cors'
})
.then(function(response) {
    return response.json();
  })
  .then(function(response) {
    img.src = response.data.images.original.url;
  });