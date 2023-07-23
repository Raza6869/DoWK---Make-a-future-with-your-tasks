export default function Navegator(){
    return(
        <div>
            <ul className="ml-3 flex flex-col gap-3">
                <li className="flex gap-5 items-center">
                    <i className="bi bi-calendar2-check text-xl"></i>
                     <p className="text-lg">Dashboard</p> 
                </li>
                <li className="flex gap-5 items-center">
                    <i className="bi bi-pencil-square text-xl"></i>
                    <p className="text-lg">Costumize</p> 
                </li>
                <li className="flex gap-5 items-center">
                    <i className="bi bi-folder2-open text-xl"></i>
                    <p className="text-lg">Organize</p> 
                </li>
                <li className="flex gap-5 items-center">
                    <i className="bi bi-exclamation-circle text-xl"></i>
                    <p className="text-lg">Report Error</p> 
                </li>
            </ul>
        </div>
    )
}