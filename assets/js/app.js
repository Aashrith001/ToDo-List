//selecting and striking off the given todo
$("ul").on("click","li", function(){
    $(this).toggleClass("completed");  
});

//deleting the todo
$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    }); 
    event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
    //take the string when user clicks enter    
    if(event.which === 13){
        var todo = $(this).val();
        //emptying the String
        $(this).val("");
        //adding new todo
        $("ul").append("<li><span>x</span> "+todo+"</li>");        
    }
});