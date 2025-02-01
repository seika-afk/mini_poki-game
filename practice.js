var R1 = Math.floor(Math.random() * 6) + 1;
var R2 = Math.floor(Math.random() * 6) + 1;


var at1 = "./images/pic" + R1 + ".jfif"
document.getElementById("p1").setAttribute("src", at1)

var at2 = "./images/pic" + R2 + ".jfif"
document.getElementById("p2").setAttribute("src", at2)


// DECIDing the victory
var ti = document.querySelector("h1");
if (R1 > R2) {
    ti.innerHTML = "🚩 PLAYER WINS !!!!"
}
else if (R1 == R2) {

    ti.innerHTML = "ITS AN TIE"

}
else {

    ti.innerHTML = "🚩 BOT WINS !!!!"

}