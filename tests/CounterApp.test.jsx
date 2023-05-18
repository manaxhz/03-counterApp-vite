import {fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"

describe('Pruebas en <CounterApp />', () => { 

    const initialValue= 100;

    test('debe de hacer match con el snapshoot', () => { 
        
        const {container} = render(<CounterApp />)

        expect(container).toMatchSnapshot();


     })

     test('debe de mostrar el valor inicial de 100', () => { 

        render(<CounterApp />)

        expect( screen.getByText(initialValue)).toBeTruthy();


      })

    test('debe de incrementar con el boton +1', () => { 

        render(<CounterApp />)
        fireEvent.click(screen.getByText('+1') )
        expect( screen.getByText('101')).toBeTruthy();

     })

     test('debe de decrementar con el boton -1', () => { 

        render(<CounterApp />)
        fireEvent.click(screen.getByText('-1') )
        // screen.debug()
        expect( screen.getByText('99')).toBeTruthy();

     })
     
     test('debe de funcionar el boton de reset', () => { 

        render(<CounterApp />)
        fireEvent.click(screen.getByText('-1') )
        fireEvent.click(screen.getByText('-1') )
        fireEvent.click(screen.getByText('-1') )

        // fireEvent.click(screen.getByText('reset') )
        // screen.debug()

        fireEvent.click( screen.getByRole('button', { name: 'btn-reset'}) )


        expect( screen.getByText('100')).toBeTruthy();

     })




 })