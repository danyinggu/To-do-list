//todo.js

function addItems(itemName,List){
   var Item = document.createElement("li");
   Item.innerText = itemName;
   
   List.appendChild(Item);

}


var inlineText = document.getElementById("inline-text");
inlineText.focus();

var addItem = document.getElementById("buttonNew");

addItem.onclick = function() {

       var itemName = inlineText.value;
       if((!itemName) || (itemName == "") ||(itemName == " ")) {
          return false;
        }
       addItems(itemName, document.getElementById("todolist"));

       inlineText.focus();
       inlineText.select();
};
