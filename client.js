const xhttp = new XMLHttpRequest();
const list = document.getElementById("list");

function send(){
    let name = document.getElementById("name").value;
    let score = document.getElementById("score").value;    
    let number = parseInt(score);
    let req = "https://alexgiasson.me/comp4537/labs/5/api/definitions?name=" + name + "&score=" + number;
    xhttp.open("POST", req, true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let a = this.responseText;
            let x = JSON.parse(a);
            list.innerHTML = x.name + ": " + x.score;
        } else if(this.readyState == 4 && this.status == 404){
            list.innerHTML = "Error";
        }
    }
}


function back(){
    document.location='index.html';
}

