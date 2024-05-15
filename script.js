"use script";

document.querySelector(".btn-sign-up").addEventListener("click", function (e) {
	e.preventDefault();
	const id = e.target.getAttribute("href");
	document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

function playMusic() {
	const music = new Audio("sound/bullet.wav");
	music.play();
}
