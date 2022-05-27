$(window).scroll(function(evt){
    if ($(window).scrollTop()>0)
      $(".navbar").removeClass("navbar-top");
    else
        $(".navbar").addClass("navbar-top");
});

function test(){
    let landInTexts = document.querySelectorAll(".landIn");
    landInTexts.forEach(landInText => {
    let letters = landInText.textContent.split("");
    landInText.textContent = "";
    letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${i * 0.05}s`;
        landInText.append(span);
    });
    });
}

var page=0


$(document).ready(function() {
    $(".up").hide();
    $(".listen").click(function(){
        $(".yellow").trigger('play');
        $(".down").hide();
        $(".up").show();
    })

    $(".back").click(function(){
        $(".yellow").trigger('pause');
        $(".up").hide();
        $(".down").show();
    })

    $(".up_m").hide();
    $(".listen_m").click(function(){
        $(".per").trigger('play');
        $(".down_m").hide();
        $(".up_m").show();
    })

    $(".back_m").click(function(){
        $(".per").trigger('pause');
        $(".up_m").hide();
        $(".down_m").show();
    })

    $(".up_s").hide();
    $(".listen_s").click(function(){
        $(".wonder").trigger('play');
        $(".down_s").hide();
        $(".up_s").show();
    })

    $(".back_s").click(function(){
        $(".wonder").trigger('pause');
        $(".up_s").hide();
        $(".down_s").show();
    })

    $(".up_c").hide();
    $(".listen_c").click(function(){
        $(".hilarious").trigger('play');
        $(".down_c").hide();
        $(".up_c").show();
    })

    $(".back_c").click(function(){
        $(".hilarious").trigger('pause');
        $(".up_c").hide();
        $(".down_c").show();
    })

    $(".up_j").hide();
    $(".listen_j").click(function(){
        $(".give").trigger('play');
        $(".down_j").hide();
        $(".up_j").show();
    })

    $(".back_j").click(function(){
        $(".give").trigger('pause');
        $(".up_j").hide();
        $(".down_j").show();
    })
});