import { getSaludo } from "../../src/base-pruebas/02-template-string";


describe('Pruebas en 02-template-string', () => {

    test('getSaludo debe de retornar "Hola Fernando"', () => {

        const name = 'Gonzalo';
        const message = getSaludo( name );
        // console.log(message);

        expect( message ).toBe(`Hola ${ name }`);


    });
});