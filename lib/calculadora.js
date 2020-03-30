class Calculadora {

    desenvolvedor(colaborador) {

        /*---CALCULA DEV---*/
        if (colaborador.cargo == 'desenvolvedor') {

            let aux = 0;

            if (colaborador.salario >= 3000) {
                aux = 20;
            } else {
                aux = 10;
            }

            let tabelaSalario = [];
            tabelaSalario.push({

                salarioLiquido: colaborador.salario - ((aux * colaborador.salario) / 100)

            });

            return tabelaSalario;

        }
        /*---CALCULA DBA---*/
        else if (colaborador.cargo == 'dba') {

            let aux = 0;

            if (colaborador.salario >= 2000) {
                aux = 25;
            } else {
                aux = 15;
            }

            let tabelaSalario = [];
            tabelaSalario.push({

                salarioLiquido: colaborador.salario - ((aux * colaborador.salario) / 100)

            });

            return tabelaSalario;

        }
        /*---CALCULA TESTER---*/
        else if (colaborador.cargo == 'testador') {

            let aux = 0;

            if (colaborador.salario >= 2000) {
                aux = 25;
            } else {
                aux = 15;
            }

            let tabelaSalario = [];
            tabelaSalario.push({

                salarioLiquido: colaborador.salario - ((aux * colaborador.salario) / 100)

            });

            return tabelaSalario;
        }
        /*---CALCULA GERENTE---*/
        else if (colaborador.cargo == 'gerente') {

            let aux = 0;

            if (colaborador.salario >= 5000) {
                aux = 30;
            } else {
                aux = 20;
            }

            let tabelaSalario = [];
            tabelaSalario.push({

                salarioLiquido: colaborador.salario - ((aux * colaborador.salario) / 100)

            });

            return tabelaSalario;

        }
        else {
            return 'nao valido';
        }

    }


}

module.exports = Calculadora;

