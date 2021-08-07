let readline = require("readline-sync");
let num = readline.question("Enter the  number: ");
let n = readline.question("enter value");
let choice = parseInt(num);
//using switch case
switch(choice)
{
    case 1:
        //factorial method using if else
        function Factorial(n)
        {
            if (n == 1)
            {
                return 1;
            }
            else{
                return n * Factorial(n - 1);
            }
        }
        console.log(Factorial(n));
        break;

     //while loop
     case 2:
        var sum = 0;
        var number = 1;        
        while (number <= n) {    
            sum += number;         
            number++;              
        }
        
        console.log("Sum = " + sum);
        break;

        //forloop
        case 3:
            for(var i=0; i<=n; i++)
            {
               console.log(i);
            }
            break;
        case 4:
            break;
        default:
            console.log("invalid case");
    }
        
