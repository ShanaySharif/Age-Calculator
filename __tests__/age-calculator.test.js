class Calculator {
    constructor(number) {
        this.number = number;
    }

    calculateMercuryAge() {
        const mercuryAge = this.number / 0.24;
        return Math.round(mercuryAge * 100) / 100;
    }

    calculateVenusAge() {
        const venusAge = this.number / 0.62;
        return Math.round(venusAge * 100) / 100;
    }

    calculateMarsAge() {
        const marsAge = this.number / 1.88;
        return Math.round(marsAge * 100) / 100;
    }

    calculateJupiterAge() {
        const jupiterAge = this.number / 11.86;
        return Math.round(jupiterAge * 100) / 100;
   
    }

    calculateYearsPassed(age, pastBirthYear) {
        const earthYearsPassed = age - pastBirthYear;
        const yearsPassed = new Calculator(earthYearsPassed)
        const marsYearsPassed = yearsPassed.calculateMarsAge();
        const mercuryYearsPassed = yearsPassed.calculateMercuryAge();
        const venusYearsPassed = yearsPassed.calculateVenusAge();
        const jupiterYearsPassed = yearsPassed.calculateJupiterAge();

        return {earthYearsPassed, marsYearsPassed, mercuryYearsPassed, venusYearsPassed, jupiterYearsPassed};
    }


    // calculateYearsYetToPass()
}

describe('calculateAge', () => {
    test('it should take a person\'s age in years and return Mercury years', () => {
        const calculator = new Calculator(30);
        const mercuryAge = calculator.calculateMercuryAge();
        expect(mercuryAge).toBe(125);
    });

    test('it should correctly return a user\'s age in Venus years', () => {
        const venusCalculator = new Calculator(20);
        const venusAge = venusCalculator.calculateVenusAge();
        expect(venusAge).toBe(32.26);
    });

    test('it should take a person\'s age in years and return their age in Mars years', () => {
        const marsCalculator = new Calculator(35);
        const marsAge = marsCalculator.calculateMarsAge();
        expect(marsAge).toBe(18.62);
    });

    test('it should take a person\'s age in years and return their age in Jupiter years', () => {
        const jupiterCalculator = new Calculator(25);
        const jupiterAge = jupiterCalculator.calculateJupiterAge();
        expect(jupiterAge).toBe(2.11);
    });
});


describe('calculateAge', () => {
    test('it should take a person\'s age in years and return their age in Mars years', () => {
        const calculator = new Calculator();
        const yearsPassed = calculator.calculateYearsPassed(56, 43);
        expect(yearsPassed).toEqual({
            earthYearsPassed: 13, 
            marsYearsPassed: 6.91, 
            mercuryYearsPassed: 54.17, 
            venusYearsPassed: 20.97, 
            jupiterYearsPassed: 1.1
        });
    });

});

