import mainPage from './landing_page.js';
import showMenu from './modules/menu.js';
import showContact from './modules/contact.js';

const createContainer = () => {
    const contentDiv = document.querySelector('#content');
    const container = document.createElement('div');
    container.id = 'container';

    contentDiv.append(container);
}

const createBtns = () => {
    const contentDiv = document.querySelector('#content');
    const buttonDiv = document.createElement('div')

    buttonDiv.id = 'button-container'
    buttonDiv.innerHTML = `
        <div class="button active" id="home">Home</div>
        <div class="button" id="menu">Menu</div>
        <div class="button" id="contact">Contact</div>
        `
    contentDiv.prepend(buttonDiv);
}

const setBtnActive = (id) => {
    document.querySelectorAll('.button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}


const addEventListeners = () => {
    const btns = document.querySelector('#button-container') 
    const container = document.querySelector('#container');

    btns.addEventListener('click', (e) => {
        console.log(e.target.id);
        container.innerHTML = ''

        if (e.target.id === 'home') {
            mainPage();
            setBtnActive('home')
        } else if (e.target.id === 'menu') {
            showMenu();
            setBtnActive('menu')
        } else if (e.target.id === 'contact') {
            showContact();
            setBtnActive('contact')
        }
    })
}

const addFooter = () => {
    const contentDiv = document.querySelector('#content');
    const footer = document.createElement('div');

    footer.id = 'footer';
    footer.innerHTML = `<p>Created by <a href="http://www.mikecotton.co.uk">Mike Cotton</a> for an Odin Project Challenge</p>`

    contentDiv.append(footer);
}

const init = () => {
    createContainer();
    createBtns();
    addFooter();
    addEventListeners();
    mainPage(); 
}

init();
