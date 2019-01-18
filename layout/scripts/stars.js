function start() {
    var but5 = document.getElementById("star-5");
    var but4 = document.getElementById("star-4");
    var but3 = document.getElementById("star-3");
    var but2 = document.getElementById("star-2");
    var but1 = document.getElementById("star-1");

    but1.addEventListener("click",Add1);
    but2.addEventListener("click",Add2);
    but3.addEventListener("click",Add3);
    but4.addEventListener("click",Add4);
    but5.addEventListener("click",Add5);

    }

    var total=0.0;
    var n = 0;
    var score = 0;


function Add1()
{

total = total +1;
n = n+1
score = total/n;
document.getElementById("StarScore").innerHTML= "Users Rate: "+ score.toFixed(1)+" / 5.0";

}
function Add2()
{

total = total +2;
n = n+1
score = total/n;
document.getElementById("StarScore").innerHTML= "Users Rate: "+ score.toFixed(1)+" / 5.0";

}
function Add3()
{

total = total +3;
n = n+1
score = total/n;
document.getElementById("StarScore").innerHTML= "Users Rate: "+ score.toFixed(1)+" / 5.0";

}
function Add4()
{

total = total +4;
n = n+1
score = total/n;
document.getElementById("StarScore").innerHTML= "Users Rate: "+ score.toFixed(1)+" / 5.0";

}
function Add5()
{

total = total +5;
n = n+1
score = total/n;
document.getElementById("StarScore").innerHTML= "Users Rate: "+ score.toFixed(1)+" / 5.0";

}

window.addEventListener("load",start,false);