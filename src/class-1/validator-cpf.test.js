const validatorCPF = require('./validator-cpf')

test("should to validate the valid CPF", function () {
    const cpf = '111.444.777-35';
    const validator = validatorCPF.validate(cpf);
    expect(validator).toBeTruthy();
});

test("should to validate the valid CPF", function () {
    const cpf = '173.054.259-07';
    const validator = validatorCPF.validate(cpf);
    expect(validator).toBeTruthy();
});

test("should to validate the invalid CPF with 10 digits", function () {
    const cpf = '000.000.000-0';
    const validator = validatorCPF.validate(cpf);
    expect(validator).toBeFalsy();
});

test("should to validate the CPF is empty", function () {
    const cpf = '';
    const validator = validatorCPF.validate(cpf);
    expect(validator).toBeFalsy();
});

test("should to validate the CPF is null", function () {
    const cpf = null;
    const validator = validatorCPF.validate(cpf);
    expect(validator).toBeFalsy();
});


test("should to validate the CPF is undefinded", function () {
    const cpf =undefined;
    const validator = validatorCPF.validate(cpf);
    expect(validator).toBeFalsy();
});

const invalidCpfWithSameDigits = [
    '000.000.000-00',
    '111.111.111-11'
];

describe.each(invalidCpfWithSameDigits)("should to test a CPF with de digits equals",function (cpf) {
    test(`${cpf}`, function () {
        const validator = validatorCPF.validate(cpf);
    expect(validator).toBeFalsy();
    })
});