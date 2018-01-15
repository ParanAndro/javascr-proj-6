//scripts.js
var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";
var dinUpCase = dinosaur.toUpperCase();
var trueText = text.replace("Velociraptor", dinUpCase);
var halfTrueText = trueText.substr(0, trueText.length/2);
console.log(halfTrueText);



/*var motto = 'The rest is silence';
var mottoCharsAfter = motto.substr(11, 8);

console.log(mottoCharsAfter);

var txt = 'Lorem ipsum dolor sit amet';
console.log(txt.length);  // It will display 26
*/