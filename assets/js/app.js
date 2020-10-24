//selecting and striking off the given todo
$("li").click(function(){
    $(this).toggleClass("completed");  
});

//deleting the todo
$("span").click(function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    }); 
    event.stopPropagation;
});