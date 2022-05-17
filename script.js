// J
const main= document.querySelector("main");
const listContainer= document.createElement("section");
const titleList= document.createElement("h3");
const linksLists= document.querySelectorAll("a");
main.appendChild(titleList);
main.appendChild(listContainer);
let music;

//US 1
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
        <img src="im"/>
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
    e.preventDefault(); //Cancela el evento anterior
    indie(music, e.currentTarget.textContent);
};
function indie(songs, title){
    let list3= songs.filter(song => song.genres.includes("indie"));
    musicList(list3, title);  
};

//US 2
const listOverview = linksLists[6];
listOverview.onclick= (e)=>{ 
    e.preventDefault();
    overview(music, e.currentTarget.textContent);
};
function overview(songs, title){
    let list6= songs;
    musicList(list6, title);  
};

//US 3
const listTop10 = linksLists[7];
listTop10.onclick= (e)=>{ 
    e.preventDefault();
    top10(music, e.currentTarget.textContent);
};
function top10(songs, title){
    songs.sort((a, b)=> {
        let listenersA = parseInt(a.listeners);
        let listenersB = parseInt(b.listeners);
        return listenersB - listenersA;
   })
    let list7= songs.slice(0,10);
    musicList(list7, title);  
    list7(20);
};

//L
//US 4
const listRock = linksLists[1];
listRock.onclick= (e)=>{ 
    e.preventDefault();
    rock(music, e.currentTarget.textContent);
};
function rock(songs, title){
    let list1= songs.filter(song => song.genres.includes("rock"));
    musicList(list1, title);  
};

/* US 4*/
//US 5
const listHipHop= linksLists[2];
listHipHop.onclick= (e)=>{ 
    e.preventDefault();
    hipHop(music, e.currentTarget.textContent);
};
function hipHop (songs, title){
    let list2= songs.filter(song => song.genres.includes("Hip-Hop"));
    musicList(list2, title);  
};

/* US 5*/
//US 8
const listReggae= linksLists[5];
console.log(listReggae, 'listReggae')
listReggae.onclick= (e)=>{ 
    e.preventDefault();
    reggae(music, e.currentTarget.textContent);
};
function reggae(songs, title){
    let list5= songs.filter(song => song.genres.includes("reggae"));
    musicList(list5, title);  
};

//US 7
const listJazz= linksLists[4];
listJazz.onclick= (e)=>{ 
    e.preventDefault();
    jazz(music, e.currentTarget.textContent);
};
function jazz(songs, title){
    let list4= songs.filter(song => song.genres.includes("jazz"));
    musicList(list4, title);  
};
    
const listradiohead = linksLists[8];
listradiohead.onclick=(e)=>{
    e.preventDefault();
    radiohead(music, e.currentTarget.textContent);  
};
function radiohead(songs, title){
    let list8= songs.filter(song => song.genres.includes("radiohead"));
    console.log(list8, "list")
    musicList(list8, title);  
};
