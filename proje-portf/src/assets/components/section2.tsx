export function Section() {
    return(
        <>
            <section className="learning-journey">
                    <h2>Minha Jornada de Aprendizado e Ferramentas</h2>
                    <div className="learning-grid">
                        <div className="learning-item">
                            <img src="imagens/python-48.png" alt="Python Logo" />
                            <h3>Python</h3>
                            <p>Linguagem principal para desenvolvimento Back-end, automação e análise de dados.</p>
                        </div>
                        <div className="learning-item">
                            <img src="imagens/flask-48.png" alt="Flask Logo" />
                            <h3>Flask (Python)</h3>
                            <p>Construção de APIs RESTful e aplicações web leves e performáticas.</p>
                        </div>
                        <div className="learning-item">
                            <img src="imagens/django-logo.png" alt="Django Logo" />
                            <h3>Django (Python)</h3>
                            <p>Familiaridade com o framework Django para desenvolvimento web robusto e estruturado.</p>
                        </div>
                        <div className="learning-item">
                            <img src="imagens/js-48.png" alt="JavaScript Logo" />
                            <h3>JavaScript</h3>
                            <p>Aprendizado contínuo para interações Front-end e dinamismo nas interfaces.</p>
                        </div>
                        </div>
                </section>
        </>
    )
}

export default Section