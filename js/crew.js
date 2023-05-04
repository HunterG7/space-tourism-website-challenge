const crewMemberImg = document.querySelector('.img-wrapper');
const crewInfo = document.querySelector('.crew-col');
const navOptions = document.querySelectorAll('.crew-nav-row div');
const member1 = document.querySelector('#crew-member-1');
const member2 = document.querySelector('#crew-member-2');
const member3 = document.querySelector('#crew-member-3');
const member4 = document.querySelector('#crew-member-4');

const deleteActiveClass = () => {
	navOptions.forEach((option)=>{
		if (option.classList.contains('active')){
			option.classList.remove('active');
		}
	});
}

// member 1
member1.addEventListener('click', ()=>{
	deleteActiveClass();
	member1.classList.add('active');
	crewMemberImg.innerHTML = `<img src="assets/images/crew/image-douglas-hurley.png" alt="Douglas Hurley">`

	crewInfo.innerHTML = `
		<h3>COMMANDER</h3>
		<h2>DOUGLAS HURLEY</h2>
		<p>
			Douglas Gerald Hurley is an American engineer, former Marine Corps pilot
			and former NASA astronaut. He launched into space for the third time as
			commander of Crew Dragon Demo-2.
		</p>
	`;
});

// member 2
member2.addEventListener('click', ()=>{
	deleteActiveClass();
	member2.classList.add('active');
	crewMemberImg.innerHTML = `<img src="assets/images/crew/image-mark-shuttleworth.png" alt="Mark Shuttleworth">`

	crewInfo.innerHTML = `
		<h3>MISSION SPECIALIST</h3>
		<h2>MARK SHUTTLEWORTH</h2>
		<p>
			Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.
		</p>
	`;
});

// member 3
member3.addEventListener('click', ()=>{
	deleteActiveClass();
	member3.classList.add('active');
	crewMemberImg.innerHTML = `<img src="assets/images/crew/image-victor-glover.png" alt="Victor Glover">`

	crewInfo.innerHTML = `
		<h3>PILOT</h3>
		<h2>VICTOR GLOVER</h2>
		<p>
			Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. 
		</p>
	`;
});

// member 4
member4.addEventListener('click', ()=>{
	deleteActiveClass();
	member4.classList.add('active');
	crewMemberImg.innerHTML = `<img src="assets/images/crew/image-anousheh-ansari.png" alt="Anousheh Ansari">`

	crewInfo.innerHTML = `
		<h3>FLIGHT ENGINEER</h3>
		<h2>ANOUSHEH ANSARI</h2>
		<p>
			Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. 
		</p>
	`;
});
