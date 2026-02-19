import { AboutMe } from './aboutMe';
import { Journey } from './journey';

export function GroupSection() {
    return(
        <>
            <section className="home-section container">
                <AboutMe />
                <Journey />
            </section>
        </>
    );
}