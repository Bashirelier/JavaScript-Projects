function Call_Loop() { // While Loop
    let text = "Hello World";
    let length = text.length;

    document.getElementById("Loop").innerHTML = length;
}
//For Loop
var Instruments = ["Guiter", "drums", "Piano", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Istruments").innerHTML = Content;
}
//Array
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "Playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "in this picture, the cat is " +
        Cat_Picture[2] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "red";
    Musical_Instrument.price = "$2800";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.color + " " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}
// using let keyword
var X = 82;
    document.write(X);
    {
        let X = 33;
        document.write("<br>" + X);
    }
document.write("<br>" + X);

let car = {
    make: "dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();