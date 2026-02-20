import './colapsible.css'

export function Collapsible() {
    return(
        <>
            <aside className="sidebar" id="sidebar">
                <a href="index.html" className="logo">Julio'rlly</a>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="cursos.html">Cursos</a></li>
                        <li><a href="projetos.html">Projetos</a></li>
                    </ul>
                </nav>
                <div className="sidebar-footer">
                    <a href="//www.linkedin.com/in/júlio-o-rly-491845289/" target="_blank">LinkedIn</a>
                    <a href="https://github.com/iOrlly" target="_blank">GitHub</a>
                </div>
            </aside>
        </>
    )
}