const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const tickEl = document.querySelectorAll('.tick');
let tickDegrees = 0;

function setDate() {
	const now = new Date();

	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();

	const secDegrees = ((seconds / 60) * 360) + 90;
	const minDegrees = ((minutes / 60) * 360) + 90;
	const hourDegrees = ((hours / 12) * 360) + 90;

	secondHand.style.transform = `rotate(${secDegrees}deg)`;
	minuteHand.style.transform = `rotate(${minDegrees}deg)`;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

for (let i = 0; i < tickEl.length; i++) {
	tickEl[i].style.transform = `rotate(${tickDegrees}deg)`;
	tickDegrees += 30;
	console.log(tickEl[i]);
}

setInterval(setDate, 1000);