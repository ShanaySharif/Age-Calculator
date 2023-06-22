describe('calculateAge', () => {
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
      }

      test('it should take a person\'s age in years and return Mercury years', () => {
        const calculator = new Calculator(30);
        const mercuryAge = calculator.calculateMercuryAge();
        expect(mercuryAge).toBe(125);
      });
    // });

    
    test('it should correctly return a users age in Venus years', () =>{
        const venusCalculator = new Calculator (20)
        const venusAge = venusCalculator.calculateVenusAge();
        expect(venusAge).toBe(32.26)
    });
});