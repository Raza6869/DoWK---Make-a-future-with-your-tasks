import ShowImg from "../Images/Apresentation-art.png"
import Image from "next/image"

export default function Show(){
    return(
        <div className="flex bg-yellow-400 items-center py-10">
            <div className="bg-[#0c1618] rounded-xl text-center ml-28 w-2/5 py-24 flex flex-col gap-20">
                <div className="text-yellow-400">
                    <h3 className="font-sans text-4xl ">WELCOME TO</h3>
                    <h1 className="font-delagothic text-9xl">DoWK</h1>
                </div>
                <p className="text-white text-center ml-20 text-2xl w-3/4">A To-Do List app Website for make your week organization fluid, simple and better.</p>
            </div>
            <Image src={ShowImg} alt="arte do raza"/>
        </div>
    )
}