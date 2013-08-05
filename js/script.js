
alert("start");

function onSoundSuccess(){
  alert("sound success"); 
}
function onSoundError(){
  alert("sound error"); 
}

var voice;
$("#set").click(function(){
  console.log("!");
  $("#results").html("hello");
});
$("#clear").click(function(){
  $("#results").html(" ");
});
$("#play").click(function(){
  voice.stop();
  voice = new Media("http://www.daveberzack.com/songs/the_wanderer.mp3", onSoundSuccess, onSoundError);
  voice.play();
});
    