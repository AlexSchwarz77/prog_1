class Human {
    name;
    height;
    #age;
    skinColor;
    eyeColor;

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

let human = new Human("Klaus", 1, 55, "pink", "neongelb");

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




