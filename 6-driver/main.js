const hasLicense = true;
const are = 18;
const isDrunk = false;

const canDrive = (are <= 18) && hasLicense && !isDrunk;

console.log(
	`Имеет право управлять транспортным средством: ${canDrive ? 'Да' : 'Нет'}`
);
