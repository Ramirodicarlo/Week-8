console.log('--- Executing If-else.js ---');
//////////////////// 4-a //////////////////////////////////////
var numberexe5= 0.3 ;
console.log('///////// 4-a /////////');
if (numberexe5 > 0.5){
    console.log(numberexe5, 'Greater than 0.5');
}
    else {
        console.log(numberexe5, 'Lower than 0.5'); 
    };
//////////////////// 4-b //////////////////////////////////////
var numberexe5b= 23 ;
console.log('///////// 4-b /////////');
if (numberexe5b < 2){
    console.log(numberexe5b, 'Baby');
}
    else {
        if (numberexe5b < 13){
        console.log(numberexe5b, 'Child');
        }
        else {
            if (numberexe5b < 20){
            console.log(numberexe5b, 'Teenage');
            }
            else {
                if (numberexe5b < 31){
                console.log(numberexe5b, 'Youngh');
                }
                else {
                    if (numberexe5b < 61){
                    console.log(numberexe5b, 'Adult');
                    }
                    else {
                        if (numberexe5b < 76){
                        console.log(numberexe5b, 'Mayor');
                        }
                        else {console.log(numberexe5b, 'Elder');
                        }
                    }
                }
            }
        }
    };