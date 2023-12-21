let pluss=Array.from(document.getElementsByClassName("fa-plus"))
let quan=Array.from(document.getElementsByClassName("zero"))
console.log(pluss);
console.log(quan)

for(let i=0;i<pluss.length;i++){
    pluss[i].addEventListener("click",function(){
        quan[i].innerHTML++
        sum()
    })
}

let minss=Array.from(document.getElementsByClassName("fa-minus"))
for(let i=0;i<minss.length;i++){
    minss[i].addEventListener("click",function(){
        if (quan[i].innerHTML>0 ){
            quan[i].innerHTML-- }
            sum()
    })}

let trash=Array.from(document.getElementsByClassName("fa-trash"))
for (let i=0 ; i<trash.length;i++){
    trash[i].addEventListener("click",function(){
        console.log(trash)
        trash[i].closest(".servies").remove()
        sum()
    })
}

function sum(){
    let prix=Array.from(document.getElementsByClassName("prix"))
    let quan=Array.from(document.getElementsByClassName("zero"))

    let sum=0
    for(let i=0;i<prix.length;i++){
        sum=sum+(quan[i].innerHTML * prix[i].innerHTML)
    }
    document.getElementsByClassName("total")[0].innerHTML="total :"+ sum +"DT" 
}

sum()

let heart=document.getElementsByClassName("fa-heart")

for (let i=0;i<heart.length;i++){
    heart[i].addEventListener("click",function(){
        heart[i].classList.toggle("red")})
}