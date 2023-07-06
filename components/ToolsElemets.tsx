import Image from "next/image"


export default function ToolsElements(props){
    return(
        <div className="flex flex-col gap-5 justify-center items-center">
            <Image src={props.url} alt="category icon" className=""/>
            <h2 className="text-yellow-400 font-bold text-3xl">{props.title}</h2>
            <p className="font-semibold text-xl">{props.description}</p>
        </div>
    )
}