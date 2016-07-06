//todo.js

function addItems(itemName,List){
   var Item = document.createElement("li");   
   var checkbox = document.createElement("input");
   checkbox.type = "checkbox";

   var span = document.createElement("span");
   span.innerText = itemName;

   Item.appendChild(checkbox);
   Item.appendChild(span);

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
