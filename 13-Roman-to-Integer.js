/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let number = 0;
     let numeral = s;
     for( let i=0 ; i<numeral.length; i++){
         if(numeral.charAt(i)=='I' && (numeral.charAt(i+1)!='V' && numeral.charAt(i+1)!='X')){
             number+=1;
         }
         else if(numeral.charAt(i)=='I' && (numeral.charAt(i+1)=='V')){
             number+=4;
             i++;
         }
         else if(numeral.charAt(i)=='I' && (numeral.charAt(i+1)=='X')){
             number+=9;
             i++;
         }
         else if(numeral.charAt(i)=='V'){
             number+=5;
         }
         else if(numeral.charAt(i)=='X' && (numeral.charAt(i+1)!='L' && numeral.charAt(i+1)!='C')){
             number+=10;
         }
         else if(numeral.charAt(i)=='X' && (numeral.charAt(i+1)=='L')){
             number+=40;
             i++;
         }
         else if(numeral.charAt(i)=='X' && (numeral.charAt(i+1)=='C')){
             number+=90;
             i++;
         }
 
         else if(numeral.charAt(i)=='L' ){
             number+=50;
         }
         else if(numeral.charAt(i)=='C' && (numeral.charAt(i+1)!='D' && numeral.charAt(i+1)!='M')){
             number+=100;
         }
         else if(numeral.charAt(i)=='C' && (numeral.charAt(i+1)=='D')){
             number+=400;
             i++;
         }
         else if(numeral.charAt(i)=='C' && (numeral.charAt(i+1)=='M')){
             number+=900;
             i++;
         }
         else if(numeral.charAt(i)=='C' && (numeral.charAt(i+1)!='D' && numeral.charAt(i+1)!='M')){
             number+=100;
         }
         else if(numeral.charAt(i)=='D'){
             number+=500;
         }
         else if(numeral.charAt(i)=='M'){
             number+=1000;
         }
         
     }
     return number;
 };