const toggleLightBtn = document.getElementById('light-dark-mode');
const body = document.querySelector('body');
const a = Array.from(document.getElementsByClassName('a-light'));
const p = Array.from(document.getElementsByClassName('p-light'));
const title = Array.from(document.getElementsByClassName('title-light'));
const h1Nav = document.getElementById('h1-nav-light');

let toggle = false;

const darkLight = () => {
    a.forEach(el => {
        el.className === 'a-dark' ? el.className = 'a-light' : el.className = 'a-dark'
    });
    p.forEach(el => {
        el.className === 'p-dark' ? el.className = 'p-light' : el.className = 'p-dark'
    });
    title.forEach(el => {
        el.className === 'title-dark' ? el.className = 'title-light' : el.className = 'title-dark'
    });
    toggle === false ? h1Nav.style.backgroundColor = '#050a88' : h1Nav.style.backgroundColor = '#ffe4c4';
    toggle === false ? body.style.backgroundColor = '#050a2c' : body.style.backgroundColor = '#ffebcd';
    toggle = !toggle
};

toggleLightBtn.addEventListener('click', () => {
    darkLight()
})