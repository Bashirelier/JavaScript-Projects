function my_Dictionary() { // This function outputs a KVP into an HTML element
    var Animal = { 
        Species: "Dog", 
        Color:"Brown",
        Breed: "labrador retriever",
        Age: 6,
        Sound:"Bark!"
    };
    delete Animal.Sound; // Delete operator removes the key before its value is displayed 
    document.getElementById("Dictionary").innerHTML = Animal.Sound; 
}

