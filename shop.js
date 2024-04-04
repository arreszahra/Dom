var plus = document.querySelectorAll(".plus")
var mins = document.querySelectorAll(".mins")
var qty = document.querySelectorAll(".qty")
var price = document.querySelectorAll(".price")
var total_price = document.querySelector("#total-price")
var deleteItem = document.querySelectorAll(".bi-trash")
var like = document.querySelectorAll("bi-heart-fill")
var prix= document.getElementById("prix")




let plusAdded = false;
if (!plusAdded){
plus.forEach(function(item, i){
    item.addEventListener("click", function(){
        console.log("Plus button clicked");
       let quantity = parseInt(qty[i].innerHTML);
       qty[i].innerHTML = parseInt(qty[i].innerHTML) + 1;
       totale()
      
})
})
}
let minsAdded= false;
if (!minsAdded){
    mins.forEach(function(item, i){
        item.addEventListener("click", function(){
            console.log("Mins button clicked");
           let quantity = parseInt(qty[i].innerHTML);
           qty[i].innerHTML = parseInt(qty[i].innerHTML) - 1;
           totale()
          
    })
    })
    }
     deleteItem.forEach(function(deleteItem,i){
        deleteItem.addEventListener("click",function(){
            deleteItem.parentNode.remove(deleteItem);
        })
       
    
   })



   function totale() {
    let price = document.querySelectorAll(".price");
    let qty = document.querySelectorAll(".qty");
    let total_price = 0;

    qty.forEach(function(quantity, i) {
        total_price += parseInt(price[i].innerHTML) * parseInt(quantity.innerHTML);
    });

    let prix = document.getElementById("prix");
    prix.innerHTML = total_price;
}

totale();