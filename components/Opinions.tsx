import Image from "next/image"

export default function Opinions(props){
    return(
        <div className="text-white text-center flex flex-col justify-center items-center flex-shrink-0 w-72 bg-white/20 rounded-2xl gap-4 p-4 py-11">
            <Image src={props.url} alt="perfil"/>
            <div>
                <h1 className="text-3xl font-semibold">{props.name}</h1>
                <h3 className="text-yellow-400">{props.prof}</h3>
            </div>
            <p className="text-xl">&quot;{props.opnion}&quot;</p>
        </div>
    )
}