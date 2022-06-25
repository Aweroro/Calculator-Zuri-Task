var num1 = window.prompt("Enter number 1: ");
var operator = window.prompt("What do you want to do (e.g +, -, *, /):");
var num2 = window.prompt("Enter number 2: ");

num1 = parseFloat(num1);
num2 = parseFloat(num2);




if (operator == "+"){
  alert("The result is " + (num1 + num2));
} else if (operator == "-") {
   alert("The result is " + (num1 - num2));
} else if (operator == "*") {
   alert("The result is " + (num1 * num2));
} else if (operator == "/") {
   alert("The result is " + (num1 / num2));
} else{
   alert("Invalid, try again!")
}



   



