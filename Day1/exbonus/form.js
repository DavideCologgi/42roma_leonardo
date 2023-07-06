function validateUni() {
	var universityInput = document.getElementById('universities');
	var universityValue = universityInput.value.trim();

	if (universityValue === '') {
		return false;
	}
	return true;
}

function validateZipCode() {
	var zipCodeInput = document.getElementById('zip_code');
	var zipCodeValue = zipCodeInput.value.trim();

	var isValidZipCode = /^\d{5}$/.test(zipCodeValue);

	zipCodeInput.setCustomValidity(isValidZipCode ? '' : 'Invalid ZIP code');
}

function validateJob() {
	let job = document.getElementById("job_description");
	console.log("change");

	if (document.getElementById("worker").checked == true)
		job.setAttribute("required", true);
	else
		job.removeAttribute("required");
}
