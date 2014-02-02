 $(function() {

  var ytPlayer;
  function pauseVideo() {
   if (typeof ytPlayer != "undefined") ytPlayer.stopVideo();
  }

  function playVideo(){
    ytPlayer = new YT.Player('yt1', {
      events: {
        'onReady': function(){ currentYoutubePlayer.playVideo(); },
        'onStateChange': function(e){ 
          if (e.data === 0) { 
            _gaq.push(["_trackEvent","PF2014 Video", "Finish", yTitle,0]);
          }
        }
      }
    });

  }


});