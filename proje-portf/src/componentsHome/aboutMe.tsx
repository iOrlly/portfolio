export function AboutMe() {
    return(
        <>
            <div className="hero">
                <h1>Olá, eu sou Julio!</h1>
                <p>Como estudante de Análise e Desenvolvimento de Sistemas, encontrei na programação a paixão por criar e transformar ideias 
                em soluções reais. Minha jornada é impulsionada pelo desejo de construir sistemas eficientes e inovadores que resolvam problemas e 
                gerem valor.</p>
            </div>
            
            <div className="about-me">
                <img src="imagens/julio.jpg" alt="Sua foto profissional" className="profile-pic" />
                <p>Meu percurso em Análise e Desenvolvimento de Sistemas me proporcionou uma base sólida em arquitetura de software, banco de dados e metodologias ágeis. Sou movido pela lógica e pelo desafio de projetar e implementar soluções robustas. Tenho um foco especial no desenvolvimento Back-end com Python, explorando o poder da linguagem para construir APIs, automatizar processos e manipular dados de forma inteligente.</p>
                <div className="skills">
                    <span>React</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>TypeScript</span>
                    <span>Git</span>
                </div>
            </div>
        </>
    )
}