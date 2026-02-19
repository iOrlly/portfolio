import { Collapsible } from '../components/collapsible'
import { Header } from '../components/header'
import { GroupSection } from '../components/groupSection'


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