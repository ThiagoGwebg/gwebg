document.addEventListener('DOMContentLoaded', () => {
    const confettiContainer = document.getElementById('confetti-container');
    // Cores Confetes (mesmo do anterior)
    const coresConfete = ['#FFD700', '#FF4500', '#DA70D6', '#00BFFF', '#ADFF2F', '#FFFFFF']; 

    function criarConfete() {
        if (!confettiContainer) return;

        const confete = document.createElement('div');
        confete.classList.add('confetti');

        // Posição horizontal aleatória (base da tela)
        const inicioHorizontal = Math.random() * window.innerWidth;
        confete.style.left = `${inicioHorizontal}px`;
        confete.style.bottom = `0px`; // CRUCIAL: Começa na base da tela

        // Cor e Tamanho (mesmo do anterior)
        const cor = coresConfete[Math.floor(Math.random() * coresConfete.length)];
        confete.style.backgroundColor = cor;
        const tamanho = Math.random() * (15 - 5) + 5; 
        confete.style.width = `${tamanho}px`;
        confete.style.height = `${tamanho}px`;

        // === MUDANÇA: Atraso aleatório para simular a explosão ===
        const atrasoAnimacao = Math.random() * 0.5; // Atraso máximo de 0.5s para criar a sensação de explosão
        confete.style.animationDelay = `${atrasoAnimacao}s`;
        
        // MUDANÇA: Duração da animação é definida no CSS (1.5s)
        
        confettiContainer.appendChild(confete);

        // Remove o confete do DOM depois que ele sumir
        confete.addEventListener('animationend', () => {
            confete.remove();
        });
    }

    // === MUDANÇA: Gera uma EXPLOSÃO de confetes logo no início ===
    const numConfetes = 100; // Número de confetes (pode aumentar se quiser mais!)
    
    // Gera todos os confetes de uma só vez, com pequenos atrasos (0 a 100ms)
    for (let i = 0; i < numConfetes; i++) {
        // Gera a explosão nos primeiros 100ms
        setTimeout(criarConfete, Math.random() * 100); 
    }

    // NÂO continua gerando, pois é uma "explosão única"
});