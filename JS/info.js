const mainContent = document.getElementsByClassName('.main-content');

// Fetch
async function getInfo() {
    const response = await fetch("../JSON/info.json");
    if (response.ok) {
        const json = await response.json();
        const infos = json;
        console.log('YEEEY')
        createInfo(json);
        //console.log(infos)
        
    } else {
        console.log('Error ' + response.status);
    };


} 

// Function 
function createInfo(infos) {
    infos.forEach(function (info) {
            
        const infoList = document.createElement('li');
        infoList.textContent = `{${info}}: list {${info}}: info`;
        
        //console.log(info.list)

        //mainContent.appendChild(infoList);
        //console.log(infos);

        //console.log(info);
        console.log(infoList)

    });
    
}

getInfo();

