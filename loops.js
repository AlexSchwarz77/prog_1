let arr = [0,1,2,3,4,5,6,7,8,9];
let arr2 = ["hallo", "welt", "geh", "sterben"]

for(let i = 0; i< 10; i++){
    // console.log(i);
}
// console.log("array length ", arr2.length);

for(let i = 0; i < arr2.length; i++){
    // console.log(arr2[i]);
}

let uniqueList = new Set([1,2,3,4,4,5]);
// console.log("set size ",uniqueList.size);

arr2 = [[1],[2,3],[4]]

for(let value of arr2){
    // console.log(value);   
}

for(i=0; i < arr2.length; i++){
    for(j=0; j < arr2[i].length; j++){
        // console.log(arr2[i][j]);
    }
}

let map = new Map([
    ["name", "Klaus"],
    ["bday", "29.10.789"],
    ["age", "~1200"]
]);

// for(let value in obj){
//     console.log(obj[value]);  
// }

// map.forEach(e => console.log(e));
let numb = 0;
while(numb < 10){
    // console.log(numb);
    numb++   
}

let num2 = 0;
do{
    console.log(num2);
    // num2++ 
}while(num2 < 0)
    
let temp = [13, 12, 25, 26, 27, 28, 29, 80];
let iter = 0;
do{
    // console.log(temp[iter]);
    
    iter++
}while(iter < temp.length)

let session = true;
while(session){
    console.log("Hallo");
    session = !session;
}