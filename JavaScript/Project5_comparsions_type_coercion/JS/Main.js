
document.write(6 > 5);//ture
document.write(8 < 1);//false

document.write("5" + 4); 

document.write(10 == 10); //true
document.write(5 === 10);//false


document.write(5 > 2 && 10 > 4); // returns true using AND operator
document.write(5 > 10 || 20 < 1); // returns false using OR operator

function not_Function() { // returns true using NOT operator
    document.getElementById("Not").innerHTML = !(10 > 40);
}
