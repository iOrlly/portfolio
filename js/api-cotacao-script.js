document.addEventListener('DOMContentLoaded', () => {
    // Lógica do Menu Off-Canvas: Copiada do script.js principal para esta página
    
    // Isso garante que o botão de hambúrguer e o overlay funcionem aqui também.
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const siteWrapper = document.querySelector('.site-wrapper');

    if (hamburgerBtn && sidebar && overlay && siteWrapper) {
        const toggleMenu = () => {
            sidebar.classList.toggle('is-active');
            hamburgerBtn.classList.toggle('is-active');
            overlay.classList.toggle('is-active');
            siteWrapper.classList.toggle('sidebar-open');
            document.body.classList.toggle('no-scroll');
        };

        hamburgerBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        // Fecha o menu se um link na sidebar for clicado
        const navLinks = sidebar.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (sidebar.classList.contains('is-active')) {
                    toggleMenu();
                }
            });
        });
    }
    
    //cotação API Script
    const moedaBaseSelect = document.getElementById('moeda-base');
    const moedaDestinoSelect = document.getElementById('moeda-destino');
    const getCotacaoBtn = document.getElementById('get-cotacao-btn');
    const cotacaoValorSpan = document.getElementById('cotacao-valor');
    const ultimaAtualizacaoSpan = document.getElementById('ultima-atualizacao');
    const jsonResponseCode = document.getElementById('json-response-code');

    // ESTA É A URL DA SUA API PYTHON!
    // Durante o desenvolvimento local, será algo como: http://127.0.0.1:8000
    // QUANDO FOR FAZER O DEPLOY DA SUA API, ESSA URL MUDARÁ PARA ONDE SUA API ESTIVER HOSPEDADA.
    const API_BASE_URL = 'http://127.0.0.1:8000'; // MUITO IMPORTANTE: Mude isso no futuro!

    const fetchCotacao = async () => {
        const moedaBase = moedaBaseSelect.value;
        const moedaDestino = moedaDestinoSelect.value;
        // Monta a URL completa para o endpoint da sua API que você irá criar em Python
        const url = `${API_BASE_URL}/cotacao/${moedaBase}-${moedaDestino}`;

        try {
            // 1. Faz a requisição GET para sua API Python
            const response = await fetch(url);

            // Verifica se a resposta HTTP foi bem-sucedida (status 2xx)
            if (!response.ok) {
                // Se não foi, lança um erro para ser pego no bloco catch
                throw new Error(`Erro ao buscar cotação: ${response.status} ${response.statusText}`);
            }

            // 2. Converte a resposta para JSON
            const data = await response.json();

            // 3. Processa e exibe os dados na sua interface
            cotacaoValorSpan.textContent = data.valor_cotacao ? data.valor_cotacao.toFixed(4) : 'N/A';
            ultimaAtualizacaoSpan.textContent = data.data_hora || 'N/A';
            jsonResponseCode.textContent = JSON.stringify(data, null, 4); // Exibe o JSON cru também

        } catch (error) {
            console.error('Erro na requisição da API:', error);
            cotacaoValorSpan.textContent = 'Erro!';
            ultimaAtualizacaoSpan.textContent = 'Verifique o console para detalhes.';
            jsonResponseCode.textContent = JSON.stringify({ error: error.message || "Erro desconhecido" }, null, 4);
        }
    };

    // Adiciona o evento de clique ao botão para disparar a requisição
    getCotacaoBtn.addEventListener('click', fetchCotacao);

    // Carrega uma cotação inicial quando a página é carregada
    fetchCotacao();
});