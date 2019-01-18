// CALLED AT FORMVALIDATION SCRIPT 
    var n = 0;
    var total=0.0;
    var Table = 0;
function getExpectedDeposit()
{

    n = document.getElementById("numOfPeople").value;
    total = 100*n;
    if (document.getElementById("TableType").value== "vip")
        {
            Table = 1;
            total += 150;
        }
  
    if (Table == 1)
        {
            alert("DONE!\nExpected Deposit: "+total+"\n100 LE for each person\n150 LE for VIB Table");
        }
    else{
            alert("DONE!\nExpected Deposit: "+total+"\n100 LE for each person");
        }
    
    

}