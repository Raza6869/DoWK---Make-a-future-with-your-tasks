import SideTools from "./SideTools.js"

export default function Navegator(){
    return(
        <div>
            <ul className="ml-3 flex flex-col gap-3">
                <SideTools 
                text="Dashboard"
                icon="bi bi-calendar2-check text-xl"
                />
                <SideTools 
                text="Costumize"
                icon="bi bi-pencil-square text-xl"
                />
                <SideTools 
                text="Organize"
                icon="bi bi-folder2-open text-xl"
                />
                <SideTools 
                text="Report Error"
                icon="bi bi-exclamation-circle text-xl"
                />
            </ul>
        </div>
    )
}