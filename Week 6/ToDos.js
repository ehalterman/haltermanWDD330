document.getElementById("add").onclick = function() {
    var text = document.getElementById("newToDo").value;
    var li = document.createElement("li");
    var ul = document.getElementById("list");
    for(var i = 0; i<1000; i++){
    li.innerHTML = '<input type="checkbox" id="item' + [i] + '">    ' + text + '   <input type="button" value="X">';
    ul.appendChild(li);
    }
    
}
document.getElementsByClassName("check").onclick = function() {
    var checkBox = document.getElementsByClassName("check");

    if (checkBox.checked == true){
        
        alert("mark out");
    }
}