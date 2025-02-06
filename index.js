let bill = document.querySelector("#bill");
let tip = document.querySelector("#tip");
let button = document.querySelector("button");
let msg = document.querySelector(".div2");

button.addEventListener('click',()=>{
    let total = parseFloat(bill.value*(tip.value/100))+parseFloat(bill.value);
    msg.innerHTML = total;
    bill.value ="";
    tip.value= "";
    
})