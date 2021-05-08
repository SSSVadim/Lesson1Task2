function toCalc() {
	let firstValue = prompt('Введите первое число'); 
	if (validateInput(firstValue)){
		errorMsg()
		return		
	}

	let secondValue = prompt('Введите второе число'); 
	if (validateInput(secondValue)){
		errorMsg()
		return		
	}

	result = `Ответ: ${+firstValue + +secondValue}, ${firstValue / secondValue}`;
	console.log(result);
}

toCalc();

function validateInput(value){
	return isNaN(value) || !value || !value.trim()
}

function errorMsg(){
	console.log("Некорректный ввод!");
}