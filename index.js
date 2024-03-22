//https://jsonplaceholder.typicode.com/users



fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json())
.then((data)=>
showItem(data)
)



function showItem(data){
data.forEach((user)=>{
    console.log(user)
    let Itemcard=document.getElementById("card")
    let div=document.createElement("div")
    let h1=document.createElement("h1")
    h1.textContent=user.name
    let h2=document.createElement("h2")
    h2.textContent=user.username
    let h3=document.createElement("h3")
    h3.textContent=user.address.street
    let h4=document.createElement("h4")
    h4.textContent=user.company.name
   
     div.append(h1,h2,h3,h4)

    Itemcard.append(div)

})



}
// showItem()

