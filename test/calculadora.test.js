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

    test('dba que ganha mais de 2000', () => {
        let props = calculadora.desenvolvedor({
            nome: 'lucas',
            cargo: 'dba',
            salario: 3000.00,
        });

        expect(props.length).toBe(1);
        expect(props[0]).toBeDeepCloseTo({
            
            salarioLiquido: 2250.00
        }, 2);

    });

    test('dba que ganha menos de 2000', () => {
        let props = calculadora.desenvolvedor({
            nome: 'lucas',
            cargo: 'dba',
            salario: 1500.00,
        });

        expect(props.length).toBe(1);
        expect(props[0]).toBeDeepCloseTo({
            
            salarioLiquido: 1275.00
        }, 2);

    });

    test('testador que ganha mais de 2000', () => {
        let props = calculadora.desenvolvedor({
            nome: 'lucas',
            cargo: 'testador',
            salario: 4000.00,
        });

        expect(props.length).toBe(1);
        expect(props[0]).toBeDeepCloseTo({
            
            salarioLiquido: 3000.00
        }, 2);

    });

    test('testador que ganha menos de 2000', () => {
        let props = calculadora.desenvolvedor({
            nome: 'lucas',
            cargo: 'testador',
            salario: 1300.00,
        });

        expect(props.length).toBe(1);
        expect(props[0]).toBeDeepCloseTo({
            
            salarioLiquido: 1105.00
        }, 2);

    });

    test('gerente que ganha mais de 5000', () => {
        let props = calculadora.desenvolvedor({
            nome: 'lucas',
            cargo: 'gerente',
            salario: 7000.00,
        });

        expect(props.length).toBe(1);
        expect(props[0]).toBeDeepCloseTo({
            
            salarioLiquido: 4900.00
        }, 2);

    });

    test('gerente que ganha menos de 5000', () => {
        let props = calculadora.desenvolvedor({
            nome: 'lucas',
            cargo: 'gerente',
            salario: 4500.00,
        });

        expect(props.length).toBe(1);
        expect(props[0]).toBeDeepCloseTo({
            
            salarioLiquido: 3600.00
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