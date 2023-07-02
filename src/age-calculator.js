//Buisness Logic
export class Calculator {
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
    const yearsPassed = new Calculator(earthYearsPassed);
    const marsYearsPassed = yearsPassed.calculateMarsAge();
    const mercuryYearsPassed = yearsPassed.calculateMercuryAge();
    const venusYearsPassed = yearsPassed.calculateVenusAge();
    const jupiterYearsPassed = yearsPassed.calculateJupiterAge();
    return {
      earthYearsPassed,
      marsYearsPassed,
      mercuryYearsPassed,
      venusYearsPassed,
      jupiterYearsPassed,
    };
  }
  calculateYearsYetToPass(age, futureAge) {
    const earthYearsYetToPass = futureAge - age;
    const years = new Calculator(earthYearsYetToPass);
    const marsYearsYetToPass = years.calculateMarsAge();
    const mercuryYearsYetToPass = years.calculateMercuryAge();
    const venusYearsYetToPass = years.calculateVenusAge();
    const jupiterYearsYetToPass = years.calculateJupiterAge();
    return {
      earthYearsYetToPass,
      marsYearsYetToPass,
      mercuryYearsYetToPass,
      venusYearsYetToPass,
      jupiterYearsYetToPass,
    };
  }

}
