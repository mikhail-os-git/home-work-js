const langAttribute = document.querySelector('html').lang;
const greeting = document.querySelector('.greeting');
const change = document.querySelector('.change-text');
const button = document.getElementById('submit');
const languageSelect = document.getElementById('changeLanguage');
const htmlElement = document.documentElement;

function updateText(lang) {
	let greetingText;
	let changeText;
	let buttonText;

	switch (lang) {
		case 'ru':
			greetingText = 'Привет, добро пожаловать!';
			changeText = 'Вы можете выбрать другой язык.';
			buttonText = 'Сменить язык';
			break;
		case 'en':
			greetingText = 'Hello, welcome!';
			changeText = 'You can choose a different language.';
			buttonText = 'Change the language';
			break;
		case 'de':
			greetingText = 'Hallo, herzlich Willkommen!';
			changeText = 'Sie können eine andere Sprache wählen.';
			buttonText = 'die Sprache ändern';
			break;
		default:
			greetingText = 'Unknown language';
			changeText = 'Please change the language';
	}

	greeting.innerHTML = greetingText;
	change.innerHTML = changeText;
	button.innerHTML = buttonText;
}

updateText(langAttribute);

button.addEventListener('click', () => {
	const selectedLanguage = languageSelect.value;
	htmlElement.lang = selectedLanguage;

	updateText(selectedLanguage);

	console.log('Язык изменен на:', selectedLanguage);
});
