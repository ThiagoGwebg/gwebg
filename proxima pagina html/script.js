// =======================================================
// LÓGICA PARA OS CORAÇÕES FLUTUANTES (adicione no seu script.js)
// =======================================================

const containerCoracoesFlutuantes = document.getElementById('coracoes-flutuantes');

function criarCoracaoFlutuante() {
    if (!containerCoracoesFlutuantes) return; // Garante que o container existe

    const coracao = document.createElement('div');
    coracao.classList.add('coracao-flutuante');

    // Tamanho aleatório para o coração
    const tamanho = Math.random() * (40 - 20) + 20; // Entre 20px e 40px
    coracao.style.width = `${tamanho}px`;
    coracao.style.height = `${tamanho}px`;

    // Posição horizontal aleatória (começa na parte inferior da tela)
    const inicioHorizontal = Math.random() * window.innerWidth;
    coracao.style.left = `${inicioHorizontal}px`;
    coracao.style.bottom = `-50px`; // Começa um pouco abaixo da tela

    // Duração e atraso da animação aleatórios
    const duracaoAnimacao = Math.random() * (20 - 10) + 10; // Entre 10s e 20s
    const atrasoAnimacao = Math.random() * 5; // Atraso de até 5s
    coracao.style.animationDuration = `${duracaoAnimacao}s`;
    coracao.style.animationDelay = `${atrasoAnimacao}s`;

    containerCoracoesFlutuantes.appendChild(coracao);

    // Remove o coração do DOM depois que ele sumir para economizar memória
    coracao.addEventListener('animationend', () => {
        coracao.remove();
    });
}

// Gera um novo coração a cada 1.5 segundos (você pode ajustar este valor)
setInterval(criarCoracaoFlutuante, 1500); 

// Opcional: Gerar alguns corações logo de início para preencher a tela
for (let i = 0; i < 5; i++) {
    setTimeout(criarCoracaoFlutuante, i * 1000); // Gera 5 corações com atraso inicial
}

// =======================================================
// O restante do seu script.js continua abaixo
// ... (código do coração clicável, barra, botão, etc.) ...