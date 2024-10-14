const btn1 = document.querySelector('#btn1')
const box = document.querySelector('#box')

btn1.addEventListener('click', (evt) => {
    console.log("Event Handler 1.")
})
btn1.addEventListener('click', (evt) => {
    console.log("Event Handler 2.")
})

let handler3 = (evt) => {
    console.log("Event Handler 3.")
}

btn1.addEventListener('click', handler3)
btn1.addEventListener('click', (evt) => {
    console.log("Event Handler 4.")
})

btn1.removeEventListener('click', handler3)
