import { AboutMe } from '../components/aboutMe' 
import { Collapsible } from '../components/collapsible'
export function Home() {
    return(
        <div className="site-wrapper">
        <Collapsible />
        <AboutMe />
        </div>
    )
}