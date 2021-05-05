var pc="p1";
var s1=0;
var s2=0;

function send() {
    number1=document.getElementById("input1").value;
    number2=document.getElementById("input2").value;

    ml='<h2>'+number1+' x '+number2+'</h2> <br ><label> Answer- </label> <input placeholder="Enter the answer" id="ga"> <br> <button onclick="check()">Check</button';
    document.getElementById("op").innerHTML=ml;
}
function check() {
   cans=parseInt(number1)*parseInt(number2);
   ans=parseInt(document.getElementById("ga").value);
   if (cans==ans) {
       document.getElementById("op").innerHTML='<h1> Correct answer </h1> <br> <button onclick="restart()">Continue</button';
       if (pc=="p1") {
           s1=s1+1;
           document.getElementById("score1").innerHTML='<kbd>Player 1: '+s1+'</kbd>';
       }
       if (pc=="p2") {
        s2=s2+1;
        document.getElementById("score2").innerHTML='<kbd>Player 2: '+s2+'</kbd>';
    }
   }
   else {
      document.getElementById("op").innerHTML='<h1> Wrong answer </h1> <br>'+'<h3><kbd> The correct answer was '+cans+'</kbd></h3>'+'<button onclick="restart()">Continue</button';
   }
   if (pc=="p2") {
       pc="p1";
       document.getElementById("a").innerHTML='<kbd>'+"Player 1 will answer"+'</kbd>';
   }
   else if (pc=="p1") {
    pc="p2";
    document.getElementById("a").innerHTML='<kbd>'+"Player 2 will answer"+'</kbd>';
   }
}

function restart() {
    document.getElementById("op").innerHTML='';
}