const way = document.getElementById('way');
const button = document.getElementById('submit');
const position = document.getElementById('position');
const distantion = document.getElementById('distantion');

function getResult(event) {
	event.preventDefault();
	const positionLatitude = document.getElementById('positionLatitude').value;
	const positionLongitude = document.getElementById('positionLongitude').value;

	const destinationLatitude = document.getElementById(
		'destinationLatitude'
	).value;

	const destinationLongitude = document.getElementById(
		'destinationLongitude'
	).value;

	position.innerHTML = `${positionLatitude} ${positionLongitude}`;
	distantion.innerHTML = `${destinationLatitude} ${destinationLongitude}`;

	const sumPosition = (destinationLatitude - positionLatitude) ** 2;
	const sumDistantion = (destinationLongitude - positionLongitude) ** 2;
	const result = Math.sqrt(sumPosition + sumDistantion);
	way.innerHTML = result.toFixed(2);
}

button.addEventListener('click', getResult);
