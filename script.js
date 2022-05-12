// J
fetch("music.json") //Carga en memoria
.then(res=>res.json()) //Especifica el formato en que se desea obtener la información, que es igual a hace un JSON.parse()
.then(data => musicList(data)) //Mostrar la información

const body= document.querySelector("body");
const musicName= [];



function musicList(data){
    for (let i = 0; i < data.length; i++) {
        // ({name:data.name}.{})
        
        //Título
        //lista que este relacionada con
    }

    
   
}

 /*const linkList=document.querySelectorAll("a");
    linkList[1].setAttribute('href', "data.name.");
     linkList[2].setAttribute('href', "");
    linkList[3].setAttribute('href', "");
    linkList[4].setAttribute('href', "");
    linkList[5].setAttribute('href', "");
    linkList[6].setAttribute('href', "");
    linkList[7].setAttribute('href', "");
    linkList[8].setAttribute('href', "");*/