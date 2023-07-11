import Link from "next/link"

export default function Navbar(){
    return(
        <div className="py-5 px-8 flex justify-between items-center fixed bg-white w-full">
            <Link href="/" className="font-bold text-4xl text-green-500">DOWK</Link>
            <div className="flex gap-6 items-center">
                <ul className="flex gap-4">
                    <li>About</li>
                    <li>Contact</li>
                    <li>Manager</li>
                </ul>
                <span className="flex gap-3">
                    <button className="bg-green-400 text-white rounded p-2">Sign In</button>
                    <button className="rounded text-green-400 p-2">Sign Up</button>
                </span>
            </div>
            
        </div>
    )
}