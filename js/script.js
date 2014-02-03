
var ga = document.createElement('script');
ga.type = 'text/javascript';
ga.async = false;
ga.src = 'http://www.youtube.com/player_api';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(ga, s);

var player;
      
function onYouTubePlayerAPIReady() {
//try {
    player = new YT.Player('mainVideo', {
      height: '390',
      width: '640',
      videoId: 'phzKG-Y-SI8',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
//} catch (e) { console.log(e); }
}
function onPlayerReady(evt) {
    console.log('onPlayerReady', evt);
    evt.target.playVideo();
}

var stateLabels = {"-1":"unstarted","0":"ended","1":"playing","2":"paused","3":"buffering","5":"cued"};
var stateTimer = 0;
function onPlayerStateChange(evt) {
	var d = new Date();
	newMilli = d.getMilliseconds();
	if (stateTimer==0) stateTimer = newMilli;
	var duration = stateTimer = newMilli;
	stateTimer = newMilli;
    console.log('... ', evt.data+":"+stateLabels[evt.data]+" > "+duration+"ms" );

    if (evt.data == YT.PlayerState.PLAYING) {
       //started playing
    }
}
function pauseVideo() {
    console.log('pauseVideo');
    player.pauseVideo();
}
function playVideo(secs){
	if (typeof secs != "undefined" && !isNaN(secs) ) player.seekTo(secs);
	player.playVideo();
}
function cueVideo(secs){
	if (typeof secs != "undefined" && !isNaN(secs) ) player.seekTo(secs);
	player.pauseVideo();
}

//.getCurrentTime()

$(function() {
  $("#pause").click(function(){
  	pauseVideo();
  })       
  $("#play").click(function(){
  	playVideo();
  })      
  $("#play20").click(function(){
  	playVideo(20)
  })       
  $("#play590").click(function(){
  	playVideo(590)
  })      
  $("#cue20").click(function(){
  	cueVideo(20)
  })       
  $("#cue590").click(function(){
  	cueVideo(590)
  })        

});