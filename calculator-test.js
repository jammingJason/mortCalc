it('should calculate the monthly rate correctly', function() {
	expect(calculateMonthlyPayment({ amount: 250000, years: 30, rate: 0.04 })).toContain(698.63);
});

it('should return a result with 2 decimal places', function() {
	expect(calculateMonthlyPayment({ amount: 250000, years: 30, rate: 0.04 })).toContain(698.63);
});

/// etc
