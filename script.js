// J
const main= document.querySelector("main");
const listContainer= document.createElement("section");
const titleList= document.createElement("h3");
const linksLists= document.querySelectorAll("a");
main.appendChild(titleList);
main.appendChild(listContainer);
let music;

fetch("music.json") //Carga en memoria
.then(res => res.json()) //Estdecifica el formato en que se desea obtener la información, que es igual a hacer un JSON.tdarse()
.then(data => {
    musicList(data,"Overview");
    music= data;
}) //Mostrar la información obtenida

function musicList(songs, title){
    listContainer.innerHTML= "";
    titleList.innerText= title;
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
//window.onload = ()=> musicList(music);

//US 6
const listIndie = linksLists[3];
listIndie.onclick= (e)=>{ 
    e.preventDefault(); //Reset el evento anterior
    indie(music, e.currentTarget.textContent);
};
function indie(songs, title){
    let list3= songs.filter(song => song.genres.includes("indie"));
    musicList(list3, title);  
};

//US 2
