import { AboutMe } from './aboutMe/aboutMe';
import { Header } from './header';
import { Journey } from './journey';

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