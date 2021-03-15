
// 1. Write function called getRandomNumber that returns a promise
// 2. In the promise, write a setTimeout() that will resolve the promise with a random number after .5 seconds
// 3. Write an async function that invokes the getRandomNumber function, awaiting the random number, and printing that to the console.
// 4. Invoke your async function




 function getRandomNumber() {
   return new Promise((resolve) => {
     setTimeout(() => {
       const rand = Math.floor(Math.random() * 1000);
       console.log(rand);
       resolve(rand);
     }, 500);
   });
 }

 async function newFunction() {
   let random = await getRandomNumber();
   console.log("Your number is: " + random);
 }

 newFunction();



// Write an asynchronous function that accepts 1 parameter
// A city name
// When invoked, this function should use geocode.xyz's API retrieve the city data, which uses a URL formatted as follows:

// https://geocode.xyz/seattle?json=1

// Once retrieved, print to the console the latitude and longitude
// Invoke your async function with a few cities as a test



async function city(cityName) {
    const response = await fetch(`https://geocode.xyz/${cityName}?json=1`)
    const info = await response.json();
    console.log("The latitude is: " + info.longt + ".\nThe longitude is: " + info.latt);
  }
  
  city("san francisco");