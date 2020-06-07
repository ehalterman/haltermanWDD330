document.getElementById("addToList").onclick = function() {
    console.log ("button worked")
    var text = document.getElementById("newToDo").value;
    var li = document.createElement('li');
    var box = document.createElement();
    li.innerHTML = text;
    document.getElementById("list").appendChild(li);
}