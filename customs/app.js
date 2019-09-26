$(document).ready(function(){
    $("body").prepend(
        `<div class="disclosure"> NOTE : This Website is Compatible to be viewed with Large-Screen Devices (Mobile View is under Construction)<span class="right" title="Ignore">&#9747;</span></div>`
    );
    
    $(".right").click(function(e){
        e.preventDefault();
        $(".disclosure").remove();
    });

    $.ajax({url: "http://quotes.rest/qod.json" , 
            type: "GET",
            success: function(response){
                $("#load-image").attr("src",response.contents.quotes[0].background);
                //console.log(response.contents.quotes[0].background);
                $("#load-title").text(response.contents.quotes[0].author);
                $("#load-quote").text(response.contents.quotes[0].quote);
            }
});
});
