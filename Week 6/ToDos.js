var id = 1;
document.getElementById("add").onclick = function() {
    var text = document.getElementById("newToDo").value;
    var li = document.createElement("li");
    var ul = document.getElementById("list");
    li.innerHTML = '<input type="checkbox" id="item' + [id] + '">    ' + text + '   <input type="button" value="X">';
    id += 1;
    ul.appendChild(li);  
}

document.getElementsByClassName("check").onclick = function() {
    var checkBox = document.forms[0];
    var i;
    for (i = 0; i < checkBox.length; i++) {
        if (checkBox[i].checked) {
            alert("checked" + i );
        }
    }
}