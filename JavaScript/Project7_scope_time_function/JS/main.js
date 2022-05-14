var X = 60;
function Add_numbers_1() {
 
    document.write(X + 100 +"<br>");
}
Add_numbers_1();


function Add_numbers_3() {
    var X = 20;
    document.write(20 + X + "<br>");
}
Add_numbers_3();

if (1 < 2) {
    document.write("The left number is smaller then the number on the right")
}

function get_Date(){
    if (new Date().getHours() < 18){
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Age_Function() { //Age function
    Age = document.getElementById("Age").value;
    if (Age >= 18) { //if statement 
        Vote = "You are old enough to vote";
    }
    else { //if the if statement is not true
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() { // time function
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0){
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18){
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;

}