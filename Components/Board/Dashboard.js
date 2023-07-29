import TimeBox from "@/Components/Board/TimeBox"
import Sidebar from "@/Components/Sidebar/Sidebar";
import Complement from "@/Components/Board/Complement"

export default function Dashboard(){
    return(
        <div>
           <TimeBox/>
            <Complement/>
            <div className="flex">
                <div className="w-3/4 px-10">
                    <nav>
                        <ul className="flex items-center justify-end text-green-600 text-2xl">
                            <li className="bg-zinc-300 px-5 py-3 rounded-tl-3xl">Today&apos;s Task</li>
                            <li className="bg-zinc-300 px-5 py-3">Week</li>
                            <li className="bg-zinc-300 px-5 py-3">Month</li>
                        </ul>
                    </nav>
                    <div className="bg-zinc-300 h-screen rounded-tl-3xl">

                    </div>
                </div>
                <div className="w-1/4 h-screen bg-slate-400">
                    
                </div>
            </div>
        </div>
    )
}