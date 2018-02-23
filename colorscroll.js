let colorChange;

let box = document.getElementById('box');
let text = document.getElementById('bg-text');

let colorRedStart = 235;
let colorGreenEnd = 235;

let scrollRgba;

window.addEventListener('scroll', function(e){

	colorChange = setTimeout(function(){
			//let botPos = text.getBoundingClientRect().bottom;
			let scrolledRatio = window.pageYOffset / text.clientHeight;

			scrollRgba = 'rgba('
			+ Math.round((colorRedStart * (1 - scrolledRatio)))
			+ ', '
			+ Math.round((colorGreenEnd * scrolledRatio))
			+ ', 26, 0.5)';

			box.style.background = scrollRgba;

			}, 250);

}, false);



