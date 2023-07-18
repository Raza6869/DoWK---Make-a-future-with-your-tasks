
export default function Board(){
    return(
        <main className="bg-gradient-to-br from-green-600 to-cyan-400 h-screen overflow-x-hidden flex">
            <div id="sidebar" className="w-1/6 text-white p-5 flex flex-col gap-16">
                <div className="flex items-center gap-3">
                    <i className="bi bi-list text-3xl"></i>
                    <i className="bi bi-person-circle text-4xl"></i>
                    <div className="flex items-center">
                        <p className="font-bold">USERNAME</p>
                        <i className="bi bi-caret-up-fill rotate-180 text-xs"></i>
                    </div>
                </div>
                <div>
                    <ul className="ml-3 flex flex-col gap-3">
                        <li className="flex gap-5 items-center">
                            <i className="bi bi-calendar2-check text-2xl"></i>
                            <p className="text-xl">Dashboard</p> 
                        </li>
                        <li className="flex gap-5 items-center">
                            <i className="bi bi-pencil-square text-2xl"></i>
                            <p className="text-xl">Costumize</p> 
                        </li>
                        <li className="flex gap-5 items-center">
                            <i className="bi bi-folder2-open text-2xl"></i>
                            <p className="text-xl">Organize</p> 
                        </li>
                        <li className="flex gap-5 items-center">
                            <i className="bi bi-exclamation-circle text-2xl"></i>
                            <p className="text-xl">Report Error</p> 
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-white h-[99vh] mt-2 w-5/6 p-8 rounded-tl-[150px] overflow-hidden">
                <div className='h-1/4  '>
                    <ul className="flex justify-end gap-4">
                        <li>notification</li>
                        <li>help</li>
                        <li>configuration</li>
                    </ul>
                </div>
                <div className="flex gap-4 items-baseline mb-20">
                    <h1 className="font-bold text-green-500 text-3xl">Bom dia, Usuário!</h1>
                    <input type="date" name="Date" id="Date" placeholder="Set the Date" className="text-green-600 w-[10%]"/> 
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