function calculate() {
	var first_num = parseFloat(document.getElementById("fnum").value);
	var second_num = parseFloat(document.getElementById("snum").value);
	var operation = document.getElementById("operation").value;
	var final_num = document.getElementById("result");

	if (isNaN(first_num) || isNaN(second_num)) {
		final_num.textContent = "I'm a calculator.....use numbers";
		return ;
	}
	if (first_num < 0 || second_num < 0) {
		final_num.textContent = "I'm tired, use only positive numbers please";
		return ;
	}
	var result;
	switch (operation) {
		case "+":
			result = first_num + second_num;
			console.log("Sum: ", result);
			break;
		case "-":
			result = first_num - second_num;
			console.log("Difference: ", result);
			break;
		case "*":
			result = first_num * second_num;
			console.log("Product: ", result);
			break;
		case "/":
			if (second_num == 0) {
				alert("Division by zero....really bro!?");
				return ;
			}
			result = first_num / second_num;
			console.log("Division: ", result);
			break;
		default:
			final_num.textContent = "Please choose fast an operation cause I'm tired";
			return ;
	}
	final_num.textContent = "Finally...the result is: " + result;
}

setInterval(function() {
	alert("Please, use me...");
}, 30000);