document.getElementById("container").classList.add("container-css");

document.getElementById("buttons").classList.add("button-css");


let timer;

function comecar() {
    timer = setInterval(showTime, 1000);
}

function parar() {
    clearInterval(timer);
}

function zerar() {
    clearInterval(timer);

    let h = 0;
    let m = 0;
    let s = 0;
 
    let text = h + ":" + m + ":" + s;

    document.querySelector("#hours").innerHTML = text;
    document.querySelector("#hours").style = "font-size: 20px;";

}

function showTime() {
    let d = new Date();

    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
 
    let text = h + ":" + m + ":" + s;

    document.querySelector("#hours").innerHTML = text;
    document.querySelector("#hours").style = "font-size: 20px;";
}