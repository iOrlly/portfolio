import './aboutMe.css'
import julioImg from '../../assets/julio.jpg'

export function AboutMe() {
    return(
        <>
            <div className="hero">
                <h1>Olá, eu sou Julio!</h1>
                <p>Como estudante de Análise e Desenvolvimento de Sistemas, encontrei na programação a paixão por criar e transformar ideias 
                em soluções reais. Minha jornada ainda está no inicio, tenho muito o que aprender e me desenvolver e estou empolgado com isso!</p>
            </div>
            
            <div className="about-me">
                <img src={julioImg} alt="Sua foto profissional" className="profile-pic" />
                <p>Meu percurso em Análise e Desenvolvimento de Sistemas me proporcionou uma base sólida em arquitetura de software,
                     banco de dados e metodologias ágeis. Sou movido pela lógica e pelo desafio de projetar e implementar soluções 
                     robustas. Gosto de estar sempre descobrindo e aprendendo coisas novas, e é isso que me move.</p>
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