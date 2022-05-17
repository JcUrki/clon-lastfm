// J
const main= document.querySelector("main");
const listContainer= document.createElement("section");
const titleList= document.createElement("h3");
main.appendChild(listContainer);
listContainer.appendChild(titleList);



    fetch("music.json") //Carga en memoria
    .then(res => res.json()) //Estdecifica el formato en que se desea obtener la información, que es igual a hacer un JSON.tdarse()
    .then(data => musicList(data)) //Mostrar la información obtenida

//const linksLists= document.querySelectorAll("a");

function musicList(songs){
    songs.forEach(song => { 
        const list1= document.createElement("tr");
        list1.innerHTML += `
        <td class="nameArtist"><a href= "${song.artist.url}">${song.artist.name}</a></td>
        <td><a href="${song.url}" target="_blank">${song.name}</a></td> 
        <td class= "listeners">${song.listeners} Listeners</td>    
        `;
        listContainer.appendChild(list1);
    });  
}
window.onload = musicList();

