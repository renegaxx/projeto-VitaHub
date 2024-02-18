document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o elemento do rodapé
    var footer = document.getElementById('rodape');

    // Adiciona a classe 'fade-in' quando o usuário começar a rolar para baixo
    window.addEventListener('scroll', function () {
        if (isScrolledIntoView(footer) && !footer.classList.contains('fade-in')) {
            footer.classList.add('fade-in');
        }
    });
});

// Função para verificar se o elemento está visível na janela de visualização
function isScrolledIntoView(element) {
    var rect = element.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    // Aparece se pelo menos 50% do elemento está visível
    return elemTop < window.innerHeight / 2 && elemBottom >= 0;
}