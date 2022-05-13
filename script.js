// J
const main= document.querySelector("main");
const titleList= document.createElement("h2");
const numberedList= document.createElement("ul");
main.appendChild(titleList);
main.appendChild(numberedList);

fetch("music.json") //Carga en memoria
.then(res=>res.json()) //Especifica el formato en que se desea obtener la información, que es igual a hace un JSON.parse()
.then(data => console.log(data)) //Mostrar la información

const linksLists= document.querySelectorAll("a").addEventListener("click", musicList());
numberedList.appendChild(linksLists);

window.addEventListener("loaded", musicList);

function musicList(data){ 
        //for (let i= 0; i < data.length; i++){
            //US#1
            data.forEach(songs => {
                linksLists[1].innerHTML += `<li><i class="fa-solid fa-play"/> <span>${songs.artist.name} ${songs.name} ${songs.listeners} Listeners</span></li>`
            });
            document.querySelector("numberedList").innerHTML= i;
       // }
    
   /* for (let i= 0; i < data.length; i++){
        // US#4 If I click in "Rock", I can see the songs more listened of rock genre
        data.filter(data => data.genres.includes("rock"))
        data.forEach(data => {
            linksLists[1] += `<li><i class="fa-solid fa-play"/><span>${data.artist.name}    ${data.name} </span> <span>${data.listeners}</span>Listeners</li>`;
        });
        return numberedList.innerHTML= linksLists[1];
    }*/
    
}

/*
function lRock(){
    fetch("music.json")
    .then(res => res.json())
    .then(function(data){
        let html="";
        let rockArray= data.filter(song => song.genres.includes("rock") )
        rockArray.forEach(song => {
            html += `<li>${song.artist.name}${song.name}${song.listeners} listeners</li>`
        });
        document.querySelector("numberedList").innerHTML=html;
        })
        
};*/
