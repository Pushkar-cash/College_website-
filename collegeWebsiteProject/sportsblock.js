$(document).ready(()=>{


    // for library section 
    $(".library-div").mouseenter(()=>{
        $(".about-library").slideDown();
        $(".about-library").css("display","block");
        
    })
    $(".library-div").mouseleave(()=>{
        $(".about-library").slideUp();
    })

    //for NSS
    $(".nss-div").mouseenter(()=>{
        $(".about-nss").slideDown();
        $(".about-nss").css("display","block");
        
    })
    $(".nss-div").mouseleave(()=>{
        $(".about-nss").slideUp();
    })

    //for sports section 



  $(".sports-div").mouseenter(()=>{
        $(".about-sports").slideDown();
        $(".about-sports").css("display","block");
        
    })
    $(".sports-div").mouseleave(()=>{
        $(".about-sports").slideUp();
    })


    


})