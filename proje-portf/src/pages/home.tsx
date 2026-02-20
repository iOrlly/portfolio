import { Collapsible } from '../componentsHome/collapsible/collapsible'
import { Header } from '../componentsHome/header'
import { GroupSection } from '../componentsHome/groupSection'
import '../componentsHome/siteWrapper.css'


export function Home() {
    return(
        <>
            <div className="site-wrapper">
                <Collapsible />
                <Header />
                <GroupSection />
            </div>
        </>
    )
}