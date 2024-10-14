//* When a function is returned from a function, closure is activated.
//* Normally, when function returns something, the local variables are simply destroyed.
//* But but but, when closure is activated, it prevents the destruction of those variables which
//* are going to be used in the returned funtion of that function. Closure lists the unused 
//* variables that are not going to be used in the returned function, this is called the 
//* "garbase collection"

//* So A closure is a function having access to the parent scope, even after the parent function has closed.

//* Example:
function fun1() {
    let counter = 0;
    return function () {
        counter++;
        console.log(counter);
    }
}

const app = fun1();
app();
app();
app();


