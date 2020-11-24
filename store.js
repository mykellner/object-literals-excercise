// --------- store-object ---------

let ica = {
    name: "Ica supermarket Skurup",
    address: "Drottninggatan 20",
    zipcode: "123789",
    city: "Skurup",
    staff: [],
    products: [],
    addStaff: function (person){
        // Vi använder oss av this här, för att "this" hänvisar till det egna objektet. Så "this" = ica. 

        this.staff.push(person);
        person.worksAt = this;
    },
    fireStaff: function(person) {
        // vi kan här använda en arraymetod som heter filter(), den filterar bort element utifrån ett villkor. ÄR det sant så behålls elemenetet är det falskt soreteras det bort. 
        this.staff = this.staff.filter(p => p !== person);
        person.worksAt = null;
        return this;
    },

    addProduct: function (product) {
        this.products.push(product)
        return this;
    }
};

console.log(ica);


// --------- personobjects --------

let niklas = {
    firstName: "Niklas",
    lastname:  "Håkansson",
    age: 30,
    salary: 45000,
    worksAt: null,
    startWorkAt: function (store) {
        this.worksAt = store;
        // store.staff.push(this)
        store.addStaff(this);
        return this;

        
    }
}

let my = {
    firstName: "My",
    lastname:  "Kellner",
    age: 26,
    salary: 42000,
    worksAt: {},
    startWorkAt: function (store) {
        this.worksAt = store;
        // store.staff.push(this)
        store.addStaff(this);
        return this;

        
    }
}

let erik = {
    firstName: "Erik",
    lastname:  "Jansson",
    age: 35,
    salary: 24000,
    worksAt: {},
    worksAt: {},
    startWorkAt: function (store) {
        this.worksAt = store;
        // store.staff.push(this)
        store.addStaff(this);
        return this;

        
    }
}

ica.staff.push(niklas);

console.log(ica);

erik.worksAt = ica;

ica.addStaff(erik);

// --------- product objects ----- 

let milk = {
    name: "Mellanmjölk",
    price: 11
}

let cheese = {
    name: "Herrgårdsost",
    price: 59
}

let beef = {
    name: "Biff",
    price: 109
}

let fisk = {
    name: "Lax",
    price: 89
}