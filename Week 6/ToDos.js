var id = 1;
document.getElementById("add").onclick = function() {
    var text = document.getElementById("newToDo").value;
    var li = document.createElement("li");
    var ul = document.getElementById("list");
    li.innerHTML = '<input type="checkbox" id="item' + [id] + '" onclick="checkMyBox(' + [id] +')">    ' + text + '   <input type="button" value="X">';
    id += 1;
    ul.appendChild(li);  
}

function checkMyBox(myId) {
    checkBox = document.getElementById("item" + myId);
    var item  = document.querySelector("ul:nth-child("+ parseInt(myId) +")");
    if (checkBox.checked == true) {
        alert(item);        }
    else{
            alert(myId + " not checked");
        }
    }
    