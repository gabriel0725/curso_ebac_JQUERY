$(document).ready(function () {

    // Aplica uma máscara ao campo de telefone
    $('#telefone').mask('(00) 00000-0000');

    // Aplica uma máscara ao campo de cpf
    $('#cpf').mask('000.000.000-00');

    // Aplica uma máscara ao campo de cep
    $('#CEP').mask('00000-000');

    // Configura a validação do formulário
    $('form').validate({
        rules: {
            nome: {
                required: true // Campo de nome é obrigatório
            },
            email: {
                required: true, // Campo de email é obrigatório
                email: true     // Deve ser um email válido
            },
            telefone: {
                required: true // Campo de telefone é obrigatório
            },
            cpf: {
                required: true // Campo de CPF é obrigatório
            },
            endereço: {
                required: true // Campo de endereço é obrigatório
            },
            CEP: {
                required: true // Campo de CEP é obrigatório
            }
        },
        messages: {
            nome: 'Por favor, insira o nome' // Mensagem de erro para o campo de nome
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`); // Alerta sobre campos inválidos
            }
        }
    });
});
