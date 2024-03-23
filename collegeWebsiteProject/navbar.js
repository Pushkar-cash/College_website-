$(document).ready(()=>{


    $("#admission-nav").mouseenter(()=>{
        $("#hidden-ul").slideDown(400);
        $("#hidden-ul").css("display","block");

    
    })
    $("#admission-nav").mouseleave(()=>{

        $("#hidden-ul").css("display","none")
    
    })

})



