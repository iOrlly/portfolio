import { Hero } from './hero'
import { AboutMe } from './aboutMe'

export function Section() {
    return(
        <>
            <main className="content">
                <section className="home-section container">
                    <Hero />
                    <AboutMe />
                </section>
            </main>
        </>
    )
}