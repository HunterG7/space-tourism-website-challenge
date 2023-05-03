const sitePages = document.querySelectorAll('.nav-item');

const destinationNav = document.querySelectorAll('#planet-nav p');
const destinationMoon = document.querySelector('#moon');
const destinationMars = document.querySelector('#mars');
const destinationEuropa = document.querySelector('#europa');
const destinationTitan = document.querySelector('#titan');
const destinationParent = document.querySelector('.planet-info');
const imageWrapper = document.querySelector('.img-wrapper');

// adds underline to nav bar item to indicate the active page
window.addEventListener('load',(e)=>{
    let pagePath = e.currentTarget.location.pathname;
    let pageName = pagePath.substring(33, pagePath.length - 5);
    sitePages.forEach((page)=>{
         if (page.classList.contains('active')){
             page.classList.remove('active');
         }
    });
    switch (pageName) {
        case 'index':
            sitePages[0].classList.add('active');
            break;
        case 'destination':
            sitePages[1].classList.add('active');
            break;
        case 'crew':
            sitePages[2].classList.add('active');
            break;
        case 'technology':
            sitePages[3].classList.add('active');
            break;
    }
});

// destination page: changes html based on planet chosen
const deleteActiveClass = () => {
    destinationNav.forEach((planet)=>{
        if (planet.classList.contains('active')){
            planet.classList.remove('active');
        }
    });
}

// MOON
destinationMoon.addEventListener('click', ()=>{
    deleteActiveClass();
    destinationMoon.classList.add('active');
    imageWrapper.innerHTML = `<img src="assets/images/destination/image-moon.png" alt="Moon">`;

    destinationParent.innerHTML = `
        </div>
        <h3>MOON</h3>
        <p>
            See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
        </p>
        <div class="row statistics-row">
            <div class="column statistics">
                <p>AVG. DISTANCE</p>
                <h4>384,400 KM</h4>
            </div>
            <div class="column statistics">
                <p>EST. TRAVEL TIME</p>
                <h4>3 DAYS</h4>
            </div>
        </div>`;
});

// MARS
destinationMars.addEventListener('click', ()=>{
    deleteActiveClass();
    destinationMars.classList.add('active');
    imageWrapper.innerHTML = `<img src="assets/images/destination/image-mars.png" alt="Mars">`;

    destinationParent.innerHTML =`
        <h3>MARS</h3>
        <p>
            Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!
        </p>
        <div class="row statistics-row">
            <div class="column statistics">
                <p>AVG. DISTANCE</p>
                <h4>225 MIL. KM</h4>
            </div>
            <div class="column statistics">
                <p>EST. TRAVEL TIME</p>
                <h4>9 MONTHS</h4>
            </div>
        </div>`;
});

// EUROPA
destinationEuropa.addEventListener('click', ()=>{
    deleteActiveClass();
    destinationEuropa.classList.add('active');
    imageWrapper.innerHTML = `<img src="assets/images/destination/image-europa.png" alt="Europa">`;

    destinationParent.innerHTML = `
        <h3>EUROPA</h3>
        <p>
            The smallest of the four Galilean moons orbiting Jupiter, Europa is a
            winter lover’s dream. With an icy surface, it’s perfect for a bit of
            ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
        </p>
        <div class="row statistics-row">
            <div class="column statistics">
                <p>AVG. DISTANCE</p>
                <h4>628 MIL. KM</h4>
            </div>
            <div class="column statistics">
                <p>EST. TRAVEL TIME</p>
                <h4>3 YEARS</h4>
            </div>
        </div>`;
});

// TITAN
destinationTitan.addEventListener('click', ()=>{
    deleteActiveClass();
    destinationTitan.classList.add('active');
    imageWrapper.innerHTML = `<img src="assets/images/destination/image-titan.png" alt="Titan">`;

    destinationParent.innerHTML = `
        <h3>TITAN</h3>
        <p>
            The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
        </p>
        <div class="row statistics-row">
            <div class="column statistics">
                <p>AVG. DISTANCE</p>
                <h4>1.6 BIL. KM</h4>
            </div>
            <div class="column statistics">
                <p>EST. TRAVEL TIME</p>
                <h4>7 YEARS</h4>
            </div>
        </div>`;
});

