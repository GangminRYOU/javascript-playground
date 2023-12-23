const timer = setTimeout(() => {
    console.log('gangmin');
}, 3000);


const h1El1 = document.querySelector('h1');
h1El1.addEventListener('click', () => {
    clearTimeout(timer);
});

const interval = setInterval(() => {
    console.log('hihi');
}, 3000);

const h1El2 = document.querySelector('h1');
h1El2.addEventListener('click', () => {
    clearInterval(interval);
});