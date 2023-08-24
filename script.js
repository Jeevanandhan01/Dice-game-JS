let a = Math.floor(Math.random() * 6)+1;
let b = Math.floor(Math.random() * 6)+1;
let path1 = "./images/dice"+a+".png";
let path2 = "./images/dice"+b+".png";
document.querySelectorAll("img")[0].setAttribute("src",path1);
document.querySelectorAll("img")[1].setAttribute("src",path2);


if(a===b){
    document.querySelector("h1").innerHTML = "Draw";
}
else if (a>b){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
}