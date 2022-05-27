$(window).scroll(function(evt){
    if ($(window).scrollTop()>0)
      $(".navbar").removeClass("navbar-top");
    else
        $(".navbar").addClass("navbar-top");
});

page=0;
var fire = ['media/island.mp3', 'media/Southbound_Night_Bus.mp3','media/Crazy.mp3','media/1945.mp3'];
var mixer = ['media/Set_Out_Again.mp3', 'media/Loveholic.mp3','media/Rare_Species.mp3','media/Grandfather.mp3'];
var papan = ['media/fish.mp3', 'media/glass.mp3','media/HAHA.mp3','media/Lovebird.mp3'];
var egg = ['media/Back_Here_Again.mp3', 'media/All_That_Wishful_Thinking.mp3','media/Waves_Wandering.mp3','media/love_again.mp3'];
var human = ['media/chick.mp3', 'media/look.mp3','media/Bad_Joke.mp3','media/song.mp3'];

$(document).ready(function() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  //滅火器撥放器
  $(".pause").hide();
  $(".play").click(function(){
    i=getRandomInt(4);
    if (i==0){
      $(".song_name").text("---島嶼天光---");
    }else if (i==1){
      $(".song_name").text("---長途列車---");
    }else if (i==2){
      $(".song_name").text("---曾經瘋狂---");
    }else if (i==3){
      $(".song_name").text("---1945---");
    }
    $(".fire").attr("src", fire[i]);
    $(".fire").trigger('play');
    $(".pause").show();
  })
  $(".pause").click(function(){
    $(".fire").trigger('pause');
    $(".pause").hide();
  })

  //麋先生
  $(".pause_m").hide();
  $(".play_m").click(function(){
    i=getRandomInt(4);
    if (i==0){
      $(".song_name_m").text("---再出發---");
    }else if (i==1){
      $(".song_name_m").text("---嗜愛動物---");
    }else if (i==2){
      $(".song_name_m").text("---稀有品種---");
    }else if (i==3){
      $(".song_name_m").text("---阿公---");
    }
    $(".mixer").attr("src", mixer[i]);
    $(".mixer").trigger('play');
    $(".pause_m").show();
  })
  $(".pause_m").click(function(){
    $(".mixer").trigger('pause');
    $(".pause_m").hide();
  })

  //怕胖
  $(".pause_p").hide();
  $(".play_p").click(function(){
    i=getRandomInt(4);
    if (i==0){
      $(".song_name_p").text("---魚---");
    }else if (i==1){
      $(".song_name_p").text("---後照鏡---");
    }else if (i==2){
      $(".song_name_p").text("---哈哈---");
    }else if (i==3){
      $(".song_name_p").text("---鴦---");
    }
    $(".papan").attr("src", papan[i]);
    $(".papan").trigger('play');
    $(".pause_p").show();
  })
  $(".pause_p").click(function(){
    $(".papan").trigger('pause');
    $(".pause_p").hide();
  })

  //茄蛋
  $(".pause_e").hide();
  $(".play_e").click(function(){
    i=getRandomInt(4);
    if (i==0){
      $(".song_name_e").text("---浪子回頭---");
    }else if (i==1){
      $(".song_name_e").text("---這款自作多情---");
    }else if (i==2){
      $(".song_name_e").text("---浪流連---");
    }else if (i==3){
      $(".song_name_e").text("---閣愛你一擺---");
    }
    $(".egg").attr("src", egg[i]);
    $(".egg").trigger('play');
    $(".pause_e").show();
  })
  $(".pause_e").click(function(){
    $(".egg").trigger('pause');
    $(".pause_e").hide();
  })
  //鹿洐
  $(".pause_h").hide();
  $(".play_h").click(function(){
    i=getRandomInt(4);
    if (i==0){
      $(".song_name_h").text("---鹽酥雞---");
    }else if (i==1){
      $(".song_name_h").text("---當我望著你---");
    }else if (i==2){
      $(".song_name_h").text("---爛笑話---");
    }else if (i==3){
      $(".song_name_h").text("---給被世界吞噬的你---");
    }
    $(".human").attr("src", human[i]);
    $(".human").trigger('play');
    $(".pause_h").show();
  })
  $(".pause_h").click(function(){
    $(".human").trigger('pause');
    $(".pause_h").hide();
  })

  $(".container_big1").click(function(){
    $(".container_small1").css("left","-"+page*100+"%");
    page+=1;
    if(page>2){
        page=0;
    }
    console.log(page);
    $(".container_small1").css("left","-"+page*100+"%");
})
  $(".container_big2").click(function(){
    $(".container_small2").css("left","-"+page*100+"%");
    page+=1;
    if(page>2){
        page=0;
    }
    console.log(page);
    $(".container_small2").css("left","-"+page*100+"%");
  })
});





