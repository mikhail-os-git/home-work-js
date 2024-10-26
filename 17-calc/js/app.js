const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const output = document.getElementById('result');
const solve = document.getElementById('solve');
const panel = document.querySelector('.result-container');


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

		function show(result) {
			panel.classList.remove('none');
			output.innerText = result;
			input1.value = '';
			input2.value = '';
		}

function calculate(){
		if(operator){
		const num1 = input1.value;
		const num2 = input2.value;
		if (num1 !== '' && num2 !== '' && !isNaN(num1) && !isNaN(num2)) {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
					if(operator == operators[0]) {
						show(n1 + n2);
					} else if(operator == operators[1]) {
						show(n1 - n2);
					} else if(operator == operators[2]) {
						show(n1 * n2);
					} else if(operator == operators[3]) {
            if (n2 !== 0) {
                show(n1 / n2);
            } else {
                show('Ошибка: деление на ноль');
            }
					}
				} else {
					show('В полях должно быть число');
				}
			} else {
				show('Вы не выбрали операцию');
			}
}
solve.addEventListener('click', calculate);
