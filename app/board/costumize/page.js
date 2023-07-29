
import Sidebar from "@/Components/Sidebar/Sidebar";
import Cosutimize from "../../../Components/Board/Costumize";


export default function CostumizePage(){
    return(
        <main className="bg-gradient-to-br from-green-600 to-cyan-400 h-screen overflow-hidden flex">
            <Sidebar/>
            <div className="bg-white h-[99vh] mt-1 w-5/6 rounded-tl-[180px] overflow-x-hidden">
                <Cosutimize/>
            </div>
        </main>
    )
}