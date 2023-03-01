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

const ctaBtn = document.querySelector('.hero-button')
ctaBtn.addEventListener('click', () => {
    promiseTest.then( 
        console.log('you waited')
    )
}) 
let promiseTest = new Promise((resolve, reject) => {
    
    setTimeout( () => {
        const ctaBtn = document.querySelector('.hero-button')
        if(ctaBtn.innerHTML === "Reach out"){
            resolve(ctaBtn.innerHTML === "You clicked")
        }
        else{
             reject("meow")
            }
    }, 300)

})