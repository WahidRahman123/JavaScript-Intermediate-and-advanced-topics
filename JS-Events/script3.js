const box = document.querySelector('#box')
box.style.height = "100px"
box.style.width = "100px"
box.style.backgroundColor = "aqua"


box.addEventListener('mouseover', () => {
    box.style.backgroundColor = 'red'
    console.log("You are inside the box.");
    
})
box.addEventListener('mouseout', () => {
    box.style.backgroundColor = 'aqua'
    console.log("You are outside the box.");
    
})