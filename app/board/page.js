import TimeBox from "@/Components/Board/TimeBox"
import Sidebar from "@/Components/Sidebar/Sidebar";
import Complement from "@/Components/Board/Complement"

export default function Board(){
    return(
        <main className="bg-gradient-to-br from-green-600 to-cyan-400 h-screen overflow-hidden flex">
            <Sidebar/>
            <div className="bg-white h-[99vh] mt-1 w-5/6 rounded-tl-[180px] overflow-x-hidden">
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
        </main>
    )
}