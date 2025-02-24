// if

const isuserLoggedInt = true
const temperature= 41
// if(temperature < 50){
//     console.log("less than 50");
// }
// // if(temperature > 50){
// //     console.log("more than 50");
// // }
// else{
//     console.log("tempeature more tha 50");
// }


// if(2 == "2"){
//     console.log("executed");
// }


// if(2 !== 3){
//     console.log("executed");
// }


//<, >, <=, ==, !=, ===, !==, 


// const score=200
// if(score > 100) {
//     const power= " fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`user power: ${power}`);

const balance = 100

 //if(balance > 500) console.log("test"), console.log("test2");

//  if( balance < 500){
//     console.log("less than 500 ");
//  }else if(balance < 750){
//     console.log("less than 750");
//  }else if (balance < 900 ){
//     console.log("less than 900");
//  }else{
//     console.log("less than 1200");
//  }

const userLoggedIn = true
const debitCard= true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && debitCard){
    console.log("allow to buy course");

}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}