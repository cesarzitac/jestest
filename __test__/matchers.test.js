import { exportAllDeclaration } from "@babel/types";

describe('comparadores comunes', () => {
    const user = {
        name: 'julio',
        apellido: 'zitac'
    }
    const user2 = {
        name: 'cesar',
        apellido: 'zitac'
    }

    test('igualdad de elementos', () => {
        expect(user).toEqual(user2);
    });
    test('no son exactamente iguales', () => {
        expect(user).not.toEqual(user2);
    });
})