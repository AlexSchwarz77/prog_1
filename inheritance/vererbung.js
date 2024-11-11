// Seit 2015 mit ES6 bzw ES2015 können Klassen in JavaScript erstellt werden
class Human {
    // Class-Pproperties
    name;
    height;
    // Mit # werden Properties oder Methoden "privates"
    #age;
    skinColor;
    eyeColor;

    // Der Konstruktor bestimmt wie ein Objekt beim instanziieren "aussehen" soll
    constructor(name, height, age,skinColor,eyeColor){
        this.name = name;
        this.height = height;
        this.#age = age;
        this.skinColor = skinColor;
        this.eyeColor = eyeColor;
    }

    introduction(){
        console.log(`My Name is ${this.name} and my age is ${this.#age}`);
        
    } 
}

// new Ist das Keyword um ein Objekt zu erstellen
let human = new Human("Klaus", 1, 55, "pink", "neongelb");

// Vererbung wird mit dem Keyword extends 
class Student extends Human {
    _class;
    semester;
    profession;
    degree;

    constructor(_class, semester, profession, degree, name, height, age, skinColor, eyeColor){
        super(name, height, age, skinColor, eyeColor);
        this._class = _class;
        this.semester = semester;
        this.profession = profession;
        this.degree = degree;        
    }

    // introduction(){
    //     console.log(`My name is ${this.name} and my goal is to become a ${this.profession}.`);
        
    // }
}

// let ewa = new Student("ITU 24-08", 1, "FIAE", 0.8, "ewa", 175, 36, "shiny", "green");

// console.log(ewa);

class Worker {
    department;
    // Hier wird eine Klasse durch Komposition in eine andere "hinzugefügt"
    // Bedeutet also in dem Objekt wird ein Objekt als Eigenschaft verwendet
    human;
    constructor(department, name, height, age, skinColor, eyeColor){
        this.human = new Human( name, height, age, skinColor, eyeColor);
        this.department = department;

    }

    introduction(){
        console.log("i'm working @ "+ this.department );    
    }

}

let ewa = new Worker("IT Second Level", "ewa", 175, 36, "shiny", "green");
// console.log(ewa);
ewa.human.introduction();
ewa.introduction();




