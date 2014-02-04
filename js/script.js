


$(function() {
 
  var video = $("#vid")[0];
  $("#play").click(function(e){
    e.preventDefault();
    video.play();
  });
  $("#pause").click(function(e){
    e.preventDefault();
    video.pause();
  });

  $("#play10").click(function(e){
    e.preventDefault();
    video.currentTime = 10;
    video.play();
  });

  $("#play20").click(function(e){
    e.preventDefault();
    video.currentTime = 20;
    video.play();
  });

});