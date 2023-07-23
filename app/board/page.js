import Sidebar from "@/Components/Sidebar/Sidebar";

export default function Board(){
    return(
        <main className="bg-gradient-to-br from-green-600 to-cyan-400 h-screen overflow-x-hidden flex">
            <Sidebar/>
            <div className="bg-white h-[99vh] mt-2 w-5/6 p-8 rounded-tl-[150px] overflow-hidden">
                <div className="h-1/4 ">
                    <ul className="flex justify-end gap-3 text-2xl">
                        <li><i className="bi bi-bell-fill"></i></li>
                        <li><i className="bi bi-question-circle"></i></li>
                        <li><i className="bi bi-gear-fill"></i></li>
                    </ul>
                </div>
                <div className="flex gap-4 items-baseline mb-20">
                    <h1 className="font-bold text-green-500 text-3xl">Bom dia, Usuário!</h1>
                    <input type="date" name="Date" id="Date" className=" bg-green-500 invert px-3 rounded-xl text-sm w-32"/> 
                </div>
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