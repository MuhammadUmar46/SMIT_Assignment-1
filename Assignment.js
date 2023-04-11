//1st Question

var num1 = prompt("Enter First Number")
var num2 = prompt("Enter Second Number")

if (num1 > num2){
    console.log(num1)
}
else if (num1 < num2){
    console.log(num2)
}
else{
    console.log("Both are equal")
}

// 2nd Question

var x = prompt("Enter the number");

if (x >=0 ){
    console.log("The sign is +")
}
else {
    console.log("The sign is -")
}


// 3rd Question

var a = prompt("Enter first number");
var b = prompt("Enter second number");
var c = prompt("Enter third number");
var d = prompt("Enter fourth number");
var e = prompt("Enter fifth number");

if (a>b && a>c && a>d && a>e)
{
console.log(a);
}
else if (b>a && b>c && b>d && b>e)
{
console.log(b);
}
else if (c>a && c>b && c>d && c>e)
{
console.log(c);
}
else if (d>a && d>b && d>c && d>e)
{
console.log(d);
}
else if (e>a && e>b && e>c && e>d){
   console.log(e)
}
else{
    console.log("Task Completed!")
}


// 4th Question

var num;

for (num = 0; num <= 15; num++) {
    if (num === 0) {
            console.log(num +  " is even");
    }
    else if (num % 2 === 0) {
            console.log(num + " is even");   
    }
    else {
            console.log(num + " is odd");
    }
}

// 5th Question

var user = prompt("Enter the Number")

if (user < 60){
    console.log("Your Grade is F")
}
else if (user < 70){
    console.log("Your Grade is D")
}
else if (user < 80){
    console.log("Your Grade is C")
}
else if (user < 90){
    console.log("Your Grade is B")
}
else if (user < 100){
    console.log("Your Grade is A")
}
else{
    console.log("You are Fail!")
}




// 6th Question

var i;

for(i = 1; i <= 100; i++){
    if( i%3 === 0 && i%5 === 0){
       console.log("FizzBuzz")
    }
    else if ( i%3 === 0){
        console.log("Fizz")
    }
    else if ( i%5 === 0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}


// 7th Question

var x , y;

for(x = 1 ; x <= 5 ; x++){
    for(y = 1; y <= x ; y++){
        document.write("*")
    }
    document.write("</br>");
}