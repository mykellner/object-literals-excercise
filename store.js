// --------- store-object ---------

let ica = {
    name: "Ica supermarket Skurup",
    address: "Drottninggatan 20",
    zipcode: "123789",
    city: "Skurup",
    staff: [],
    products: [],
};

console.log(ica);


// --------- personobjects --------

let niklas = {
    firstName: "Niklas",
    lastname:  "Håkansson",
    age: 30,
    salary: 45000,
    worksAt: {},
}

let my = {
    firstName: "My",
    lastname:  "Kellner",
    age: 26,
    salary: 42000,
    worksAt: {},
}

let erik = {
    firstName: "Erik",
    lastname:  "Jansson",
    age: 35,
    salary: 24000,
    worksAt: {},
}

ica.staff.push(niklas);
ica.staff.push(my);
ica.staff.push(erik)

console.log(ica);

erik.worksAt = ica;