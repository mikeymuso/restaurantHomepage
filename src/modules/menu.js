const menuItems = [
    {title: '14-Day Aged Rump Steak', desc: 'Selected from the finest cows, quarantined for 14 days to ensure virus free meat. Served with buttered potatoes & one carrot', price: 24.99},
    {title: 'Pasta Carbonara', desc: 'Made with creamy things, and cheese. Served with extra cheese.', price: 16.99},
    {title: 'Lasagne', desc: 'Meat, pasta, cheese. That\'s all', price: 11.99},
]

const createMenuList = () => {
    let menuList = '';
    menuItems.forEach(({title, desc, price}) => {
        menuList += `
            <li>
                <h3>${title}</h3>
                <p class="menu-desc">${desc}</p>
                <p class="price">${price}</p>
            </li>`
    })
    return menuList;
};


const showMenu = () => {
    const container = document.getElementById('container')
    const menuContainer = document.createElement('div');
    const menuTitle = document.createElement('h1');
    const menuList = document.createElement('ul');

    menuContainer.id = 'menu-container';
    menuList.id = 'menu-list';

    menuTitle.innerHTML = 'Menu'
    menuList.innerHTML = createMenuList();

    menuContainer.append(menuTitle, menuList);
    container.append(menuContainer);
}


export default showMenu;

