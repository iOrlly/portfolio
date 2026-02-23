document.addEventListener('DOMContentLoaded', () => {
    const highlightActiveLink = () => {
        const navLinks = document.querySelectorAll<HTMLAnchorElement>('nav a');
        const currentPath = window.location.pathname.split('/').pop();

        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href')?.split('/').pop();
                if(linkPath === currentPath ||
                    (currentPath === '' && linkPath === 'index.html') ||
                    //Se a página atual é "api-cotacao.html", destque 'projetos.html'
                    (currentPath === 'api-cotacao.html' && linkPath === 'projetos.html')
                ) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active')
                }
        });
    };

    highlightActiveLink();

    //--------Lógica menu off-canvas -----------
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const siteWrapper = document.getElementById('.site-wrapper');

    if(hamburgerBtn && sidebar && overlay && siteWrapper){
        console.log('home.ts: Elementos do menu Off-canvas encontrados. Inicializando.');

        const toggleMenu = () => {
            sidebar.classList.toggle('is-active');
            hamburgerBtn.classList.toggle('is-active');
            overlay.classList.toggle('is-active');
            //siteWrapper.classList.toggle('sidebar-open');
            document.body.classList.toggle('no-scroll');
            console.log("home.ts: menu toggled");
        };

        hamburgerBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        //Fechar o menu se um link na sidebar for clicado
        const navLinks = sidebar.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const linkHref = link.getAttribute('href');
                const currentPath = window.location.pathname.split('/').pop();

                //Se o link é para a mesma página, para uma âncora ou para 'projetos.html' estando em 'api-cotacao.html'
                if (linkHref === currentPath ||
                    (currentPath === '' && linkHref === 'index.html') ||
                    linkHref?.startsWith('#')){
                        
                        if (sidebar.classList.contains('is-active')) {
                            toggleMenu(); //fechar o menu
                            if (linkHref.startsWith('#')) {
                                e.preventDefault(); //previne o salto para âconras (para possível scroll suave)
                            }
                        }
                    } else {
                        //se o link for outra página
                        if (sidebar.classList.contains('is-active')) {
                            toggleMenu();
                        }
                    }
            });
        });
        
    } else {
        console.log("home.ts: Um ou mais elementos do menu Off-canvas não foram encontrados. O menu pode não funcionar.");
        console.log({hamburgerBtn, sidebar, overlay, siteWrapper});
    }

    //-------Lógica de animação de "Aparecer ao Rolar" ---------//
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.hero, .about-me, .leaning-journey, .learning-item, .projeto-card, .curso-card'). forEach(el => {
        el.classList.add('animated-on-scroll');
        observer.observe(el);
    })
});
