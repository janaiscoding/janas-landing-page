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