function Pass_Function() { // ternary operation
    var Mark, Pass;
    Mark = document.getElementById("John").value;
    Pass = (Mark >= 50) ? "You have passed":"You failed, you didn't score 50 points";
    document.getElementById("Pass").innerHTML = Pass;
}
function Music(Type,Song) { // constructor function 
    this.Music_Type = Type;
    this.Music_Song = Song;
}
var Eminem = new Music("Rap", "RapGod");
function myFunction() {
    document.getElementById("New_and_This").innerHTML = "Eminem is a " + Eminem.Music_Type + " artist, his biggest song is " + Eminem.Music_Song + ".";
}

function Nested_Function() {// Nested function
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}