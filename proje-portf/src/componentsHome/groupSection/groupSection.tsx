import { AboutMe } from '../aboutMe/aboutMe.tsx';
import { Header } from '../header/header.tsx';
import { Journey } from '../journey/journey.tsx';
import './groupSection.css'

export function GroupSection() {
    return(
        <>
            <main className="content">
                <Header />
                <section className="home-section container">
                    <AboutMe />
                    <Journey />
                </section>
            </main>
        </>
    );
}