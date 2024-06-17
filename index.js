console.log("process");
lol()

function lol(){
    synth= Window.SpeechSynthesis;
    utter= new SpeechSynthesisUtterance("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    synth.speak(utter);
}