function createTitle(){
    var titleInput = document.getElementById("title").value;
    document.getElementById("boardTitle").innerHTML = titleInput; 
}
var id = 1
function createGoal(){
    var title = document.getElementById("goalTitle").value;
    var stepStones = document.getElementById("stepStones").value;
    var date = document.getElementById("date").value;
    var notes = document.getElementById("notes").value;
    var parentDiv = document.getElementById("contents");
    var div = document.createElement("div");
    div.setAttribute("class", "goal")
    div.setAttribute("id", "goal" + [id]);
    div.innerHTML = '<h2>' + title + '</h2><p>' + stepStones + '</p><p>' + date + '</p><p>' + notes + '<br><input type="button" class="button" id="delete" onclick="deleteGoal('+ [id] + ')" value="Completed! Remove This Goal?">';
    parentDiv.appendChild(div);
    id += 1;
}
function deleteGoal(myId) {
    var div = document.getElementById("goal" + [myId]);
    div.parentNode.removeChild(div);
}


var url = "https://type.fit/api/quotes";

var num = Math.floor(Math.random() * (1000 - 1) + 0);
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
    var obj = JSON.parse(this.responseText);
    console.log(this.responseText);
    document.getElementById("quote").innerHTML = '"' + obj[num].text + '"     -' + obj[num].author;
}
};
xhttp.open("GET", url, true);
xhttp.send();
