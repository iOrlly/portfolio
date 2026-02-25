import { Collapsible } from '../../componentsHome/collapsible/collapsible.tsx'
import { GroupSection } from '../../componentsHome/groupSection/groupSection.tsx'
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