const mainContent = document.querySelector('.main-content');

// Fetch
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
            
        const infoList = document.createElement('li');
        const infoListHeader = document.createElement('h4');
        const infoListPara = document.createElement('p');

        infoListHeader.textContent = `${info.list}:`; 
        infoListPara.textContent = info.info;  

        infoList.appendChild(infoListHeader);  
        infoList.appendChild(infoListPara); 
        console.log(info)
        mainContent.appendChild(infoList); 
    });    
}


getInfo();


function hej(){
    console.log("hej");
}
