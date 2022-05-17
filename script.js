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
        const list= document.createElement("tr");
        list.innerHTML += `
        <img src="icon.svg"/>
        <td class="nameArtist"><a href= "${song.artist.url}">${song.artist.name}</a></td>
        <td><a href="${song.url}" target="_blank">${song.name}</a></td> 
        <td class= "listeners">${song.listeners} Listeners</td>    
        `;
        listContainer.appendChild(list);
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

//US 4
const listRock = linksLists[1];
listRock.onclick= (e)=>{ 
    e.preventDefault(); //Reset el evento anterior
    rock(music, e.currentTarget.textContent);
};
function rock(songs, title){
    let list1= songs.filter(song => song.genres.includes("rock"));
    musicList(list1, title);  
};

const listHipHop= linksLists[2];
listHipHop.onclick= (e)=>{ 
    e.preventDefault(); //Reset el evento anterior
    HipHop(music, e.currentTarget.textContent);
};
function HipHop (songs, title){
    let list2= songs.filter(song => song.genres.includes("Hip-Hop"));
    musicList(list2, title);  
};

const listReggae= linksLists[5];
console.log(listReggae, 'listReggae')
listReggae.onclick= (e)=>{ 
    e.preventDefault(); //Reset el evento anterior
    reggae(music, e.currentTarget.textContent);
};
function reggae(songs, title){
    let list5= songs.filter(song => song.genres.includes("reggae"));
    musicList(list5, title);  
};

/*US 7*/
const listJazz= linksLists[4];
/*console.log(listJazz, 'listJazz')*/
listJazz.onclick= (e)=>{ 
e.preventDefault(); //Reset el evento anterior
   /* console.log(jazz(music, e.currentTarget.textContent))*/
    jazz(music, e.currentTarget.textContent);
};
function jazz(songs, title){
    let list4= songs.filter(song => song.genres.includes("jazz"));
    console.log(list4, "list")
    musicList(list4, title);  
};