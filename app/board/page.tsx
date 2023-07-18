export default function Board(){
    return(
        <main className="bg-gradient-to-br from-green-600 to-cyan-400 h-screen overflow-hidden">
            <div id="sidebar" className="w-1/4 text-white p-5 flex flex-col gap-16">
                <div className="flex items-center gap-3">
                    <i className="bi bi-list text-3xl"></i>
                    <i className="bi bi-person-circle text-5xl"></i>
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
            <div>
             
            </div>
        </main>
    )
}