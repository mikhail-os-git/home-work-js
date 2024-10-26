const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const output = document.querySelector('.result');
const solve = document.getElementById('solve');


const operations = document.querySelectorAll('.operation-btn');
const operators = [];
operations.forEach(el => operators.push(el.id));
console.log(operators);


let operator;
	operations.forEach(operation => {
			operation.addEventListener('click', function() {
				operator = this.id;
				console.log(operator);
			});
		});

function calculate(){
		if(operator){
		const num1 = input1.value;
		const num2 = input2.value;
		if (num1 !== '' && num2 !== '' && !isNaN(num1) && !isNaN(num2)) {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
					if(operator == operators[0]) {
						result.innerText = n1 + n2;
					} else if(operator == operators[1]) {
						result.innerText = n1 - n2;
					} else if(operator == operators[2]) {
						result.innerText = n1 * n2;
					} else if(operator == operators[3]) {
            if (n2 !== 0) {
                output.innerText = n1 / n2;
            } else {
                output.innerText = "Ошибка: деление на ноль";
            }
					}
				} else {
					result.innerText = 'В полях должно быть число';
				}
			} else {
				result.innerText = "Вы не выбрали операцию";
			}

			input1.value = '';
			input2.value = '';


}
solve.addEventListener('click', calculate);
