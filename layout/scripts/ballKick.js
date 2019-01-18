$(".ballKick").hover(function(){
    

    var MousePosX = event.pageX / window.outerWidth;
    var MousePosY = event.pageY;
    if(MousePosX >0.5)
    {
        $(this).css("padding-right", "70%");
        $(this).css("transform", "scale(1.5)");

        


    }
    else
    {
        $(this).css("padding-left", "70%");
        $(this).css("transform", "scale(1.5)");   }

    }, function(){
    
  $(this).css("transform", "scale(1)");
  $(this).css("padding-right","0%");
  $(this).css("padding-left", "0%");   
});
