var image = new Array(
	"assets/captain_america.png",
	"assets/iron_man.png",
	"assets/hawk_eye.png",
	"assets/hulk.png",
	"assets/doctor_strange.png",
	"assets/black_widow.png",
	"assets/thor.png",
	"assets/black_panther.png",
);

var count = 0;
var length = image.length - 1;

function imageSlider(index) {
	count = count + index;

	if (count > length) {
		count = 0;
	}

	if (count < 0) {
		count = length;
	}

	document.IccLogo.src = image[count];

	return false;
}


autoSlideShow();

function autoSlideShow() {
	setInterval("imageSlider(1)", 300);
}