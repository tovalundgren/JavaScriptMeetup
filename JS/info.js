const mainContent = document.querySelector('.main-content');

// Fetch
async function getInfo() {
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
            
        const infoList = document.createElement('li');
        infoList.textContent = `${info.list}: ${info.info} `;                
        mainContent.appendChild(infoList);                
        console.log(infoList)

    });
    
}

getInfo();

