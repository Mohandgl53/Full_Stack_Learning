//Asynchronous JavaScript
//Promises
// 3 States: Pending, Fulfilled, Rejected

const myPromise = new Promise((resolve,reject) => {
    const error=true;
    if (!error){
        resolve("Yes, Resolved the Promise. ");
    }
    else{
        reject("No, rejected the Promise.");
    }
}) 

console.log(myPromise)

const myNextPromise = new Promise((resolve,reject) => {
    setTimeout(function(){
        resolve("myNextPromise resolved");
    },3000);
})


myNextPromise.then(value => {
    console.log(value);
})

myPromise.then(value =>{
    console.log(value);
}).catch(err => {
    console.log(err);
})


//Fetch API - Promise (State: Pending)

const users = fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    return response.json();
}).then(users => {
    users.forEach(element => {
        console.log(element)
    });
})

console.log(users);

