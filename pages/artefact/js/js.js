$(document).ready(function () {

    $("#english").click(function() {
        $("#english-text").toggle();
    });

    $("#french").click(function() {
        $("#french-text").toggle();
    });

    $("#malay").click(function() {
        $("#malay-text").toggle();
    });

    $("#mandarin").click(function() {
        $("#mandarin-text").toggle();
    });

    $("#ref").click(function() {
        $("#ref-object").toggle();
    });

    $("#past").click(function() {
        $("#past-object").toggle();
    });

    $("#present").click(function() {
        $("#present-object").toggle();
    });

    $("#future").click(function() {
        $("#future-object").toggle();
    });

    $("#kualalumpur").click(function() {
        $("#kualalumpur-object").toggle();
    });

    $("#london").click(function() {
        $("#london-object").toggle();
    });

    $("#sydney").click(function() {
        $("#sydney-object").toggle();
    });

    $("#toronto").click(function() {
        $("#toronto-object").toggle();
    });

    $("#vancouver").click(function() {
        $("#vancouver-object").toggle();
    });
    
    //Play Audio1//  

    document.getElementById("playAudio1").addEventListener("click", function(){
        var audio = document.getElementById('Audio1');
      if(this.className == 'is-playing'){
        this.className = "";
        this.innerHTML = "LECTRONIC"
        audio.pause();
      }else{
        this.className = "is-playing";
        this.innerHTML = "LECTRONIC";
        audio.play();
      }
    
    });

    //Play Audio2//  

    document.getElementById("playAudio2").addEventListener("click", function(){
        var audio = document.getElementById('Audio2');
      if(this.className == 'is-playing'){
        this.className = "";
        this.innerHTML = "OREVER"
        audio.pause();
      }else{
        this.className = "is-playing";
        this.innerHTML = "OREVER";
        audio.play();
      }
    
    });

    //Play Audio2//  

    document.getElementById("playAudio3").addEventListener("click", function(){
            var audio = document.getElementById('Audio3');
          if(this.className == 'is-playing'){
            this.className = "";
            this.innerHTML = "OUNTRY"
            audio.pause();
          }else{
            this.className = "is-playing";
            this.innerHTML = "OUNTRY";
            audio.play();
          }
        
        });


});


