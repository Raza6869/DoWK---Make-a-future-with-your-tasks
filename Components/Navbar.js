import Link from "next/link"

export default function Navbar(){
    return(
        <nav className='flex justify-between items-center p-5'>
            <div>
                <h1 className="text-3xl text-green-500 font-bold">DOWK</h1>
            </div>
            <div className="flex gap-3 items-center">
                <ul className="flex gap-3">
                    <li>About</li>
                    <li>Docs</li>
                    <li>Manager</li>
                </ul>
                <div className="flex gap-3 items-center">
                    <Link href="/board" className="p-2 bg-green-400 text-white rounded">Sign in</Link>
                    <button className="text-green-400">Sign Up</button>
                </div>
            </div>
        </nav>
    )
}