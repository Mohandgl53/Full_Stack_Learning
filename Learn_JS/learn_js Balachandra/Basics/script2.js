//Object Datatype Concept

const obj={
    name: "mohan",
    age: 21,
    place:["kovilpatti","dindigul","varaganur"]
};

const {place,age,name} = obj;

function person({name}){
    return name;
};

console.log(person(obj));


//Starting of Class Concept

const pizza = {
    size:"medium",  
    crust:"original",
    bake: function(){
        return console.log(`Baking a ${this.size} ${this.crust} crust pizza.`);
    }
};

pizza.bake();

class Pizza{
    constructor(size,crust,type){
        this.type=type;
        this.size=size;
        this.crust=crust;
        this.toppings=[]; 
    }
    gettoppingsPizza(){
        return this.toppings;
    }
    settoppingsPizza(toppingsPizza){
        this.toppings.push(toppingsPizza);
    }
    bake(){
        return console.log(`Baking a ${this.size} ${this.crust} crust ${this.type} pizza with ${this.toppings}`);
    }
};

const myPizza= new Pizza("small","thin","margarita");

myPizza.bake();

myPizza.settoppingsPizza("Sausage");

console.log(myPizza.toppings);

myPizza.settoppingsPizza("olives");

console.log(myPizza.gettoppingsPizza());

myPizza.bake();



//inheritence of Class


class Pizza{
    constructor(size){
        this.size=size;
        this.crust="original";
    }
    getCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }
}

class specialPizza extends Pizza{
    constructor(size){
        super(size);
        this.type="margarita";
    }
    slice(){
        console.log(`Our ${this.type} ${this.size} ${this.crust} pizza has 8 slices`)
    }
}

var mySpecialPizza = new specialPizza("medium");

mySpecialPizza.slice();


//private Property

class Pizza{
    constructor(size){
        this.size=size;
    }
    getCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }
}

class specialPizza extends Pizza{
    #crust="original";
    constructor(size){
        super(size);
        this.type="margarita";
    }
    slice(){
        console.log(`Our ${this.type} ${this.size} ${this.#crust} pizza has 8 slices`);
    }
}

let mySpecialPizza = new specialPizza("medium");

mySpecialPizza.slice();

// Handling Errors

const makeError = () =>{
    try{
        throw new handleError("This is a custom Error");

        
    }
    catch(err){
        console.error(err.stack);
    }
};


function handleError(message){
    this.money= message;
    this.name = "mohan";
    this.stack =`${this.name}:${this.money}`;
}

makeError();