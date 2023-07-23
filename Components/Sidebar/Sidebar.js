import Navegator from "./Navegator";

export default function Sidebar(){
    return(
      <div id="sidebar" className="w-1/6 text-white p-5 flex flex-col gap-16">
                <div className="flex items-center gap-3">
                    <i className="bi bi-list text-3xl"></i>
                    <i className="bi bi-person-circle text-4xl"></i>
                    <div className="flex items-center">
                        <p className="font-bold">USERNAME</p>
                        <i className="bi bi-caret-up-fill rotate-180 text-xs"></i>
                    </div>
                </div>
                <Navegator/>
            </div>  
    )
}