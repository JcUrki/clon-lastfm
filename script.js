// J
fetch("music.json") //Carga en memoria
.then(res=>res.json()) //Especifica el formato en que se desea obtener la información, que es igual a hace un JSON.parse()
.then(data => musicList(data)) //Mostrar la información

const main= document.querySelector("main");
const titleList= document.createElement("h2");
const numberedList= document.createElement("ol");
main.appendChild(titleList);
titleList.appendChild(numberedList);

window.addEventListener("load", ...);

function musicList(data){
    for (let i = 0; i < data.length; i++) {
        
        // ({name:data.name}.{})

    }   
}
