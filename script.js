var solfege = true;
var ascending = true;

var secondNote = true;
var note1;
var note2;

const intervalKey = [
    "a Pefect Octave",
    "a Major Seventh",
    "a Minor Seventh",
    "a Major Sixth",
    "a Minor Sixth",
    "a Perfect Fifth",
    "an Augmented Fourth",
    "a Perfect Fourth",
    "a Major Third",
    "a Minor Third",
    "a Major Second",
    "a Minor Second",
    "a Perfect Unison",
    "an Augemnted Prime",
    "a Major Second",
    "an Augmented Second",
    "a Major Third",
    "a Perfect Fourth",
    "an Augmented Fourth",
    "a Perfect Fifth",
    "an Augmented Fifth",
    "a Major Sixth",
    "an Augmented Sixth",
    "a Major Seventh",
    "a Perfect Octave"
]

function slider1() {
    solfege = !solfege;
    pick_keyboard();
}

function slider2() {
    ascending = !ascending;
    pick_keyboard();
}

function pick_keyboard() {
    if(solfege && ascending) { return solfege_ascending(); }
    if(!solfege && ascending) { return scaleDegrees_ascending(); }
    if(!solfege && !ascending) { return scaleDegrees_descending(); }
    if(solfege && !ascending) { return solfege_descending(); }
}

function solfege_ascending() {
    document.getElementById("1").textContent = "Do";
    document.getElementById("2").textContent = "Re";
    document.getElementById("3").textContent = "Mi";
    document.getElementById("4").textContent = "Fa";
    document.getElementById("5").textContent = "So";
    document.getElementById("6").textContent = "La";
    document.getElementById("7").textContent = "Ti";
    document.getElementById("8").textContent = "Do";
    document.getElementById("9").textContent = "Di";
    document.getElementById("10").textContent = "Ri";
    document.getElementById("11").textContent = "Fi";
    document.getElementById("12").textContent = "Si";
    document.getElementById("13").textContent = "Li";
}

function scaleDegrees_ascending() {
    document.getElementById("1").textContent = "1";
    document.getElementById("2").textContent = "2";
    document.getElementById("3").textContent = "3";
    document.getElementById("4").textContent = "4";
    document.getElementById("5").textContent = "5";
    document.getElementById("6").textContent = "6";
    document.getElementById("7").textContent = "7";
    document.getElementById("8").textContent = "1";
    document.getElementById("9").textContent = "#1";
    document.getElementById("10").textContent = "#2";
    document.getElementById("11").textContent = "#4";
    document.getElementById("12").textContent = "#5";
    document.getElementById("13").textContent = "#6";
}

function solfege_descending() {
    document.getElementById("1").textContent = "Do";
    document.getElementById("2").textContent = "Re";
    document.getElementById("3").textContent = "Mi";
    document.getElementById("4").textContent = "Fa";
    document.getElementById("5").textContent = "So";
    document.getElementById("6").textContent = "La";
    document.getElementById("7").textContent = "Ti";
    document.getElementById("8").textContent = "Do";
    document.getElementById("9").textContent = "Ra";
    document.getElementById("10").textContent = "Me";
    document.getElementById("11").textContent = "Se";
    document.getElementById("12").textContent = "Le";
    document.getElementById("13").textContent = "Te";
}

function scaleDegrees_descending() {
    document.getElementById("1").textContent = "1";
    document.getElementById("2").textContent = "2";
    document.getElementById("3").textContent = "3";
    document.getElementById("4").textContent = "4";
    document.getElementById("5").textContent = "5";
    document.getElementById("6").textContent = "6";
    document.getElementById("7").textContent = "7";
    document.getElementById("8").textContent = "1";
    document.getElementById("9").textContent = "b2";
    document.getElementById("10").textContent = "b3";
    document.getElementById("11").textContent = "b5";
    document.getElementById("12").textContent = "b6";
    document.getElementById("13").textContent = "b7";
}

function addNote(note) {
    secondNote = !secondNote;
    if(!secondNote) {
        note1 = note; 
    } else{
        note2 = note;
        var firstWord = "";
        if(note2 - note1 > 0) {
            firstWord = "Up ";
        }

        if(note2 - note1 < 0) {
            firstWord = "Down ";
        }

        document.getElementById("result").textContent = firstWord + Math.abs(note2-note1) + " Half Steps is " + intervalKey[note2 - note1 + 12];
    }
}

function noteC4() {
    playTone("C4");
    addNote(0);
}

function noteDb4() {
    playTone("C#4");
    addNote(1);
}

function noteD4() {
    playTone("D4");
    addNote(2);
}

function noteEb4() {
    playTone("D#4");
    addNote(3);
}

function noteE4() {
    playTone("E4");
    addNote(4);
}

function noteF4() {
    playTone("F4");
    addNote(5);
}

function noteGb4() {
    playTone("F#4");
    addNote(6);
}

function noteG4() {
    playTone("G4");
    addNote(7);
}

function noteAb4() {
    playTone("G#4");
    addNote(8);
}

function noteA4() {
    playTone("A4");
    addNote(9);
}

function noteBb4() {
    playTone("A#4");
    addNote(10);
}

function noteB4() {
    playTone("B4");
    addNote(11);
}

function noteC5() {
    playTone("C5");
    addNote(12);
}

// Create an audio context instance if WebAudio is supported
let context = (window.AudioContext || window.webkitAudioContext) ?
  new (window.AudioContext || window.webkitAudioContext)() : null;
  
// Decide on some parameters
let allowBackgroundPlayback = false; // default false, recommended false
let forceIOSBehavior = false; // default false, recommended false
// Pass it to unmute if the context exists... ie WebAudio is supported
if (context)
{
  // If you need to be able to disable unmute at a later time, you can use the returned handle's dispose() method
  // if you don't need to do that (most folks won't) then you can simply ignore the return value
  let unmuteHandle = unmute(context, allowBackgroundPlayback, forceIOSBehavior);
  
  // ... at some later point you wish to STOP unmute control
  unmuteHandle.dispose();
  unmuteHandle = null;
  
}