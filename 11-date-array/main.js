const getLeapYear = (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
function checkDateArr(arr) {
	const newArr = arr.map(el => el.replace(/[/.-]/g, '-')).filter(isValidDate);
	return newArr;
}

function isValidDate(element) {
    const parts = element.split('-').map(Number); 

    const [day, month, year] = parts;

    if (parts.length !== 3 || isNaN(day) || isNaN(month) || isNaN(year)) {
        return false;
    }

    if (month < 1 || month > 12) {
        return false; 
    }

    if (day < 1 || day > 31) {
        return false;
    }

    const daysInMonth = [31, getLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (day > daysInMonth[month - 1]) {
        return false;
    }

    const date = new Date(`${year}-${month}-${day}`);
    return !isNaN(date.getTime());
}

console.log(`Валидные даты: ${checkDateArr(['12-02-2024', '30-02-2024', '15/06/2021', '31-04-2023', '29-02-2020'])}`);