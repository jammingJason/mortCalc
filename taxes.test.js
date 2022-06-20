describe('calculateTaxes test', function() {
	it('should calculate the hight tax bracket', function() {
		expect(calculateTaxes(50000)).toEqual(12500);
		expect(calculateTaxes(100000)).toEqual(25000);
	});
	it('should calcualate the low tax bracket', function() {
		expect(calculateTaxes(10000)).toEqual(1500);
		expect(calculateTaxes(1000)).toEqual(150);
	});
	it('should reject invalid income', function() {
		expect(() => calculateTaxes('kjnfdgpqwer').toThrowError());
		expect(() => calculateTaxes([]).toThrowError());
		expect(() => calculateTaxes(true).toThrowError());
	});
});

describe('removeDupes test', function() {
	it('should remove duplicate values', function() {
		expect(removeDupes([ 1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 4 ])).toEqual([ 1, 2, 3, 4 ]);
		expect(removeDupes([ 1, 1, 2, 2, 3, 3, 4, 4, 4 ])).toBeInstanceOf(Array);
	});

	it('should remove duplicate values from a string', function() {
		expect(removeDupes('hello')).toEqual('helo');
		expect(removeDupes('hello')).toBeInstanceOf(String);
	});
});

describe('remove tests', function() {
	it('should remove value from array', function() {
		expect(remove([ 1, 2, 3, 4, 5, 6 ], 6)).not.toContain(6);
	});
});

afterEach(function() {});
beforeEach(() => {
	console.log('Before!');
});
beforeAll(() => {
	console.log('Before Everything!');
});
afterAll(() => {
	console.log('After All!');
});
