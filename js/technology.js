const navOptions = document.querySelectorAll('.technology-circle');
const infoParent = document.querySelector('.technology-info');
const option1 = document.querySelector('#technology-circle-1');
const option2 = document.querySelector('#technology-circle-2');
const option3 = document.querySelector('#technology-circle-3');
const image = document.querySelector('.technology-img-wrapper');

const deleteActiveClass = () => {
    navOptions.forEach((option)=>{
        if (option.classList.contains('active')){
            option.classList.remove('active');
        }
    });
}

option1.addEventListener('click', ()=>{
   deleteActiveClass();
   option1.classList.add('active');
   image.innerHTML = '<img src="assets/images/technology/image-launch-vehicle-portrait.jpg" alt="Launch Vehicle"/>';

   infoParent.innerHTML = `
   <div>
        <h4>THE TERMINOLOGY...</h4>
        <h3>LAUNCH VEHICLE</h3>
    </div>
    <p>
        A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
    </p>
   `;
});

option2.addEventListener('click', ()=>{
    deleteActiveClass();
    option2.classList.add('active');
    image.innerHTML = '<img src="assets/images/technology/image-spaceport-portrait.jpg" alt="Spaceport"/>';

    infoParent.innerHTML = `
   <div>
        <h4>THE TERMINOLOGY...</h4>
        <h3>SPACEPORT</h3>
    </div>
    <p>
        A spaceport or cosmodrome is a site for launching(or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.
    </p>
   `;
});

option3.addEventListener('click', ()=>{
    deleteActiveClass();
    option3.classList.add('active');
    image.innerHTML = '<img src="assets/images/technology/image-space-capsule-portrait.jpg" alt="Space Capsule"/>';

    infoParent.innerHTML = `
   <div>
        <h4>THE TERMINOLOGY...</h4>
        <h3>SPACE CAPSULE</h3>
    </div>
    <p>
    A space capsule is an often-crewed spacesraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.
    </p>
   `;
});
