
let radioCheck;

//saber qual formato foi selectionado
function check(id) {
    let quality = document.getElementById('quality');
    
    if (id === 'mp3') {
        radioCheck = id;
        let opt = document.createElement('option');
        
        
        /*aqui vou fazer a incrementação dos formatos*/
    }
    return radioCheck = id
};

function down() {
    
    const areaurl = document.getElementById('txturl');
    
    if (!areaurl.value) {
        alert('Formato de link incorreto')
    }
    let url = areaurl.value
    console.log(url);
    
};

