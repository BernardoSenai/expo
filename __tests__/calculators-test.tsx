import { describe, expect, test } from '@jest/globals';
import { calcDelta } from '../src/app/calculadora/bhaskara';
import { Pitagoras } from '../src/app/calculadora/pitagoras';

describe('Bhaskara', () => {
  test('Delta negativo', () => {
      // Dado / Arrange
      const a = 1;
      const b = 1;
      const c = 1;
      // Quando / Act
      const resultado = calcDelta(a, b, c);
  
      // Então / Assert
      expect(resultado).toBeLessThan(0);
    });
    test('Delta zerado', () => {
      // Dado / Arrange
      const a = 1;
      const b = 2;
      const c = 1;
      // Quando / Act
      const resultado = calcDelta(a, b, c);
  
      // Então / Assert
      expect(resultado).toBe(0);
    });
});

describe('Pitagoras', () => {
    test('Hipotenusa', () => {
        const a = 10
        const b = 10
        const h = 0
        const resultado = Pitagoras(a,b,h)
        expect(resultado).toBe(14.14) 
    });
});

describe('Pitagoras', () => {
    test('CatetoB', () => {
        const a = 10
        const b = 0
        const h = 20
        const resultado = Pitagoras(a,b,h)
        expect(resultado).toBe(17.3) 
    });
});

describe('Pitagoras', () => {
    test('CatetoA', () => {
        const a = 0
        const b = 10
        const h = 20
        const resultado = Pitagoras(a,b,h)
        expect(resultado).toBe(17.3) 
    });
});