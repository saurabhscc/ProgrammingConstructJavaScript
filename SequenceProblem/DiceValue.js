
// UC1-Create one  digit random number
console.log(Math.floor(Math.random() * 10 ));
console.log("-----");

//UC2- Use random to get dice input between 1 to 6
console.log(Math.floor((Math.random() * 1000) % 6 + 1));
console.log("-----");

// UC3- Add two dice number and print the result
/// Dice 1 - 1 to 6 and Dice 2 - 1 to 6 {2 <= Sum <= 12}
let diceOne = Math.floor((Math.random() * 1000)) % 6 + 1;
let diceTwo = Math.floor((Math.random() * 1000)) % 6 + 1;
let sumDice = diceOne + diceTwo;
console.log("Sum of two dice = " + sumDice);
console.log("--------------------");

//UC4-add 5 Random 2 Digit values
let twoDigitNo;
let count=0;
let sum=0;
while(count<5)
{
    twoDigitNo = Math.floor(Math.random() * 90) + 10;
    console.log('Number = '+twoDigitNo);
    //adding random digits
    sum +=twoDigitNo;
    count++;
}
console.log('Sum of 5 two digits number is = '+ sum);
console.log("-------------------------------------");
console.log('Average of the sum of the 5 two digits number is = '+ sum/count);
console.log("-------------------------------------------------------");

//UC5 Unit Conversion
console.log("Unit Conversion");
//a.inch to feet 
let incs = 46;
let ft = incs / 12;
console.log(ft + "feet");
console.log("------5.a-------");

//b.convert feet to meter
let length = 60;  //divide length by 3.281 conversion feet to meter
let breadth = 40
//formula for rectangle area
let area = (length * breadth);
let areas = area * 0.3048;
console.log('Area = '+ areas +'meters');
console.log("------------5.b---------------");

//c.calculate for 25 plots
let totalArea = area * 25;
console.log('Total Area of 25 plots = '+totalArea +'\tMeters' );
//formula for converting squaremeter to area
let areaInAcre = (totalArea * 2.2957).toFixed(2);//rounding no upto 2 digit
console.log('Area of 25 plots are = '+areaInAcre +'acres');
console.log("------------------5.c---------------------------");


