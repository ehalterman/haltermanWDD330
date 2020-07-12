document.body.onload = buttons;
function buttons(){
    //var newp = document.createElement("p");
    var newp2 = document.createElement("p");
    //newp.innerHTML = "test";
    //newp.innerHTML = "Sort By: <input type='button' id='active' onclick='sort(" + true + ")' value='Active'><input type='button' id='complete' onclick='sort(" + false + ")' value='Completed'>";
    newp2.innerHTML = "Filter By: <input type='button' id='all' onclick='filter(" + -1 + ")' value='All'><input type='button' id='active' onclick='filter(" + 0 + ")' value='Active'><input type='button' id='complete' onclick='filter(" + 1 + ")' value='Completed'>";

    var div = document.getElementById("item");
    //div.parentNode.insertBefore(newp, div.nextSibling);
    div.parentNode.insertBefore(newp2, div.nextSibling);
}

var id = 1;
document.getElementById("add").onclick = function() {
    var text = document.getElementById("newToDo").value;
    var li = document.createElement("li");
    var ul = document.getElementById("list");
    li.setAttribute("id", "li" + [id]);
    li.setAttribute("style", "display:'block'");
    li.innerHTML = '<input type="checkbox" class="checkbox" id="item' + [id] + '" onclick="checkMyBox(' + [id] + ')">    ' + text + '   <input type="button" id="button' + [id] + '" onclick="deleteItem(' + [id] + ')" value="X">';
    id += 1;
    ul.appendChild(li);  
}

function checkMyBox(myId) {
    checkBox = document.getElementById("item" + myId); 
    if (checkBox.checked == true) {
        document.getElementById("li" + [myId]).style.textDecoration = "line-through";
        //alert(checkBox.innerHTML);   
    }
    else{
        document.getElementById("li" + [myId]).style.textDecoration = "none";
     //alert(" not checked");
       }
    }

function deleteItem(myId) {
    //alert(myId);
    var list = document.getElementById("li" + [myId]);
    list.parentNode.removeChild(list);
}

// function sort(chkd) {
//     var checkBoxes = document.getElementsByClassName("checkbox");
//     var ul = document.getElementById("list");
//     for (var i = 0; i < checkBoxes.length; i++){
//         if (checkBoxes[i].checked != chkd){
//             if (i > 0) {
//                 var li = checkBoxes[i].parentNode;
//                 ul.prepend(li);
//             }
//         }
//     }
// }

function filter(status) {
    var checkBoxes = document.getElementsByClassName("checkbox");
    var ul = document.getElementById("list");
    var chkd = true;
    if (status == 0){
        chkd = false;
    }
    for (var i = 0; i < checkBoxes.length; i++){
        var li = checkBoxes[i].parentNode;
        if (status == -1){
            li.style.display = "block";
        } else {
            if (checkBoxes[i].checked != chkd){
                li.style.display = "none";
            } else {
                 li.style.display = "block";
            }
        }
    }
}
