/* * JavaScript Otimizado para a Netflix Romântica
 * Funciona para múltiplos carrosséis
 */

// Espera o HTML ser totalmente carregado antes de rodar o script
document.addEventListener("DOMContentLoaded", () => {

    // 1. Encontra TODAS as seções de carrossel na página
    const secoes = document.querySelectorAll(".secao");

    // 2. Para cada seção, configura seus próprios botões
    secoes.forEach(secao => {
        
        // 3. Encontra os elementos *dentro* desta seção específica
        const listaFilmes = secao.querySelector(".lista-filmes");
        const btnEsquerda = secao.querySelector(".btn-esquerda");
        const btnDireita = secao.querySelector(".btn-direita");

        // 4. Se a seção tiver todos os 3 elementos, continua
        if (listaFilmes && btnEsquerda && btnDireita) {

            // 5. Adiciona o clique no botão DIREITO
            btnDireita.addEventListener("click", () => {
                // Calcula o quanto rolar (80% da largura visível da lista)
                const scrollAmount = listaFilmes.clientWidth * 0.8;
                
                // Aplica a rolagem (o CSS cuida da animação suave)
                listaFilmes.scrollLeft += scrollAmount;
            });

            // 6. Adiciona o clique no botão ESQUERDO
            btnEsquerda.addEventListener("click", () => {
                // Calcula o quanto rolar (80% da largura visível da lista)
                const scrollAmount = listaFilmes.clientWidth * 0.8;
                
                // Aplica a rolagem (o CSS cuida da animação suave)
                listaFilmes.scrollLeft -= scrollAmount;
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Encontra TODOS os containers de card
    const cardContainers = document.querySelectorAll(".card-container");

    // 2. Adiciona um "escutador" de clique em cada um
    cardContainers.forEach(container => {
        
        // 3. Pega o link do atributo "data-link" que você colocou no HTML
        const link = container.dataset.link;
        
        // Se não tiver um link, não faz nada
        if (!link) {
            return;
        }

        // 4. Adiciona o evento de clique
        container.addEventListener("click", (event) => {
            
            // Ponto extra: Impede que o clique seja ativado se
            // o usuário clicar em um botão (como o '💜' ou '+')
            if (event.target.closest(".btn-icon")) {
                return;
            }

            // 5. Redireciona a página para o link do filme
            window.location.href = link;
        });
    });
});
