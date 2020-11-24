let name = "Niklas";
let age = 30;
let gender = "Male";

// klumpa ihop variablerna som hör ihop till ett och samma objekt

let niklas = {
    name: "Niklas",
    age: 30,
    gender: "Male"
};

let maria = {
    name: "Maria",
    age: 28,
    gender: "female"
}

// Lägga till egenskaper genom punktnotation. 

niklas.address = "Drottninggatan 20";

// ändra egenskaper i ett obbjekt på två sätt, första är via punktnotation. 

niklas.name = "Johan";

// det andra sättet är på ett arrayliknande sätt.

niklas["age"] = 45;

// Ta bort egenskap, vilket man sällan gör, brukar oftast sätta värdet till null eller 0.

delete niklas.age;
delete niklas["address"]

console.log(niklas);