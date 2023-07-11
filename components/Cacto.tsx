import Image from "next/image"
import cacto from '../app//Images/alex-furgiuele-UkH7L-aag8A-unsplash.jpg'

export default function Cacto(){
    return(
        <section className="flex items-center">
          <div className="mr-10 w-5/6">
            <Image src={cacto} alt="Cacto"/>
          </div>
          <div className="flex flex-col gap-5 bg-zinc-300/30 p-5 rounded">
            <h2 className="font-bold text-gray-400 text-2xl font-mono italic text-justify">&quot; Photosynthesis is nothing more and 
            nothing less than a sequence of everyday activities that plants do to survive. They last all day and each step is extremely important. &quot;</h2>
            <p className=" text-justify text-gray-600">The plants needs a <span className="text-green-600">daily planning </span> 
            so you can get your <span className="text-green-600">goals</span>. The Cactus, for example, spends half the year storing
             water inside, with the aim of withstanding the driest times.
            </p>
            <h1 className="text-center text-4xl text-green-600 p-2 font-medium mx-40 rounded">If even plants organize your day, why 
            not you? Start your Dailylist now ➔</h1>
          </div>
        </section>
    )
}