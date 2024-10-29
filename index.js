/**
 *  Eine Variable ist Container oder ein Namensraum, in dem ein bestimmter Wert hinterlegt ist.
 * Variablen können in JavaScript auf 3 Arten angelegt werden. 
 * Die Keywords sind var, let und const 
 * Der Name einer Variable sollte selbstbeschreibend sein! Einen String in eine Variable Namens zahl zu "packen", läuft dem Grundsatz entgegen!
 * JavaScript ist dynamisch Typisiert, das bedeutet, dass während der Laufzeit erst bestimmt wird, welchen Datentyp die Variable hat. 
 * Die dynamische Typisierung ist auch der Grund warum wir keine Datentypen bei der Initialisierung und Deklaration einer Variablen angeben müssen.
 * Welche Anführungszeiten (" oder ' )verwendet werden ist im Grunde egal. Es ist eher eine Entscheidung, welche auf Unternehmensebene getroffen wird
 * (Stichwort Coding Richtlinien*/

var zahl = "Ich bin keine \"Zahl\"";
var number = 55;
var string = "5 Welt";

/** Backticks (``) werden verwendet, wenn der String eine Formatierung aufweisen soll oder vor allem eine Variable beinhalten soll*/
let temLiteral = `dein ALter 
    ist ${number}`;
let tem = 'dein ALter ist' +" "+ number;
var number = 6;
/** Variablen können auch nur deklariert werden, ohne ihnen einen Wert zu zuweisen (Initialisierung). Vor ihrer Verwendung sollten sie aber initialisiert werden.
 **/  
let car;
car = null;
car = "Toyoda";
let bool = true;
/**Auch wenn JavaScript dynamisch Typisiert ist, besteht dennoch die Möglichkeit einen Datentyp in einen anderen zu konvertieren.
 * Primitive Datentypen 
 * Zahlen:
 * number (Ganzzahlen und Fließkomma)
 * BigInt 
 * Zeichenketten
 * String
 * Boolesche:
 * Boolean
 * Sonderfälle:
 * undefined
 * null
 */
let conv = Boolean(0);
// zahl = 3.14;
// zahl = 123n;
// zahl = 1e-5;
// console.log(zahl);

const PI = 3.14;

// console.log(PI);
/**
 * Nicht-Primitive Datentypen
 * Array
 * Set
 * Map
 * Object
 * Sonderfall:
 * function => Objekte erster Ordnung
 */
let arr = [1,2,[3, 'a', 'B'],"4",5];

let set = new Set();
set.add(1);
set.add(2);
set.add(1);

let map = new Map();
map.set("ananas", 100);
// console.log(String.fromCharCode(42));

/**
 * Alte Methode um Objekte zu erstellen
 */
let boat = {
    "antrieb": "Wind",
    "anzahlSegel": 4,
    "mannschaft":{
        "captain": "hook",
        "firstMaat": "Smee"
    },
     
}

/**
 * Ab ES6 bzw ES2015 sind Klassen in JavaScript eingeführt worden
 */
class StarWarsTiere {
  /**
   * Objekteigenschaften (Properties)
   */
  heimatPlanet;
  laenge;
  gewicht;
  #farbe;
  lebensraum;
  name;

  /**
   * Der Konstruktor definiert welche Eigenschaften des Objekts bei Erstellen angegeben werden müssen.
  */
  constructor(heimatPlanet, name, farbe) {
    this.heimatPlanet = heimatPlanet;
    this.name = name;
    this.#farbe = farbe;
  }

  /**
   * Funktionen werden zu Methoden, wenn sie Bestandteil einer Klasse sind
   */
  getFarbe(){
  
      return this.#farbe;
  }
  #setFarbe(x){
    this.#farbe = x;
  }
  change(x){
    this.#setFarbe(x);
  }

}
let banthaa = new StarWarsTiere("Tatuin", "Banthaa", "Braun");
// banthaa = "test";
banthaa.laenge = 5;
banthaa.lebensraum = "Wueste";
banthaa.lebensraum = "Land";
banthaa.owner = "Luke";
banthaa.change("white");

// console.log(banthaa.getFarbe());

let hase = new StarWarsTiere("Erde", "Hase", "Weiss", 5, 150, "Land");
console.log(hase.getFarbe());


  


