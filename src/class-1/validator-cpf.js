const FACTOR_DIGIT_ONE = 10;
const FACTOR_DIGIT_TWO = 11;
const LENGTH_CPF = 11;

exports.validate = function (cpf) {
	if (isEmpty(cpf)) return false
	cpf = cleanCpf(cpf);
	if (!isValidCpfLength(cpf)) return false;
	if (hasAllDigitsEquals(cpf)) return false;
	const digitTeen = calculateCheckDigit(cpf, FACTOR_DIGIT_ONE);
	const digitEleven = calculateCheckDigit(cpf, FACTOR_DIGIT_TWO);
	const digitsGenerate = `${digitTeen}${digitEleven}`;
	return digitsGenerate === extractChekDigit(cpf);
}

function isEmpty(cpf) {
	return (cpf==='' || cpf===undefined || cpf===null)
}

function cleanCpf(cpf){
	return cpf.replace(/[.-]+/g,'')
}

function isValidCpfLength(cpf) {
	return cpf.length === LENGTH_CPF;
}

function hasAllDigitsEquals(cpf) {
	const firstDigit = cpf.substring(0, 1);
	return  [...cpf].every(digit => digit === firstDigit);
}

function calculateCheckDigit(cpf, digit) {
	let total = 0
	const cpfWithDigits = cpf.substring(0, digit - 1);
	for (charactere of cpfWithDigits) {
		total = total + (charactere * digit--);
	}
	const  rest = total % LENGTH_CPF;
	const ret = (rest < 2) ? 0 : LENGTH_CPF - rest;
	return ret;
}

function extractChekDigit(cpf) {
	return cpf.slice(-2);
}