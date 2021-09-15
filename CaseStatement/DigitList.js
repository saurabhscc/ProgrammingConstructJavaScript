const num = 10000 //parseInt(prompt('Enter the number?'));
switch(num)
{
    case 1:
        console.log("One");
        break;
    case 10:
        console.log("Ten");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;
    case 10000:
        console.log("Ten thousand");
        break;
    case 100000:
        console.log("One Lakh");
        break;
    case 1000000:
        console.log("Ten Lakh");
        break;
    default:
        console.log("Enter correct number");
        break;
}