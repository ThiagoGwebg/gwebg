// =======================================================
// VARIÁVEIS DE CONTROLE E ELEMENTOS HTML (Declaração ÚNICA no topo)
// =======================================================
const coracaoDiv = document.getElementById('coracao');
const preenchimentoDiv = document.getElementById('progresso-preenchimento');
const botaoProximaPagina = document.getElementById('botao-proxima-pagina'); // NOVO ELEMENTO

let contadorCliques = 0;
const cliquesMaximos = 10; // Número de cliques para completar a barra


// =======================================================
// === 1. LÓGICA DE ATRASO (6 SEGUNDOS) PARA O CONTAINER ===
// =======================================================
setTimeout(() => {
    const container = document.querySelector('.container-agrupado');
    
    if (container) {
        // Remove a classe 'oculto' para aparecer suavemente
        container.classList.remove('oculto');
        console.log('Container Coração/Linha apareceu após 6 segundos.');
    }
}, 6000); // 6 segundos


// =======================================================
// === 2. EVENTO DE CLIQUE DO CORAÇÃO ===
// =======================================================
if (coracaoDiv && preenchimentoDiv) { // Verifica se os elementos foram encontrados
    
    coracaoDiv.addEventListener('click', function() {
        
        // --- Animação do Coração (Pulso) ---
        this.classList.add('clicado');
        setTimeout(() => {
            this.classList.remove('clicado');
        }, 150); 
        
        // --- Lógica da Linha de Progresso ---
        if (contadorCliques < cliquesMaximos) {
            
            contadorCliques++;
            
            // Calcula a porcentagem
            const porcentagem = (contadorCliques / cliquesMaximos) * 100;
            
            // Atualiza a ALTURA (height) para barra vertical
            preenchimentoDiv.style.height = porcentagem + '%';
            
            console.log(`Cliques: ${contadorCliques}/${cliquesMaximos}`);
            
            // --- Lógica para quando o progresso estiver completo (100%) ---
            if (contadorCliques === cliquesMaximos) {
                console.log('🎉 Progresso Completo! Botão Exibido.');
                
                // MOSTRAR O BOTÃO DE NAVEGAÇÃO
                if (botaoProximaPagina) {
                    botaoProximaPagina.classList.remove('oculto-botao');
                    botaoProximaPagina.style.pointerEvents = 'auto'; // Reativa cliques
                }
                
                // OPCIONAL: Se você não quer reiniciar, remova o bloco abaixo
                /*
                setTimeout(() => {
                    contadorCliques = 0;
                    preenchimentoDiv.style.height = '0%'; 
                }, 1000);
                */
            }
        }
    });
}