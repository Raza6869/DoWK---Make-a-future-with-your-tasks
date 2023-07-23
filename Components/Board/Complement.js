export default function Complement(){
    const username = "Cocó";
    const data = new Date;
    const hours = data.getHours();
    const cumprimentacao = cumpriLogic();

    function cumpriLogic(){
        if(hours < 12 ){
            return "Bom dia"
        }else if(hours >= 12 ){
            return "Boa tarde"
        }else if(hours > 17 ){
            return "Boa noite"
        }
    };
    return(
        <div className="flex gap-2 items-baseline ml-10 mb-20">
            <h1 className="font-bold text-green-500 text-3xl">{cumprimentacao}, {username}!</h1>
            <input type="date" name="Date" id="Date" className=" bg-green-500 invert px-3 rounded-xl text-sm w-[10em]"/> 
         </div>
    )
}