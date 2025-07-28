document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica do Menu Off-Canvas (Hambúrguer) - REPLICADA para esta página ---
    // Esta parte é idêntica à do script.js principal e é necessária aqui
    // porque api-cotacao.html carrega SOMENTE este script.

    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const siteWrapper = document.querySelector('.site-wrapper');

    if (hamburgerBtn && sidebar && overlay && siteWrapper) {
        console.log("api-cotacao-script.js: Elementos do menu Off-Canvas encontrados. Inicializando.");

        const toggleMenu = () => {
            sidebar.classList.toggle('is-active');
            hamburgerBtn.classList.toggle('is-active');
            overlay.classList.toggle('is-active');
            siteWrapper.classList.toggle('sidebar-open');
            document.body.classList.toggle('no-scroll');
            console.log("api-cotacao-script.js: Menu toggled.");
        };

        hamburgerBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        // Fecha o menu se um link na sidebar for clicado
        const navLinks = sidebar.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const linkHref = link.getAttribute('href');
                const currentPath = window.location.pathname.split('/').pop();

                // Se o link é para a mesma página, para uma âncora, ou para 'projetos.html' estando em 'api-cotacao.html'
                if (linkHref === currentPath ||
                    (currentPath === '' && linkHref === 'index.html') ||
                    (currentPath === 'api-cotacao.html' && linkHref === 'projetos.html') ||
                    linkHref.startsWith('#')) {
                    
                    if (sidebar.classList.contains('is-active')) {
                        toggleMenu(); // Apenas fecha o menu
                        if (linkHref.startsWith('#')) {
                            e.preventDefault(); // Previne o salto para âncoras
                        }
                    }
                } else {
                    // Se o link é para OUTRA página
                    if (sidebar.classList.contains('is-active')) {
                        toggleMenu(); // Fecha o menu e permite a navegação normal
                    }
                }
            });
        });
    } else {
        console.warn("api-cotacao-script.js: Um ou mais elementos do menu Off-Canvas não foram encontrados. O menu pode não funcionar.");
        console.log({ hamburgerBtn, sidebar, overlay, siteWrapper });
    }

    // --- Lógica Específica da Demonstração da API de Cotação ---
    const moedaBaseSelect = document.getElementById('moeda-base');
    const moedaDestinoSelect = document.getElementById('moeda-destino');
    const getCotacaoBtn = document.getElementById('get-cotacao-btn');
    const cotacaoValorSpan = document.getElementById('cotacao-valor');
    const ultimaAtualizacaoSpan = document.getElementById('ultima-atualizacao');
    const jsonResponseCode = document.getElementById('json-response-code');

    // **IMPORTANTE:** A URL da sua API Python. Ajuste conforme sua API estiver rodando.
    // Em desenvolvimento local, geralmente é 'http://127.0.0.1:8000'.
    // Quando fizer o deploy da sua API, esta URL precisará ser o endereço público dela.
    const API_BASE_URL = 'http://127.0.0.1:8000'; // <<<<< LEMBRE-SE DE AJUSTAR ISSO NO DEPLOY!

    const fetchCotacao = async () => {
        const moedaBase = moedaBaseSelect.value;
        const moedaDestino = moedaDestinoSelect.value;
        const url = `${API_BASE_URL}/cotacao/${moedaBase}-${moedaDestino}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                // Tenta ler a mensagem de erro da API se disponível
                const errorData = await response.json().catch(() => ({}));
                const errorMessage = errorData.detail || `Erro HTTP! Status: ${response.status} ${response.statusText}`;
                throw new Error(errorMessage);
            }
            const data = await response.json();

            // Verifica se a API externa retornou erro dentro do JSON (como ExchangeRate-API faz)
            if (data.result === "error") {
                throw new Error(`Erro da API externa: ${data["error-type"] || "Tipo de erro desconhecido"}`);
            }
            if (data.valor_cotacao === undefined || data.data_hora === undefined) {
                throw new Error("Resposta da API inválida: valor_cotacao ou data_hora ausentes.");
            }


            cotacaoValorSpan.textContent = data.valor_cotacao ? data.valor_cotacao.toFixed(4) : 'N/A';
            ultimaAtualizacaoSpan.textContent = data.data_hora || 'N/A';
            jsonResponseCode.textContent = JSON.stringify(data, null, 4);

        } catch (error) {
            console.error('Erro na requisição da API:', error);
            cotacaoValorSpan.textContent = 'Erro!';
            ultimaAtualizacaoSpan.textContent = `Problema: ${error.message || "Verifique o console para detalhes."}`;
            jsonResponseCode.textContent = JSON.stringify({ error: error.message || "Erro desconhecido" }, null, 4);
        }
    };

    getCotacaoBtn.addEventListener('click', fetchCotacao);
    fetchCotacao(); // Carrega uma cotação inicial ao carregar a página
})