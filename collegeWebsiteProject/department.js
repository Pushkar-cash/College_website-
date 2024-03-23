$(document).ready(()=>{

// for showing department information
    $(".department-show-btn").click(()=>{
        $(".department-show-btn").hide();
        $(".hideen-depart ").slideDown();
        $(".main-section-hidden-button").css("display","block");
    })
    // for hiding department information
    $(".main-section-hidden-button").click(()=>{
        $(".hideen-depart").slideUp();
        $(".department-show-btn").show();
        $(".main-section-hidden-button").css("display","none");
    })
    // courses block script
    // for showing department information
    $(".course-section-button").click(()=>{
        $(".hidden-courses").slideDown();
        console.log(" click is workigngg");
        $(".course-section-button").hide();
        $(".course-section-hidden-button").css("display","block");
    })
    // for hiding department information
    $(".course-section-hidden-button").click(()=>{
        $(".hidden-courses ").slideUp();
        $(".course-section-button ").show();
        $(".course-section-hidden-button").css("display","none");

    })
    
})