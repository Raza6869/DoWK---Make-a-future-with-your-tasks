import planta from "../Images/Folha-art.png"
import Image from "next/image"

export default function BackgroudDetails(){
    return(
        <div>
            <Image src={planta} alt="planta-bg" className="absolute right-0 top-[1700px]"/>
            <Image src={planta} alt="planta-bg" className="absolute right-44 top-[2100px] rotate-180"/>
            <Image src={planta} alt="planta-bg" className="absolute left-44 top-[2200px] rotate-180"/>
            <Image src={planta} alt="planta-bg" className="absolute -left-44 top-[2700px]"/>
        </div>
    )
}