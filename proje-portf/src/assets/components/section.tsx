import { DivHero } from './divHero'
import { DivAbout } from './divAbout'

export function Section() {
    return(
        <>
            <main className="content">
                <section className="home-section container">
                    <DivHero />
                    <DivAbout />
                </section>
            </main>
        </>
    )
}