let list;
function getList(){
    fetch('music.json')
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        list.innerHTML = `${data}`
})
}
getList();