
$(function(){
    $("#show-shop").on("click", function(){
        $("#shop-ul").slideToggle("slow");
        
    })

    $("#show-account").on("click", function(){
        $("#account-ul").slideToggle("slow");
    })

    $("#show-support").on("click", function(){
        $("#support-ul").slideToggle("slow");
    })

    $("#show-company").on("click", function(){
        $("#company-ul").slideToggle("slow");
    })

    $(".hamburger").on("click",function(){
        $(".sidebar-container").slideToggle("slow");
    
    })
})