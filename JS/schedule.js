async function getSchedule (){
    const response = await fetch("../JSON/schedule.json");

    const schedules = await response.json();

    console.log(schedules);

    const scheduleList = document.createElement("ul");
}

getSchedule();