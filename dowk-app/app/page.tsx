import HomeNav from "@/components/HomeNav"
import Show from "@/components/Show"
import ToolsElements from "@/components/ToolsElemets"
import BackgroudDetails from "@/components/BackgroundDetails"
import Callback from "@/components/Callback"

import category from '../Images/Categorization.png'
import icons from "../Images/Icons.png"
import unlimited from "../Images/Unlimited.png"

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
    </body>   
  )
}
