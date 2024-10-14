const btn = document.querySelector('#btn')
let mode = 'light';
const body = document.querySelector('body')

btn.addEventListener('click', () => {
    if(mode === 'light') {
        body.style.backgroundColor = 'black'
        mode = 'dark'
    }
    else if(mode === 'dark') {
        body.style.backgroundColor = 'white'
        mode = 'light'
    }    
})