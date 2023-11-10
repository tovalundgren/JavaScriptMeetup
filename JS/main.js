const navInfo = document.querySelector(".nav-info");
const navSchedule = document.querySelector(".nav-schedule");
const navSpeakers = document.querySelector(".nav-speakers");

navInfo.addEventListener("click", function () {
    mainContent.innerHTML = "";
    getInfo();
});

navSchedule.addEventListener("click", function () {
    mainContent.innerHTML = "";
    getSchedule();
});

navSpeakers.addEventListener("click", function () {
    mainContent.innerHTML = "";
    getJSON();
});