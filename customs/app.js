$(document).ready(function(){
    // Adding a disclosure to the top of the page
    $("body").prepend(
        `<div class="disclosure"> Disclaimer : The Website is under Development &amp; and released in Beta Version. If any issue found please leave a Callback Request to report the issue, it will be appreciable and will be acted upon soon.<span class="right" title="Ignore">&#9747;</span></div>`
    );
    
    // Toggling the navigation button (Basically unchechecking the checkbox with the help of label)
    $(".navigation__link").click(function(e){
        $(".navigation__button").trigger("click");
    });

    // Smooth Scrolling
    $("a").click(function(e){

        if(this.hash !== ""){
            e.preventDefault();
            let hash = this.hash;

            $("html,body").animate({
                scrollTop: $(hash).offset().top
            },1000,"swing",function(){
                window.location.hash = hash;
            });
        }

    });
    // Removing the Disclosure when Ignore button is clicked
    $(".right").click(function(e){
        e.preventDefault();
        $(".disclosure").remove();
    });

    // API Call
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
