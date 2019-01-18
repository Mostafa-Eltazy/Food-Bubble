function showpanel(){
    
        document.getElementById("showreservationpanel").addEventListener("click",myFunction);
}
        
function myFunction() {

    document.getElementById("reservationpanel").style.transition = "all 1s";
    document.getElementById("reservationpanel").style.paddingTop = "7%";
    document.getElementById("reservationpanel").style.paddingBottom = "15%";
    document.getElementById("reservationpanel").style.opacity = 1;
}
window.addEventListener("load",showpanel);