console.log('---- Executing String.js ----');
//////////////////// 2-a //////////////////////////////////////
var stringlower ='totalenght';
console.log('///////// 2-a /////////');
console.log('String lowercase',stringlower);
console.log('String uppercase',stringlower.toUpperCase());
//////////////////// 2-b //////////////////////////////////////
var stringlower ='totalenght';
var stringlowerfirst5 = stringlower.substring(0,5);
console.log('///////// 2-b /////////');
console.log('String ',stringlower);
console.log('First 5 letter of string',stringlowerfirst5);
//////////////////// 2-c //////////////////////////////////////
var stringlower ='totalenght';
var stringlowerlast3 = stringlower.substring(7,10);
console.log('///////// 2-c /////////');
console.log('String ',stringlower);
console.log('Last 3 letter of string',stringlowerlast3);
//////////////////// 2-d //////////////////////////////////////
var stringlower ='totalenght';
var stringfirstupper = stringlower.substring(0,1);
var stringrest = stringlower.substring(1,10);
var finalstring = stringfirstupper.toUpperCase() + stringrest;
console.log('///////// 2-d /////////');
console.log('String original ',stringlower);
console.log('String with first letter uper',finalstring);
//////////////////// 2-e //////////////////////////////////////
var stringwhite ='string whi';
var whitespace = stringwhite.indexOf(' ');
console.log('///////// 2-e /////////');
console.log('String original ',stringwhite);
console.log('Position of white space',whitespace);
//////////////////// 2-e //////////////////////////////////////
var stringexee ='string exe';
var stringfirstexe = stringexee.substring(0,1);
var stringrestexe = stringexee.substring(1,stringexee.indexOf(' '));
var stringsecexe = stringexee.substring(stringexee.indexOf(' ')+1,stringexee.indexOf(' ')+2);
var stringfinexe = stringexee.substring(stringexee.indexOf(' ')+2,10);
var completestring = stringfirstexe.toUpperCase()+ stringrestexe +' '+ stringsecexe.toUpperCase()+ stringfinexe;
console.log('///////// 2-d /////////');
console.log('String original ',stringexee);
console.log('String with fists letters uppercase ',completestring);
