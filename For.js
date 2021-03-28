console.log('----- Executing For.js -----');
//////////////////// 5-a //////////////////////////////////////
var arrayfor =['house','car','tree','pc','mobile'];
console.log('///////// 5-a /////////');
for(x=0; x < arrayfor.length ; x++){
    console.log('Word number',x+1,'Word:',arrayfor[x]);
}
//////////////////// 5-b //////////////////////////////////////
var arrayfor =['house','car','tree','pc','mobile'];
console.log('///////// 5-b /////////');
for(x=0; x < arrayfor.length ; x++){
var wordupe = arrayfor[x].substring(0,1);
var wordrest = arrayfor[x].substring(1,10);
var finalword = wordupe.toUpperCase() + wordrest;
console.log('Word number',x+1,'Word:',finalword);
}
//////////////////// 5-c //////////////////////////////////////
var sentence = '';
console.log('///////// 5-c /////////');
for(x=0; x < arrayfor.length ; x++){
    sentence=sentence + arrayfor[x];
}   
console.log('Final String:',sentence);
//////////////////// 5-d //////////////////////////////////////
var emptyarray1 =[];
console.log('///////// 5-d /////////');
for(x=0; x < 10 ; x++){
    emptyarray1.push(x);
}   
console.log('Array from 0 to 9:',emptyarray1);
