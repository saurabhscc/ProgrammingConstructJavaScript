const StartNumber = 1 //parseInt(prompt('Enter lower number: '));
const EndNumber = 25 //parseInt(prompt('Enter higher number: '));
console.log('The prime numbers between '+StartNumber+' and '+EndNumber+' are:');
for (let i = StartNumber; i <= EndNumber; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}