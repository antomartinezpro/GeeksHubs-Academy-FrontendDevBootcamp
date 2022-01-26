function addHtml(){
    let escrito = document.getElementById("input1");

    let objetoDiv = document.getElementById("contenedor");
    let p = document.createElement("p");

    p.innerHTML = escrito.value;

    escrito.value = "";

    objetoDiv.appendChild(p);
}

function removeHtml(){
    let escrito = document.getElementById("input1");

    let objetoDiv = document.getElementById("contenedor");
    let p = document.createElement("p");

    p.innerHTML = escrito.value;

    escrito.value = "";

    if(objetoDiv.hasChildNodes()){
        for(let i=0; i<objetoDiv.childNodes.length; i++){
            if(objetoDiv.childNodes[i].textContent ===  p.textContent){
                objetoDiv.removeChild(objetoDiv.childNodes[i]);
            }
        }
    }
}

function removeAllHtml(){
    let objetoDiv = document.getElementById("contenedor");

    if(objetoDiv.hasChildNodes()){
        while(objetoDiv.firstElementChild){
            objetoDiv.removeChild(objetoDiv.firstElementChild);
        }
    }

}