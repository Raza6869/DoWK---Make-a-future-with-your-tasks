
import Navbar from "@/components/Navbar"
import Main from "@/components/Main"
import Cacto from "@/components/Cacto"

export default function Home() {
  return (
    <main className='text-xl font-sans'>
      <Navbar/>
      <Main/>
      <div className="p-20">
        <Cacto/>
      </div>
    </main>
  )
}
