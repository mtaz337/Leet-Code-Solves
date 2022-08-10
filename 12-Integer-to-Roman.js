/**
 * @param {number} num
 * @return {string}
 */
 var intToRoman = function(num) {
    let ans = '';
    let count = 0;
    while(num>0){
        if(num>=1000){
            count = Math.floor(num/1000);
            num = num - (count*1000);
            for(let i = 0 ; i<count ; i++){
                ans = ans+'M'
            }
        }
        else if(num>=900 && num<1000){
            num = num - 900;
            ans = ans+'CM';
        }
        else if(num>=500 && num<900){
            count = Math.floor(num / 500);
            num = num - (count*500);
            for(let i = 0 ; i< count;i++){
            ans = ans+'D';
            }
        }
        else if(num>=400 && num<500){
            num = num - 400;
            ans = ans+'CD';
        }
        else if(num>=100 && num<400){
             count = Math.floor(num / 100);
            num = num - (count*100);
            for(let i=0; i<count;i++){
                ans= ans+'C';
            }
        }
        else if(num>=90 && num<100){
             num = num - 90;
            ans = ans+'XC';
        }
        else if(num>=50 && num<90){
             num = num - 50;
            ans = ans+'L';
        }else if(num>=40 && num<50){
             num = num - 40;
            ans = ans+'XL';
        }else if(num>=10 && num<40){
             num = num - 10;
            ans = ans+'X';
        }
        else if(num==9){
             num = num - 9;
            ans = ans+'IX';
        }
        else if(num>=5 && num<9){
             num = num - 5;
            ans = ans+'V';
        }
        else if(num==4){
             num = num - 4 ;
            ans = ans+'IV';
        }
        else if(num<4){
             num = num - 1 ;
            ans = ans+'I';
        }
        
    }
    return ans;
    
};