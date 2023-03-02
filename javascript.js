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
    promiseTest.then(function (){
        console.log('it worked')
    })
}) 



let promiseTest = new Promise((resolve, reject) => {
    const ctaBtn = document.querySelector('.hero-button')
    setTimeout(function(){
        alert('it worked but 3 seconds later');
      }, 3000);  
      
    if (ctaBtn.innerHTML==="Reach out") {
        resolve('Success')
    }
    else {
        reject("failure")
    }
})

