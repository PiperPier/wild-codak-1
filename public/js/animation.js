
// Mobile menu
let btn  = document.querySelector('.fas');
let nav  = document.querySelector('.nav-header');
let main = document.querySelector('body');

let opnPage = document.querySelector('.opening-page');
let openBtn = document.querySelector('.open-btn');
let hideBtn = document.querySelector('.opening-btn');
let leftImg = document.querySelector('.open1');
let rightImg = document.querySelector('.open2');
let video = document.querySelector('video');
let scrVideo = document.querySelector('.contain-video');

// Desktop slider
let slider = [];
const path = '../public/photos/';

// Afficher le bouton skip video dans un interval de temps.
const timesWhow = () =>{

	let skipBtn = document.querySelector('.skip-video');

	skipBtn.style.display = "block";

	const skipIntro =()=>{
				skipBtn.addEventListener('click',()=>{
				video.classList.add('skip')
				skipBtn.style.display = "none"
				scrVideo.style.display="none"		
			})
	}
		skipIntro()
}

// Animation menu mobile
btn.addEventListener('click',()=>{

		switch (this.className){

				case 'fas fa-bars fa-2x' :
				this.className = "fas fa-arrow-left fa-2x";
				break;

				case 'fas fa-arrow-left' :
				this.className =  'fas fa-bars fa-2x'
				break;

				default:
				this.className =  'fas fa-bars fa-2x'
				break;
		}

		 nav.classList.toggle('slideDown');	
		 main.classList.toggle('noscroll');
		 
});

// Animation à l'ouverture du site.
openBtn.addEventListener('click',()=>{

			hideBtn.style.display='none';
			leftImg.classList.add('opening-l')
			rightImg.classList.add('opening-r');
			opnPage.style.visibility='hidden';
			video.autoplay="true"
			video.load();
			setTimeout(timesWhow,7000)	// Appel de ma function timeshow en L27	
});


/********************************************
 PAGE : galerie-photos EN COURS DE DEV
 ********************************************/

	let like = document.querySelector('.click').

		like.addEventListener('click',()=>{

	})

// Animation
window.addEventListener('scroll',function(){
	console.log(window.pageYOffset);
})





