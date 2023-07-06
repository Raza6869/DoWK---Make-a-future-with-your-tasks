import Link from "next/link"

export default function Login() {
    return (
      <div className="bg-zinc-900 text-white flex flex-col gap-5 justify-center items-center h-screen">
        <h1 className="text-8xl font-sans font-semibold text-center border-2 border-white p-5 rounded-xl">Login page</h1>
        <Link href="/" className="bg-white text-zinc-900 hover:bg-slate-400 p-5 rounded-xl text-4xl">Voltar</Link>
      </div>
    )
  }