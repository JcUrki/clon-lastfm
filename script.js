// J
const main= document.querySelector("main");
const listContainer= document.createElement("table");
const titleList= document.createElement("h3");
const linksLists= document.querySelectorAll("a");
main.appendChild(titleList);
main.appendChild(listContainer);
let music;

//US 1
fetch("music.json") //Carga en memoria
.then(res => res.json()) //Especifica el formusicato en que se desea obtener la informusicación, que es igual a hacer un JSON.tdarse()
.then(data => {
    musicList(data,"Overview");
    music= data;
}) //Mostrar la informusicación obtenida

function musicList(songs, title){
    listContainer.innerHTML= "";
    titleList.innerText= title;
    songs.forEach(song => { 
        const list= document.createElement("tr");
        list.innerHTML += `
        <img class="play" src="Images/icono-play.png"/>
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
    let list10=[...songs];//Desestructura el array = copia profunda, por lo que no altera la original
    list10.sort((a, b)=> {
        let listenersA = parseInt(a.listeners);
        let listenersB = parseInt(b.listeners);
        return listenersB - listenersA;
    })
    let list7= list10.slice(0,10);
    musicList(list7, title);  
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

//J
//US 12
const listBiggest = linksLists[8];
listBiggest.onclick=(e)=>{
    e.preventDefault();
    biggest(music, e.currentTarget.textContent);  
};
function biggest(songs, title){
    // Artists data without repeat
    let listArtists = [];
    /*
    if(!songs.length){
        return undefined;
    } 
    */
    for(let i=0; i<songs.length; i++){
        if(listArtists.indexOf(songs[i].artist.name)===-1){
            listArtists.push(songs[i].artist.name);
        }
    }

    listArtists.forEach(artist=>{
        let filter= songs.filter(song => song.artist.name.includes(artist.name));
        console.log(filter)

        // Agregar listeners data
        let listListeners= parseInt(artist.listeners);
        filter.listeners += listListeners;

        /* 
        Other option- listListeners
            let listListeners=filter.reduce((a ,b) => a + parseInt(b.listeners),0)
            artist.listeners= listListeners;
        */
    })
    let artistOl= listArtists.sort((a, b)=> {
        let listenersA = parseInt(a.listeners);
        let listenersB = parseInt(b.listeners);
        return listenersB - listenersA;
    });
    let artist= artistOl[0];
    let list8= songs.filter(song => song.artist.name.includes(artist));
    musicList(list8, title);
};
