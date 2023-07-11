import Link from "next/link";

export default function Main(){
    return(
        <div id='Home' className='w-full h-[95vh] bg-[url("./Images/dose-media-bU6JyhSI6zo-unsplash.jpg")] bg-cover bg-[center_top_-8rem] p-10'>
            <div className="flex mt-10">
                <div className="flex flex-col">
                    <h1 className="text-[140pt] font-bold text-white mt-36 font-Rubik border-l-8 border-t-4 border-green-500">DOWK<span className="text-2xl text-green-500">To-do List</span></h1>
                    <h2 className="mt-4 font-bold text-2lg rounded text-center text-white p-2 bg-cyan-400">You never go to reach on your objectives without planning yourself</h2>
                    <ul className="flex mt-5 gap-5 justify-center">
                        <li className="text-white bg-green-500/20 border-2 border-green-300 rounded-xl p-3">Fully Customizable</li>
                        <li className="text-white bg-blue-500/20 border-2 border-blue-300 rounded-xl p-3">Colors and Icons</li>
                        <li className="text-white bg-purple-500/20 border-2 border-purple-300 rounded-xl p-3">Categories</li>
                        <li className="text-white bg-yellow-500/20 border-2 border-yellow-300 rounded-xl p-3">Attachments and images</li>
                    </ul>
                    <Link href="" className="text-white text-3xl mt-14 bg-green-400 rounded-full p-4 mx-48 text-center font-bold">Get Started ➔</Link>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}