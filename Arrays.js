console.log('---- Executing Arrays.js ----');
//////////////////// 3-a //////////////////////////////////////
var arraymonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
 "Noviembre", "Diciembre"];
console.log('///////// 3-a /////////');
console.log('Array Months',arraymonths);
console.log('Month number 5',arraymonths[4]);
console.log('Month number 11',arraymonths[10]);
//////////////////// 3-b //////////////////////////////////////
var arraymonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
 "Noviembre", "Diciembre"];
 var arraymonths2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre",
 "Noviembre", "Diciembre"];
var arraymonthsort = arraymonths2.sort();
console.log('///////// 3-b /////////');
console.log('Array Months',arraymonths);
console.log('Array Months order alphabetically',arraymonthsort);
//////////////////// 3-c //////////////////////////////////////
arraymonths.unshift('Lunes');
arraymonths.push('Domingo');
console.log('///////// 3-c /////////');
console.log('Array Months',arraymonths);
//////////////////// 3-d //////////////////////////////////////
arraymonths.shift();
arraymonths.pop();
console.log('///////// 3-d /////////');
console.log('Array Months',arraymonths);
//////////////////// 3-e //////////////////////////////////////
arraymonths.reverse();
console.log('///////// 3-e /////////');
console.log('Array Months',arraymonths);
//////////////////// 3-f //////////////////////////////////////
var stringmonth = arraymonths.join('-');
console.log('///////// 3-f /////////');
console.log('String Months',stringmonth);
//////////////////// 3-g //////////////////////////////////////
arraymonths.reverse();
var slicearray = arraymonths.slice(4,11)
console.log('///////// 3-g /////////');
console.log('Slice of Months',slicearray);