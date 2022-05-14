function full_Sentence() {
    var Part_1 = "I have ";
    var Part_2 = "made this";
    var Part_3 = " into a complete ";
    var Part_4 = "sentence.";
    var whole_sentence = Part_1.concat(Part_2, Part_3, Part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27.33);
    document.getElementById("Slice").innerHTML = Section;
}

function Upper_case(){
    let text = "welcome";
    let result = text.toUpperCase();
    document.getElementById("upper").innerHTML = result;
}

function Find_Color(){
    let text = "This car is blue"
    let position = text.search("blue");
    document.getElementById("color").innerHTML = position;
}

function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 134632.678965346657;
    document.getElementById("Precision").innerHTML = X.toPrecision(12);
}

function fixed_Method(){
    let X = 8.37456;
    let n = X.toFixed(2);
    document.getElementById("Fix").innerHTML= n;
}

function value_Method(){
    let text = "Hello";
    let value = text.valueOf();
    document.getElementById("value").innerHTML = value;
}