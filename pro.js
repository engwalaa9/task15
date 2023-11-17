

var btn1 = document.getElementById("btn1")
var view = document.getElementById("view")
var data = [
    {id:1 , name:"black hoody", price:"   300$", description:"" , Image:{src:"../photo/ph1.jpg"}},
    { id:2 , name:"white hoody",  price:"   100$", description:"" , Image:"src:photo/ph2.jpg"},
    {id:3 , name:" baby coat",   price:"   400$",description:"" , Image:"src:photo/ph3.jpg"},
    { id:4 , name:" blue coat", price:"   250$", description:"" , Image:"src:photo/ph4.jpg"},
    {id:5 , name:"black coat", price:"   200$", description:"" , Image:"src:photo/ph5.jpg"}
]

function show(items){
    view.innerHTML=""
    items.forEach(function(ele){


view.innerHTML += `<div onclick =delet(${ele.id})>${ele.name+ele.price}</div>`
    }  
    )
    }
window.onload = function(){
    show(data)}
    btn1.addEventListener("click",add)
    function add(){
        
var tshirt = document.getElementById("tshirtinput")

if (tshirt.value==""){
    alert("enter product")
}
var last = data[data.length-1].id
data.push({id:++last ,name:tshirt.value})
 var additem = data[data.length-1]
 view.innerHTML += `<div onclick= delet(${additem.id})> ${additem.name} </div>`
     tshirt.value =""  
    }
function delet(id){
    var index =data.map( function(i) {
        return i.id
    }).indexOf (id)
if(index !== -1){
    data.splice(index ,1)
}

    show(data)
}

