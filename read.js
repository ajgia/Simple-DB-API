let xhttp = new XMLHttpRequest();
get();

const list = document.getElementById("list");

function get(){
    let req = "https://alexgiasson.me/comp4537/labs/5";
    xhttp.open("GET", req, true);
    xhttp.setRequestHeader("Content-Type", "text/html; charset=utf-8");
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let a = this.responseText;
            let x = JSON.parse(a);
            console.log(x);
        } else if(this.readyState == 4 && this.status == 404){
            list.innerHTML = "Error";
        }
    }
}

function back(){
    document.location='index.html';
}