let random=new Array();
let n=10;//check for 10no
for( i=0 ; i <n; i++)
{
    let randomNumber =( Math.floor(Math.random() * 1000) % 999) ;
    random.push(randomNumber);
    random.sort();
}
console.log("\nArray Elements Are : "+ random +"\nSecond Largest Number Is : "+ random[n-2] +"\nSecond Smallest Element is : "+random[1]);
            