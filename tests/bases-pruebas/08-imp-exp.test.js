import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";



describe('Pruebas en  08-imp-exp', () => { 

    test('getHeroeById debe de retornar un heroe por ID', () => { 

        const id = 1;

        const hero = getHeroeById(id);

        expect(hero.id).toEqual(1);

     })


     test('getHeroeById debe de retornar un undefined si no existe', () => { 

        const id = 100;

        const hero = getHeroeById(id);

        expect(hero).toBe(undefined);
        // expect( hero ).toBeFalsy();

     })


     test('getHeroesByOwner debe de retornar un arreglo con los heroes de DC', () => {

        const owner = 'DC';

        const heros = getHeroesByOwner(owner);
        
        expect(heros.length).toEqual(3);

     })

     test('getHeroesByOwner debe de retornar un arreglo con los heroes de Marvel', () => {

        const owner = 'Marvel';

        const heros = getHeroesByOwner(owner);
        
        expect(heros.length).toEqual(2);

     })


 })