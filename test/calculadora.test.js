const {toBeDeepCloseTo}
    = require('jest-matcher-deep-close-to');
expect.extend({toBeDeepCloseTo});

const Calculadora = require('../lib/calculadora');
const calculadora = new Calculadora();

describe('Calculadora', () => {

    test('desenvolvedor que ganha mais de 3000', () => {
        let props = calculadora.desenvolvedor({
            nome: 'lucas',
            cargo: 'desenvolvedor',
            salario: 3000.00,
        });

        expect(props.length).toBe(1);
        expect(props[0]).toBeDeepCloseTo({
            
            salarioLiquido: 2400.00
        }, 2);

    });

    test('desenvolvedor que ganha menos de 3000', () => {
        let props = calculadora.desenvolvedor({
            nome: 'lucas',
            cargo: 'desenvolvedor',
            salario: 2000.00,
        });

        expect(props.length).toBe(1);
        expect(props[0]).toBeDeepCloseTo({
            
            salarioLiquido: 1800.00
        }, 2);

    });


    test('entrada invalida', () => {
        let props = calculadora.desenvolvedor({
            nome: 'lucas',
            cargo: 'ddd',
            salario: 1500.00,
        });

        expect(props.length).toBe(10);
        expect(props).toBe(
            
            'nao valido'
        );

    });


});