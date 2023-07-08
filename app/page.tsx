  import HomeNav from "@/components/HomeNav"
import Show from "@/components/Show"
import ToolsElements from "@/components/ToolsElemets"
import BackgroudDetails from "@/components/BackgroundDetails"
import Callback from "@/components/Callback"

import category from '../Images/Categorization.png'
import icons from "../Images/Icons.png"
import unlimited from "../Images/Unlimited.png"
import Opinions from "@/components/Opinions"

import opnion1 from "../Images/opinions-1.png"
import opnion2 from "../Images/opinions-2.png"
import opnion3 from "../Images/opinions-3.png"
import opnion4 from "../Images/opinions-4.png"

export default function Home() {
  return (
    <body className="bg-[#0C1618]">
      <HomeNav/>

      <Show/>

      <div className="bg-[#0C1618] text-white flex items-center text-center justify-center gap-32 px-40 py-32">
        <ToolsElements
        url={category}
        title='CATEGORIZATION'
        description='With the categorization system, it’s possible to separate with colors and filtrate your tasks in whatever space-time in your timeline.'/>

        <ToolsElements
        url={icons}
        title='ICONS'
        description='Icons can make your board even more organized and costumized, just to make sure your dashboard will be confortable for you.'/>
        
        <ToolsElements
        url={unlimited}
        title='UNLIMITED'
        description='Beyond the title, there is no limits on the description on your tasks, without visual clutter. Acessed only when selecting the task.'/>

      </div>

      <div className="bg-[#0C1618] py-36">
        <Callback/>
        <BackgroudDetails/>
      </div>
      <div className="bg-[#0C1618] flex gap-10 px-20 py-16 overflow-x-auto">
        <Opinions
        url={opnion1}
        name='Theo Lins'
        prof='LAWYER'
        opnion='The best organization I have utilizated...'
        />
          <Opinions
        url={opnion2}
        name='Jenny Silver'
        prof='SYSTEM ANALYSTIC'
        opnion='I can’t see other software better to do this...'
        />
          <Opinions
        url={opnion3}
        name='Mary Karter'
        prof='LOGISTIC ENGiNEER'
        opnion='I think this is the best of the market can offer'
        />
          <Opinions
        url={opnion4}
        name='Michael Jack'
        prof='CEO of Construct'
        opnion='I loved this one'
        />
            <Opinions
        url={opnion1}
        name='Theo Lins'
        prof='LAWYER'
        opnion='The best organization I have utilizated...'
        />
          <Opinions
        url={opnion2}
        name='Jenny Silver'
        prof='SYSTEM ANALYSTIC'
        opnion='I can’t see other software better to do this...'
        />
          <Opinions
        url={opnion3}
        name='Mary Karter'
        prof='LOGISTIC ENGiNEER'
        opnion='I think this is the best of the market can offer'
        />
          <Opinions
        url={opnion4}
        name='Michael Jack'
        prof='CEO of Construct'
        opnion='I loved this one'
        />
      </div>
      
      <footer className="bg-zinc-900 text-white p-20 text-xl flex gap-56 items-center justify-center">
        <h1>DoWK Enterprisesº</h1>
        <div>
          <ul>
            <li>Contact</li>
            <li>About We</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Legal Licenses</li>
            <li>Company Location</li>
          </ul>
        </div>
      </footer>

    </body>   
  )
}
