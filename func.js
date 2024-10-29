function hallo(zahl1, zahl2, ...args) {
  console.log("Welt");
  console.log(zahl1 + zahl2);
  args[0] = false;

  console.log(args);
}

function hallo(zahl1, zahl2, letter1, letter2) {
  console.log(zahl1 + zahl2);
  if (letter1 == "a") {
    console.log("Hallo");
  }
  if (letter2 == "b") {
    console.log("Welt!");
  }
}

// hallo(2,2,"a","b");

hallo = function () {
  console.log("Hallo seit ihr noch wach!");
};
hallo = () => {
  console.log("Anscheinend nicht");
};
hallo = (e) => e;
//               Ist a kleiner b? wenn ja gib true zurück : ansonsten false <= else
hello = (a, b) => (a < b ? a + b : "Werte nicht im richtigen Bereich");

console.log(hello(hallo(2), hallo(4)));

function returnValue() {
  return ciao(hello(1, 3));
  console.log("test");
}

let value = returnValue();

console.log(value);

function ciao(value) {
  console.log("ciao ", value);
  while (value) {
    if (value) {
      if (value == 4) {
        // console.log("infinity loop");
        return true;
      }
    }
  }
}
