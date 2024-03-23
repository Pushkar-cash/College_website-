$(document).ready(()=>{



    $(".principle-image-container").mouseenter(()=>{
        $(".infoOverPrincipleImage").slideDown();
        $(".infoOverPrincipleImage").css("display","block");
    })

    $(".principle-image-container").mouseleave(()=>{
        $(".infoOverPrincipleImage").slideUp();
        // $(".infoOverPrincipleImage").css("display","none");

    })


})