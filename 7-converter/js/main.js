const baseCurrency = "RUB";
const targetCurrency = "USD";
const amountSum = 100;

const result = convert(baseCurrency, targetCurrency, amountSum);

console.log(`${result !== null ? `Ваша сумма из ${baseCurrency} в ${targetCurrency} успешно конвертирована, ваш счёт в ${targetCurrency} : ${result}` : 'В нашем банке невозможно обменять эту валюту'}`);


function convert(base, target, amount){
	let isPossible = possibleConversion(target);
	let converted = null;
	if(isPossible) {
		if(base == "RUB" && target == "USD") {
			converted = parseFloat(amount / 94.22);
		}
		if(base == "RUB" && target == "EUR"){
			converted = parseFloat(amount / 105.26);
		}
		if(base == "USD" && target == "RUB")
		{
			converted = parseFloat(amount * 94.22);
		}
		if(base == "EUR" && target == "RUB")
		{
			converted = parseFloat(amount * 105.26);
		}
		if(base == "USD" && target == "EUR"){
			converted = parseFloat(amount * 0.90);
		}
		if(base == "EUR" && target == "USD"){
			converted = parseFloat(amount / 0.90);
		}
	}

	return converted;

}

function possibleConversion(target) {
	return target == "RUB" || target == "USD" || target == "EUR";
}
