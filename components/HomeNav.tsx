
export default function HomeNav(){
    return(
        <div className="text-white flex flex-col gap-1 justify-center items-center bg-Home-bg bg-cover bg-fixed py-24">
            <div className="">
                <h1 className="text-[250px] font-bold font-delagothic  text-yellow-400">DoWK</h1>
            </div>
            <div>
                <ul className="text-yellow-400 font-sans flex gap-16 text-3xl font-extralight">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>  
            <button className="text-3xl mt-20 font-semibold text-yellow-400 border-4 rounded-2xl p-4 border-yellow-400 hover:bg-yellow-400 hover:text-[#0c1618]">Get Started</button>
        </div>
    )
}