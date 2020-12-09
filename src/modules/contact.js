const showContact = () => {
    const container = document.getElementById('container');

    const contactContainer = document.createElement('div');
    const mapContainer = document.createElement('div');
    const detailsContainer = document.createElement('div');

    contactContainer.id = 'contact-container';
    mapContainer.id = 'map-left';
    detailsContainer.id = 'details-right';

    mapContainer.innerHTML = `<img class="map" src="images/map.png">`
    detailsContainer.innerHTML = `
        <div class="address">
            123 Corona Avenue,<br>London,<br>CV1 9D
        </div>
        <div class="contact">
            <p>Tel: 0830 1985743</p>
            <p>Email: restaurante_covid@viral.com</p>
        </div>`

    
    contactContainer.append(mapContainer, detailsContainer);
    container.append(contactContainer);
}

export default showContact;