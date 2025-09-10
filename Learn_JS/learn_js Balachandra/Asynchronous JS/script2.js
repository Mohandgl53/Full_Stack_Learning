// //Asynchronous JavaScript

// // Async / Await

// const usersList = {
//     usersData:[]
// }

// const users = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const userData = await response.json();
//     return userData;
// }

// const anotherFunction = async () => {
//     const data = await users();
//     usersList.usersData = data;
//     console.log(usersList)
// }

// anotherFunction();

// //fetch API parameters 

// const getDadJoke = async () => {
//     const response = await fetch("https://icanhazdadjoke.com/",
//         {
//             method : "GET",
//             headers : {
//                 Accept : "application/json" //"text/plain"
//             }
//         }
//     )
//     const jsonDadJoke = await response.json(); //response.text();
//     console.log(jsonDadJoke)
// }

// getDadJoke();

//use fetch api Post method

const jokeObject = {
    id: 'wHYgNmrcxc', joke: 'I started a new business making yachts in my attic this year...the sails are going through the roof'
}


const postJoke = async (jokeObj) => {
    try {
        const response = await fetch("https://httpbin.org/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jokeObj)
        });
        const responseData = await response.json();
        console.log(responseData.json);
    } catch (error) {
        console.error("Error posting joke:", error);
    }
}

postJoke(jokeObject);