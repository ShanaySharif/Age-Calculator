describe('calculateMercuryAge', () => {
    class Calculator {
        constructor(number) {
          this.number = number;
        }
      }
      test('it should take a person\'s age in years and return Mercury years', () => {
        const calculator = new Calculator(30);
        const mercuryAge = calculator.calculateMercuryAge();
        expect(mercuryAge).toBe(125);
      });
    });