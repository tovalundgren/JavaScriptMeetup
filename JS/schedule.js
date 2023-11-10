const mainContent = document.getElementsByClassName("main-content"); //hämtar element från index.HTML

async function getSchedule (){
    const response = await fetch("../JSON/schedule.json");

    const schedules = await response.json();

    console.log(schedules);

    const scheduleList = document.createElement("ul");
}

function showSchedule(json){
    json.schedule.forEach(schedule => {
        //skapa ett H3 element HTML:
        const newH3 = document.createElement('h3');
        //hämtar innehåll till H3 element från JSON:
        newH3.textContent = schedule.event;
        //döp klass för CSS
        newH3.classList.add = 'schedule-header';
        //h3 existeras, men är ej kopplad till HTML:
        mainContent.appendChild(newH3);
        console.log(newH3);
    });
}

getSchedule();
showSchedule();