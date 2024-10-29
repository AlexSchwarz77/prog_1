people = "161";
pilz = 161;
pilz2 = null;

// console.log(pilz == people); //gleich
// console.log(pilz === people);
// console.log(pilz != people); //ungleich
// console.log(pilz !== people);

letter1 = "a";
letter2 = "A";

// console.log(letter1 > letter2);
// console.log(letter1 >= letter2.toLowerCase());
// console.log(letter1 < letter2);

if(letter1 != pilz2){
    console.log(true); 
}

if (!pilz2) { // ! negiert die Aussage(Expression)
    console.log(pilz2);  
}

if(1 < 2 || 3 > 4){
    console.log("or: ", true);   
}

if(1 < 2 && 3 < 4){
    console.log("and: ", true);  
}
if(1 < 2 && 3 > 4 || "a" == "a"){
    console.log("and or: ", true);  
}

if(!pilz){
    console.log("if");
} else {
    console.log("else");
}

if(pilz == 100){
    console.log("if");
} else if(pilz == 120){
    console.log("else if");
    
}else {
    console.log("else");
}

user = "Peter";
pwd = "Dies ist kein gültiges Passwort";

if(user == "Peter"){
    if (pwd == "Dies ist kein gültiges Passwort") {
        console.log("Hallo ", user);
        
    } else {
        console.log("Falsches Passwort");
    }
} else {
    console.log("User nicht gefunden, Bitte überprüfen sie ihren Benutzernamen oder regestrieren sie sich");
}