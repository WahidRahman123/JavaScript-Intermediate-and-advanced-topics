const url = "https://dogapi.dog/api-docs/v2/swagger.json"
const btn = document.querySelector("#btn1")


const getFacts = async () => {
    console.log("Getting Data...");
    let promise = await fetch(url);
    console.log(promise);
    let data = await promise.json()
    console.log(data.info.description)
}

//* doing this same this using promise chain
// function getFacts1() {
//     fetch(url)
//         .then((response) => {
//             return response.json()
//         })
//         .then((data) => {
//             console.log(data.info.description);
            
//         })
// }

btn.addEventListener('click', getFacts1) 