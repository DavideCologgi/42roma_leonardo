function calculate() {
	const firstNumInput: HTMLInputElement = document.getElementById("fnum") as HTMLInputElement;
	const secondNumInput: HTMLInputElement = document.getElementById("snum") as HTMLInputElement;
	const operationSelect: HTMLSelectElement = document.getElementById("operation") as HTMLSelectElement;
	const resultParagraph: HTMLParagraphElement = document.getElementById("result") as HTMLParagraphElement;

	const firstNum: string = firstNumInput.value.trim();
	const secondNum: string = secondNumInput.value.trim();
	const operation: string = operationSelect.value;
  
	let result: number | string;
  
	if (firstNum === "" || secondNum === "") {
		const randomNum1: number = Math.floor(Math.random() * 100);
	  	const randomNum2: number = Math.floor(Math.random() * 100);
  
	  	const num1: number = firstNum === "" ? randomNum1 : parseFloat(firstNum);
	  	const num2: number = secondNum === "" ? randomNum2 : parseFloat(secondNum);
  
	  	if (num1 >= 0 && num2 >= 0) {
			switch (operation) {
		  		case "+":
					result = num1 + num2;
					break;
		  		case "-":
					result = num1 - num2;
					break;
		  		case "*":
					result = num1 * num2;
					break;
		  		case "/":
					if (num2 == 0)
					{
						alert("Division by zero.....really?!");
						result = "Division by zero.....really?!";
						break ;
					}
					result = num1 / num2;
					break;
		  		default:
					alert("Please choose an operation");
					result = "Invalid operation";
					break;
			}
			console.log(result);
		}
	  	else
			result = "Numbers should be positive";
		resultParagraph.textContent = `Result: ${result}`;
	}
	else {
	  	const num1: number = parseFloat(firstNum);
	  	const num2: number = parseFloat(secondNum);
  
	  	if (num1 >= 0 && num2 >= 0) {
			switch (operation) {
		  		case "+":
					result = num1 + num2;
					break;
		  		case "-":
					result = num1 - num2;
					break;
		  		case "*":
					result = num1 * num2;
					break;
		  		case "/":
					if (num2 == 0)
					{
						alert("Division by zero.....really?!");
						result = "Division by zero.....really?!";
						break ;
					}
					result = num1 / num2;
					break;
		  		default:
					alert("Please choose an operation");
					result = "Invalid operation";
					break;
			}
	  	} 
	  	else {
			if (isNaN(num1) || isNaN(num2)) {
				alert("I'm a calculator.....use numbers");
				result = "I'm a calculator.....use numbers";
			}
			else {
				alert("Please use only positive numbers");
				result = "Numbers should be positive";
	  		}
		}
	resultParagraph.textContent = `Result: ${result}`;
	}
}