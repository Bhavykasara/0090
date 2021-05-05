player1="";
player2="";

function login() {
    player1=document.getElementById("input1").value;
    player2=document.getElementById("input2").value;
    localStorage.setItem("score1",player1);
    localStorage.setItem("score2",player2);
    console.log(player1);
    window.location="index(2).html";
}