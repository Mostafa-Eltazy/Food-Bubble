$(".zoomHover").hover(function(){
    
    $(this).css("transform", "scale(1.3)");
    $(this).css("color", "#FFFFFF");
    $(".row3").css("background-color", "#75948f");
   
    

    }, function(){
    
    $(".row3").css("background-color", "");
    $(this).css("transform", "");
    $(this).css("color", "");
    
    
});