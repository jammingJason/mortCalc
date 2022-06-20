window.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('calc-form');
	if (form) {
		setupIntialValues();
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: +document.getElementById('loan-amount').value,
		years: +document.getElementById('loan-years').value,
		rate: +document.getElementById('loan-rate').value
	};
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	const newObject = {};
	newObject['amount'] = document.getElementById('loan-amount').value = 250000;
	newObject['years'] = document.getElementById('loan-years').value = 30;
	newObject['rate'] = document.getElementById('loan-rate').value = 0.04;
	calculateMonthlyPayment(newObject);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	calculateMonthlyPayment(getCurrentUIValues());
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	let amount = values.amount;
	let years = values.years;
	let rate = values.rate;
	const monthlyRate = rate / 100 / 12;
	const n = Math.floor(years * 12);
	let monthlyAmount = monthlyRate * amount / (1 - Math.pow(1 + monthlyRate, -n));

	updateMonthly(monthlyAmount.toFixed(2));
	return monthlyAmount.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	// alert(monthly);
	const shownAmount = document.querySelector('#monthly-payment');
	// shownAmount.innerHTML = '$' + monthly;
}
