function getPrimeFactor(number){
    let array = new Array();
for (let i = 2; i <= number/2; i++) {
    if(number % i == 0){
        let count = 0;
         for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) count++;
         }
     if(count == 0 && i > 1) array.push(i);
    }
}
return array;
} 

let num = Math.floor(Math.random() * 100);
console.log("Prime Factors of " + num + " are : ");
console.log(getPrimeFactor(num));