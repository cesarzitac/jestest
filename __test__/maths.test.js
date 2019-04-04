import { sumar, multiplicar, restar, dividir} from '../maths.js';

describe('calculos matematicos', () => {
    test('prueba de sumas', () => {
        expect(sumar(1,1)).toBe(2);
    })

    test('prueba de resta', () => {
        expect(multiplicar(1,1)).toBe(1);
    })

    test('prueba de restas', () => {
        expect(restar(2,1)).toBe(1);
    })

    test('prueba divisiones', () => {
        expect(dividir(2,1)).toBe(2);
    })
});