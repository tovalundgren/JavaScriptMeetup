const mainContent = document.querySelector(".main-content")

async function getJSON() {
    const response = await fetch("../JSON/profiles.json");
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

    //hela diven för sektionen 
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('container-div');

    mainContent.appendChild(containerDiv);

    json.profiles.forEach(profile => {


        // card divarna
        const newDiv = document.createElement('div');
        newDiv.classList.add('profile-card');
       

        // för att skapa ett element h3 i detta fall
        const newH3 = document.createElement('h3');
        // för att lägga innehåll i h3 från JSON key "name" med dess värde 
        newH3.textContent = profile.name;
        // lägger till klass namn
        newH3.classList.add = 'card-header';
        // för att koppla h3 till vår html fil, så det inte ligger ute i ingenstans
        newDiv.appendChild(newH3);
        console.log(newH3);

       const newH4 = document.createElement('h4');
        newH4.textContent = profile.topic;
        newH4.classList.add = 'topic-header';
        newDiv.appendChild(newH4);

       const newP1 = document.createElement('p');
        newP1.textContent = profile.description;
        newP1.classList.add = 'description';
        newDiv.appendChild(newP1);

       const newP2 = document.createElement('p');
        newP2.textContent = profile.experiences;
        newP2.classList.add = 'experiences';
        newDiv.appendChild(newP2);

        const newImg = document.createElement('img');
        newImg.src = profile.profilePicture;
        newImg.classList.add('profile-img');
        newDiv.appendChild(newImg);



        
        containerDiv.appendChild(newDiv);
        console.log(newDiv);
    });
}