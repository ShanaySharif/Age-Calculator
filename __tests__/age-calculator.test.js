import { Calculator } from "../src/age-calculator";
//UI Logic
describe("calculateAge", () => {
  test("it should take a person's age in years and return Mercury years", () => {
    const calculator = new Calculator(30);
    const mercuryAge = calculator.calculateMercuryAge();
    expect(mercuryAge).toBe(125);
  });
  test("it should correctly return a user's age in Venus years", () => {
    const venusCalculator = new Calculator(20);
    const venusAge = venusCalculator.calculateVenusAge();
    expect(venusAge).toBe(32.26);
  });
  test("it should take a person's age in years and return their age in Mars years", () => {
    const marsCalculator = new Calculator(35);
    const marsAge = marsCalculator.calculateMarsAge();
    expect(marsAge).toBe(18.62);
  });
  test("it should take a person's age in years and return their age in Jupiter years", () => {
    const jupiterCalculator = new Calculator(25);
    const jupiterAge = jupiterCalculator.calculateJupiterAge();
    expect(jupiterAge).toBe(2.11);
  });
});
describe("calculateYearsPassed", () => {
  test("it should take a person's age and past birthday and return and the number of years passed for each planet", () => {
    const calculator = new Calculator();
    const yearsPassed = calculator.calculateYearsPassed(56, 43);
    expect(yearsPassed).toEqual({
      earthYearsPassed: 13,
      marsYearsPassed: 6.91,
      mercuryYearsPassed: 54.17,
      venusYearsPassed: 20.97,
      jupiterYearsPassed: 1.1,
    });
  });
});
describe("calculateYearsYetToPass", () => {
  test("it should take in a year and a future age and return the number of years until that future age is reached", () => {
    const calculator = new Calculator();
    const yearsYetToPass = calculator.calculateYearsYetToPass(36, 46);
    expect(yearsYetToPass).toEqual({
      earthYearsYetToPass: 10,
      marsYearsYetToPass: 5.32,
      mercuryYearsYetToPass: 41.67,
      venusYearsYetToPass: 16.13,
      jupiterYearsYetToPass: 0.84,
    });
  });
});
