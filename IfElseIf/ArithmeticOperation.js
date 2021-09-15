const a = 9//parseInt(prompt('Enter the number 1 ?'));
const b = 6//parseInt(prompt('Enter the number 2 ?'));
const c = 12 //parseInt(prompt('Enter the number 3 ?'));

const num1 = a + (b * c);
const num2 = a % b + c;
const num3 = c + (a/b);
const num4 = (a * b) + c;
console.log(num1+','+ num2+','+num3+','+num4);
let max,min;
if(num1>num2 && num1>num3 && num1>num4)
    max = num1;
else if(num2>num1 && num2>num3 && num2>num4)
    max = num2;
else if(num3>num1 && num3>num2 && num3>num4)
    max=num3;
else    
    max=num4;

if(num1<num2 && num1<num3 && num1<num4)
    min = num1;
else if(num2<num1 && num2<num3 && num2<num4)
    min = num2;
else if(num3<num1 && num3<num2 && num3<num4)
    min=num3;
else    
    min=num4;

console.log('Maximum number is: '+max +'\nMinimum number is: '+min );