document.addEventListener('DOMContentLoaded', function () {
    var content = document.getElementById('conteudo-celular');

    // Anime.js para animações
    anime({
        targets: '.text-celular',
        opacity: [0, 1],
        translateY: [-20, 0],
        duration: 1000,
        easing: 'easeInOutQuad',
        delay: anime.stagger(200),
    });

    anime({
        targets: '.img-mockup img',
        opacity: [0, 1],
        translateX: [50, 0],
        duration: 1000,
        easing: 'easeInOutQuad',
        delay: 500,
    });

    anime({
        targets: '.bola-img1',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeInOutQuad',
        delay: anime.stagger(100),
    });
});