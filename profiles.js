const mainContent = document.getElementsByClassName("main-content")

async function getJSON() {
    const response = await fetch("./JSON/profiles.json");
    // om vi får korrekt koppling då ska fäljande köras
    if (response.ok) {
        const json = await response.json();
        showProfile(json)
    } else {
        // för att veta vad det är för fel
        console.log("HTTP-error:" + response.status)
    }
} 

function showProfile(json) {
    //json (för att gå till json variabeln, .profiles för att gå in i objekten under profiles)
    json.profiles.forEach(profile => {
        // för att skapa ett element h3 i detta fall
        const newH3 = document.createElement('h3')
        // för att lägga innehåll i h3 från JSON key "name" med dess värde 
        newH3.textContent = profile.name
        // lägger till klass namn
        newH3.classList.add = 'card-header'
        // för att koppla h3 till vår html fil, så det inte ligger ute i ingenstans
        mainContent.appendChild(newH3)
        console.log(newH3);

        // newh4 = document.createElement('h4')

    });
}

getJSON();