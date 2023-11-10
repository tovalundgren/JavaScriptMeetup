const mainContentSchedule = document.querySelector(".main-content"); //hämtar element från index.HTML

async function getSchedule (){
    const response = await fetch("../JSON/schedule.json");

    const schedules = await response.json();

    const scheduleList = document.createElement("ul");

    showSchedule(schedules);
}

function showSchedule(schedules){
    schedules.schedule.forEach(event => {
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('schedule-div');
        
        //skapa ett H3 element HTML:
        const newH3 = document.createElement('h3');
        //hämtar innehåll till H3 element från JSON:
        newH3.textContent = event.Event;
        //döp klass för styling i CSS
        newH3.classList.add('schedule-intro');
        //h3 existeras, men är ej kopplad till HTML:
        mainDiv.appendChild(newH3);

        const timeP = document.createElement('p');
        timeP.textContent = "Time: " + event.Time;
        timeP.classList.add('schedule-time');
        mainDiv.appendChild(timeP);

        const locationP = document.createElement('p');
        locationP.textContent = "Location: " + event.Location;
        locationP.classList.add('schedule-location');
        mainDiv.appendChild(locationP);

        mainContent.appendChild(mainDiv); 
    });
}