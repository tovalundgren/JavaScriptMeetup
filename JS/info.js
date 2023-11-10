const mainContent = document.querySelector('.main-content');

// Fetchar 
async function getInfo() {
    console.log("getInfo")
    const response = await fetch("../JSON/info.json");
    if (response.ok) {
        const json = await response.json();
        const infos = json;        
        createInfo(json);                
    } else {
        console.log('Error ' + response.status);
    };
} 

// Function 
function createInfo(infos) {
    infos.forEach(function (info) {

        // Skapar li-element som är förälder     
        const infoList = document.createElement('li');

        // skapar h4-element inuti li-elementet 
        const infoListHeader = document.createElement('h4');

        // skapar p-element inuti li-elementet 
        const infoListPara = document.createElement('p');

        // Vi hämtar text-content från JSON-filen med key:list
        infoListHeader.textContent = `${info.list}:`;
        
        // Vi hämtar text-content från JSON-filen med key:info
        infoListPara.textContent = info.info;  

        // Appendar de variabel som vi har skapat 
        infoList.appendChild(infoListHeader);  
        infoList.appendChild(infoListPara); 
        console.log(info)

        mainContent.appendChild(infoList); 
    });    
}


//getInfo();


