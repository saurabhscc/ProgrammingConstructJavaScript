const prompt=require('prompt-sync')();
const n = prompt("Enter number: ");

let count=0;
for(let i=1; i<=n; i++){
    let remainder=n % i;
    if(remainder==0){
        count++;
    }
}

if (count == 2){
    console.log(n + " Prime Number")
}
else{
    console.log(n + " is Not Prime Number")
}