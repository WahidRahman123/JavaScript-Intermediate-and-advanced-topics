// function sum(a, b){
//     console.log(a + b);

// }

// function calculator(a, b, anyfunction) {
//     anyfunction(a, b);
// }

// calculator(5, 10, sum)

//* Other method
// function res(a, b, anything) {
//     anything(a, b);
// }

// res(2, 3, (a, b) => {console.log(a + b);
// })

//! Callback Hell
//* It happens when nested callback comes.
//* Example -
// function getData(dataId, secondDataFun) {
//     setTimeout(() => {
//         console.log("Data " + dataId);
//         if(secondDataFun) {
//             secondDataFun();    //* ei line er ortho, ze function ta disilam ota call koro.
//         }
//     }, 2000)
// }

// getData(1, () => {
//     getData(5, () => {
//         getData(4, () => {
//             getData(6)
//         })
//     })
// })
//* Last portion is the callback hell.

//* Doing this callback hell using promise chain:
function getData1(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data " + dataId);
            resolve("Success")
        }, 2000)
    })
}
// getData1(1).then((res) => {
//     console.log(res);
//     getData1(5).then((res)=>{
//         console.log(res);
//     })
// })
// //!Writing the above one in another method
// getData1(1)
//     .then(() => {
//         return getData1(2)
//     })
//     .then(() => {
//         return getData1(3)
//     })
//     .then(() => {
//         return getData1(4)
//     })
//     .then(() => {
//         console.log("Tor kaaj sesh mama.");
//     })
//* Writing the above one Using Async-Await
// async function dataGet() {
//     console.log("Getting data 1");
//     await getData1(1)
//     console.log("Getting data 2");
//     await getData1(2)
//     console.log("Getting data 3");
//     await getData1(3)
//     console.log("Getting data 4");
//     await getData1(4)
// }
// dataGet()

//* Using IIFE (Immediately Invoked Function Expression)
(async function () {
    console.log("Getting data 1");
    await getData1(1)
    console.log("Getting data 2");
    await getData1(2)
    console.log("Getting data 3");
    await getData1(3)
    console.log("Getting data 4");
    await getData1(4)
})()



//! Promises
// let pro = new Promise((resolve, reject) => {
//     console.log("Hello World!");
//     resolve(12)
// })

// function getData(dataId, anyfunction) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Data " + dataId)
//             resolve("Success")
// reject("error")
//             if(anyfunction) {
//                 anyfunction();
//             }
//         }, 5000)
//     })
// }

// let returnedValue = getData(123)
// console.log(returnedValue);

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise.");
//         // resolve("success");
//         reject("mathai nosto error")
//     })
// }

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);

// })

// promise.catch((err) => {
//     console.log("Problem Arised", err);

// })


//* Promise Chain
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Some Data1");
      resolve("success");
    }, 4000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Some Data2");
      resolve("success");
    }, 4000);
  });
}

// console.log("fetching the data1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//   console.log(res);
//   console.log("fetching the data2...");
//   let p2 = asyncFunc2();
//   p2.then((res1) => {
//     console.log(res1);
//   });
// });

// //* We can rewrite the above code as the below
// console.log("fetching the data1...");
// asyncFunc1().then((res) => {
//   console.log(res);
//   console.log("fetching the data2...");
//   asyncFunc2().then((res1) => {
//     console.log(res1);
//   });
// });


//* Async
async function hello() {
    console.log("Hello");
}

//* Async and Await together
function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather Data");
            resolve(200)
        }, 5000)
    })
}

//* Normal way of using async-await function
// async function getWeatherData() {
//     await api();    //1st call
//     await api();    //2nd call
    
// }
// getWeatherData()

//* Async-await function using IIFE (Immediately Invoked Function Expression)
// (async function (params) {
//     await api()
//     await api()
//     await api()
// })()
