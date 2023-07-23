export default function SideTools({text, icon}){
    return(
        <li className="flex gap-5 items-center">
            <i className={icon}></i>
            <p className="text-lg">{text}</p> 
        </li>
    )
}