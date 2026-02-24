import { AboutMe } from './aboutMe/aboutMe';
import { Header } from './header/header.tsx';
import { Journey } from './journey/journey.tsx';

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