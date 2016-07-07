//todo.js

function updateStatus() {
    var cbId = this.id.replace("cb_", "");
    var itemInd = document.getElementById("item_" + cbId);
  
    if (this.checked){ 
      itemInd.style.textDecoration = "line-through";
      itemInd.style.color="red";
      
      itemInd.style.fontStyle="alias";
      itemInd.style.fontSize="0.9em";
      //itemInd.classname="checked"; 
      // in .css, I can add .checked { //cssStyle }
    } else {
      itemInd.style.textDecoration = "none";
      itemInd.style.color="black";
      itemInd.style.fontWeight="bold";

      // itemInd.classname="";
    }
}

function addItems(itemName,List){
   totalNum++;

   var Item = document.createElement("li");   
   var checkbox = document.createElement("input");
   checkbox.type = "checkbox";
   checkbox.id = "cb_" + totalNum;
   checkbox.onclick = updateStatus;

   var span = document.createElement("span");
   span.id = "item_" + totalNum;
   span.innerText = itemName;

   Item.appendChild(checkbox);
   Item.appendChild(span);

   List.appendChild(Item);
   

}
var totalNum= 0;
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
