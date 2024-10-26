let array = new Array(12).fill(0);
array = fillArray(array,300, 1);

const valueToDelete = 100;

function fillArray(arr, max, min){
	for(let index in arr) {
		arr[index] = Math.floor(Math.random() * (max - min + 1)) + min;
	}
	return arr;
}

function checkArr(arr, value)  {
          for(let el of arr){
						if(el > value) {
							return true
						}
					}
					return false;
}

function valueRemove(arr, value, checkFn) {
	const isToDelete = checkFn(arr, value);
    if(isToDelete) {
      for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] > value) {
                arr.splice(i, 1); 
            }
        }
        return arr;
			}
		else {
			return false;
				}
}

console.log(valueRemove(array, valueToDelete, checkArr));