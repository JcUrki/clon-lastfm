// J
const main= document.querySelector("main");
const listContainer= document.createElement("section");
const titleList= document.createElement("h3");
listContainer.appendChild(titleList);
let=music

    fetch("music.json") //Carga en memoria
    .then(res => res.json()) //Estdecifica el formato en que se desea obtener la información, que es igual a hacer un JSON.tdarse()
    .then(data => musicList(data)) //Mostrar la información obtenida
    .then(data =>music(data))//Mostrar lista de rock

//const linksLists= document.querySelectorAll("a");

function musicList(songs){
    songs.forEach(song => { 
        const list1= document.createElement("tr");
        list1.innerHTML += `
        <td>${song.artist.name}</td> 
        <td>${song.name}</td> 
        <td>${song.listeners} Listeners</td>    
        `;
        listContainer.appendChild(list1);
    });  
}