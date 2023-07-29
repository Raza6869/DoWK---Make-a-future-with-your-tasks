export default function TimeBox() {
        const data = new Date();
        const hours = data.getHours();
        const minutes = data.getMinutes();
        const todayHours = hours < 10 ? ('0' + hours) : hours;
        const todayMinutes = minutes < 10 ? ('0' + minutes) : minutes;
        const period = setPeriod()

        function setPeriod(){
            if(todayHours < 12){
                return ("da manhã")
            }else if(todayHours >= 12 && todayHours < 18 ){
                return ("da tarde")
            }else if( todayHours >= 18){
                return ("da noite")
            }
        }

    return (
        <div className="h-2/4 items-start bg-[url('../app/img/backgroundmorning.png')] p-5 mb-6 text-white bg-fixed bg-contain bg-no-repeat flex justify-between">
            <div className="p-20">
                <h1 className="text-8xl font-sans font-bold">{todayHours}:{todayMinutes}<span className="text-3xl font-light ml-3w">{period}</span></h1>
            </div>
            <div>
                <ul className="flex justify-end gap-3 text-2xl">
                    <li><i className="bi bi-bell-fill"></i></li>
                    <li><i className="bi bi-question-circle"></i></li>
                    <li><i className="bi bi-gear-fill"></i></li>
                </ul>
            </div>
        </div>
    )
}