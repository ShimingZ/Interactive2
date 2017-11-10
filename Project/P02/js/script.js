$(document).ready(function() {

    $(".CC").mouseover(function() {
        var thisElement = $(this);
        thisElement.find(".stem1").toggleClass('stem1Hovered');
        thisElement.find(".stem1-j").toggleClass('stem1-jHovered');
        thisElement.find(".stem2").toggleClass('stem2Hovered');
        thisElement.find(".stem3").toggleClass('stem3Hovered');
        thisElement.find(".stem4").toggleClass('stem4Hovered');
        thisElement.find(".crossbar1").toggleClass('crossbar1hovered');
        thisElement.find(".crossbar-z").toggleClass('crossbar-zhovered');
        thisElement.find(".crossbar1-1").toggleClass('crossbar1hovered');
        thisElement.find(".crossbar2").toggleClass('crossbar2hovered');
        thisElement.find(".crossbar2-z").toggleClass('crossbar2-zhovered');
        thisElement.find(".negative").toggleClass('negativeHovered ');
        thisElement.find(".negative2").toggleClass('negative2Hovered ');
        thisElement.find(".negative2-n2").toggleClass('negative2-n2Hovered ');
        thisElement.find(".negative-n2").toggleClass('negative2-n2Hovered ');
        thisElement.find(".negative2-m").toggleClass('negative2-mHovered');
        thisElement.find(".negative2-w").toggleClass('negative2-wHovered');
        thisElement.find(".stem-half-s").toggleClass('stem-half-sHovered');
        thisElement.find(".stem-half-l").toggleClass('stem-half-lHovered');
        thisElement.find(".stem-half-n2").toggleClass('stem-half-n2Hovered');
        thisElement.find(".stem-half").toggleClass('stem-halfHovered');
        thisElement.find(".negative4-L").toggleClass('negative4-LHovered ');
        thisElement.find(".negative2-l").toggleClass('negative2-lHovered ');
        thisElement.find(".negative2s-l").toggleClass('negative2s-lHovered ');
        thisElement.find(".crossbar-half-T ").toggleClass('crossbar-half-THovered');
    });


    $('.CC').easyAudioEffects({
        // ogg: "./path/to/sound.ogg",
        mp3: "1.wav",
        eventType: "hover"
    });
});