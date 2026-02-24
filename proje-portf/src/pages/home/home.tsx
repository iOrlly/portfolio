import { Collapsible } from '../../componentsHome/collapsible/collapsible'
import { GroupSection } from '../../componentsHome/groupSection'
import '../../componentsHome/siteWrapper.css'
import './home.ts'


export function Home() {
    return(
        <>
            <div className="site-wrapper">
                <Collapsible />
                <GroupSection />
            </div>
        </>
    )
}