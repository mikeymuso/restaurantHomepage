const mainPage = () => {
    const container = document.getElementById('container')
    const heroImg = document.createElement('div');
    const heroHeader = document.createElement('h1');
    const heroSubtitle = document.createElement('h2');
    const heroBlurb = document.createElement('p');

    heroImg.innerHTML = `<img id="hero-img" src="images/pasta.jpg">`

    heroHeader.innerHTML = `Restaüranté Covïd`;
    heroSubtitle.innerHTML = `- It's going viral -`;
    heroBlurb.innerHTML = `At <span class="feature">Restaurante Covid</span> we aim to deliver you finest in lockdown cuisine. 
    Thanks to our stockpiling of pasta & eggs at the start of lockdown we can 
    deliver you <span class="feature">unparalelled Italian cuisine.</span><br><br>We practically can't get rid 
    of it quick enough! <span class="feature">Come in, take a seat,</span> but not that seat...that's too 
    close to the next table. Take a break from the zoom calls and leave 
    that mask at the door.<br><br>
    
    We incorporate our <span class="feature">secret formula</span> of hand sanitiser directly into our food so you 
    can avoid the hassle of cleaning them yourself. Just chow down and know that <span class="feature">you're 
    safe with us.</span> All our doors & windows are kept fully open all year round so you can 
    enjoy the fresh, freezing cold, winter air from the comfort of your own table 
    (warm clothing is strongly advised).<br><br>
    
    <span class="feature">Once you've dined at Resturante Covid you'll never want to dine anywhere else!</span>`;

    container.append(heroImg, heroHeader, heroSubtitle, heroBlurb);
}

export default mainPage;