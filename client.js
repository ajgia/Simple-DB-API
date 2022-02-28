
function send(){
    const xhttp = new XMLHttpRequest();
    const list = document.getElementById("list");
    let name = document.getElementById("name").value;
    let score = document.getElementById("score").value;    

    let number = parseInt(score);
    let req = "https://alexgiasson.me/comp4537/labs/5/?name=" + name + "&score=" + number;
    
    xhttp.open("POST", req, true);
    xhttp.setRequestHeader('Content-Type', 'text/html; charset=utf-8');
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4){
            console.log(this.responseText);

        } else if(this.readyState == 4 && this.status == 404){
            list.innerHTML = "Error";
        }
    }
    xhttp.send(null); 
}


function back(){
    document.location='index.html';
}

