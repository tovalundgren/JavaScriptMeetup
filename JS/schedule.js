const mainContentSchedule = document.querySelector(".main-content"); //hämtar element från index.HTML

async function getSchedule (){
    const response = await fetch("../JSON/schedule.json");

    const schedules = await response.json();

    console.log(schedules);

    const scheduleList = document.createElement("ul");

    showSchedule(schedules);
}

function showSchedule(schedules){
    schedules.schedule.forEach(event => {
        //skapa ett H3 element HTML:
        const newH3 = document.createElement('h3');
        //hämtar innehåll till H3 element från JSON:
        newH3.textContent = event.Event;
        //döp klass för CSS
        newH3.classList.add = 'schedule-header';
        //h3 existeras, men är ej kopplad till HTML:
        mainContentSchedule.appendChild(newH3);

        const timeP = document.createElement('p');
        timeP.textContent = "Time: " + event.Time;
        timeP.classList.add = "schedule-time";
        mainContentSchedule.appendChild(timeP);

        const locationP = document.createElement('p');
        locationP.textContent = "Location: " + event.Location;
        locationP.classList.add = "schedule-location";
        mainContentSchedule.appendChild(locationP);

        console.log(newH3);
    });
}

getSchedule();