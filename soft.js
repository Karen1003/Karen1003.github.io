$(window).scroll(function(evt){
  if ($(window).scrollTop()>0)
    $(".navbar").removeClass("navbar-top");
  else
      $(".navbar").addClass("navbar-top");
});



$(document).ready(function() {

    $(".stop").hide();

    $(".play_m").click(function(){
        $(".audio").trigger('play');
        $(".stop").show();
    })

    $(".play_r").click(function(){
        $(".audio").attr("src", "media/butterfly.mp3");
        $(".audio").trigger('play');
        $(".stop").show();
    })

    $(".play_l").click(function(){
        $(".audio").attr("src", "media/Red_Scarf.mp3");
        $(".audio").trigger('play');
        $(".stop").show();
    })

    $(".stop").click(function(){
        $(".audio").trigger('pause');
        $(".stop").hide();
    })

    $(".all:eq(0)").click(function(){
        $(".lyric_content:eq(0)").css("opacity","1");
    })

    $(".all_2:eq(0)").click(function(){
        $(".lyric_content_2:eq(0)").css("opacity","1");
    })

    $(".all_3:eq(0)").click(function(){
        $(".lyric_content_3:eq(0)").css("opacity","1");
    })

    $(".all:eq(1)").click(function(){
        $(".lyric_content:eq(1)").css("opacity","1");
    })

    $(".all_2:eq(1)").click(function(){
        $(".lyric_content_2:eq(1)").css("opacity","1");
    })

    $(".all_3:eq(1)").click(function(){
        $(".lyric_content_3:eq(1)").css("opacity","1");
    })

    $(".all:eq(2)").click(function(){
        $(".lyric_content:eq(2)").css("opacity","1");
    })

    $(".all_2:eq(2)").click(function(){
        $(".lyric_content_2:eq(2)").css("opacity","1");
    })

    $(".all_3:eq(2)").click(function(){
        $(".lyric_content_3:eq(2)").css("opacity","1");
    })

    $(".all:eq(3)").click(function(){
        $(".lyric_content:eq(3)").css("opacity","1");
    })

    $(".all_2:eq(3)").click(function(){
        $(".lyric_content_2:eq(3)").css("opacity","1");
    })

    $(".all_3:eq(3)").click(function(){
        $(".lyric_content_3:eq(3)").css("opacity","1");
    })

    $(".all:eq(4)").click(function(){
        $(".lyric_content:eq(4)").css("opacity","1");
    })

    $(".all_2:eq(4)").click(function(){
        $(".lyric_content_2:eq(4)").css("opacity","1");
    })

    $(".all_3:eq(4)").click(function(){
        $(".lyric_content_3:eq(4)").css("opacity","1");
    })
});



