//todo.js

// July 5th, 2016

function updateStatus() {
    // extract the index
    var cbId = this.id.replace("cb_", "");
    // change it to item id
    var itemInd = document.getElementById("item_" + cbId);
  
    // check the checkbox -> change in text
    if (this.checked){ 
      itemInd.style.textDecoration = "line-through";
      itemInd.style.color="red";
      
      itemInd.style.fontStyle="italic";
      itemInd.style.fontSize="0.9em";
      //itemInd.classname="checked"; 
      // in .css, I can add .checked { //cssStyle }
    } else {
      itemInd.style.textDecoration = "none";
      itemInd.style.fontStyle="";
      itemInd.style.color="black";
      itemInd.style.fontWeight="bold";

      // itemInd.classname="";
    }
}

function addItems(itemName,List){

   //make each checkbox+texts unique, for the clicking issue
   totalNum++;

   var Item = document.createElement("li");  

   // give the input type as Checkbox 
   var checkbox = document.createElement("input");
   checkbox.type = "checkbox";
   // give this checkbox an unique id
   checkbox.id = "cb_" + totalNum;
   checkbox.onclick = updateStatus;

   // give the span a unique id, add the innertext be want the user typed
   var span = document.createElement("span");
   span.id = "item_" + totalNum;
   span.innerText = itemName;

   // add checkbox with span(text) to li
   Item.appendChild(checkbox);
   Item.appendChild(span);

   // add li to the list
   List.appendChild(Item);
   

}

//id index
var totalNum= 0;

// make the cursor focus on the field
var inlineText = document.getElementById("inline-text");
inlineText.focus();

var addItem = document.getElementById("buttonNew");

inlineText.onkeyup = function(eve) {
   if(eve.which == 13) {
     var itemName = inlineText.value;
    }
    if((!itemName) || (itemName == "")) {
          return false;
        }
// add items (call function)
       addItems(itemName, document.getElementById("todolist"));

// after adding items, select the previous field and focus them
         inlineText.select();

       inlineText.focus();


};

// once click the button, add text to according to items
addItem.onclick = function() {

       var itemName = inlineText.value;

//if user enters space or nothing
       if((!itemName) || (itemName == "")) {
          return false;
        }

// add items (call function)
       addItems(itemName, document.getElementById("todolist"));

// after adding items, select the previous field and focus them
         inlineText.select();

       inlineText.focus();
     };
