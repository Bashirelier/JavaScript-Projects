
var X = 3; 
X++;
document.write(X) ;

var Y = 7; 
Y--;

document.write(Y) ;

function addition_function () { // Addition function 
    var addition = Math.random() + 2;
    document.getElementById("Math").innerHTML = "answer =" + addition;
}

function subtraction_function () { // subtraction  function
    var subtraction = Y - X;
    document.getElementById("Math").innerHTML = "5 - 2 =" + subtraction;
}
function multiplication () { //multiplication function
    var simple_math = 6 * 8;
    document.getElementById("Math").innerHTML = "6 * 8 =" + simple_math;
}
function division () {
    var simple_math = 36 / 6;
    document.getElementById("Math").innerHTML = "36 / 6 =" + simple_math;
}

function more_math () {
    var simple_math = (1 + 2) * 10 / 2-5;
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied b 10, divided in half and then subtracted by 5 equals" + simple_math;
}
function modulus_operator () { // Modulus function
    var simple_math = 36 % 6;
    document.getElementById("Math").innerHTML = "when you divide 36 by 6 you have a remainder of:" + simple_math;
}

function ngation_operator () {
    var x = 2;
    document.getElementById("Math").innerHTML =-x;
}