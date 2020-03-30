class Calculadora {

    desenvolvedor(colaborador) {

        /*---CALCULA DEV---*/
        if(colaborador.cargo == 'desenvolvedor'){
        
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

        }else{
            return 'nao valido';
        }

    }


}

module.exports = Calculadora;

