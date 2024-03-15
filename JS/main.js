$(document).ready(function () {
    // Inicialização do carrossel de imagens usando o plugin "slick"
    $('#carousel-imagens').slick({
        autoplay: true, // Auto reprodução ativada
        arrows: false   // Desativação das setas de navegação
    });

    // Adiciona um evento de clique ao botão do menu hamburguer para mostrar/esconder a navegação
    $('.menu-hamburger').click(function () {
        $('nav').slideToggle(); // Alternância da visibilidade da navegação
    });

    // Aplica uma máscara ao campo de telefone
    $('#telefone').mask('(00) 00000-0000');

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
            mensagem: {
                required: true // Campo de mensagem é obrigatório
            },
            veiculoDeInteresse: {
                required: false // Campo de veículo de interesse não é obrigatório
            }
        },
        messages: {
            nome: 'Por favor, insira o nome' // Mensagem de erro para o campo de nome
        },
        submitHandler: function(form) {
            console.log(form); // Mostra os dados do formulário no console quando enviado com sucesso
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`); // Alerta sobre campos inválidos
            }
        }
    });
});

// Adiciona um evento de clique aos botões dentro da lista de veículos
$('.lista-veiculos button').click(function(){
    // Define o destino da rolagem suave e obtém o nome do veículo clicado
    const destino = $('#contato');
    const nomeVeiculo = $(this).parent().find('h3').text();

    // Atualiza o valor do campo "veiculo-interesse" com o nome do veículo clicado
    $('#veiculo-interesse').val(nomeVeiculo);

    // Realiza uma animação de rolagem suave até o elemento de destino
    $('html').animate({
        scrollTop: destino.offset().top // Rola até a posição do elemento de destino
    },1000); // Duração da animação: 1000 milissegundos (1 segundo)
});