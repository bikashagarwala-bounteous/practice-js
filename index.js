
// Execution Context & Call Stack
var x = 10;

function foo() {
    var y = 20;
    bar();
}

function bar() {
    var z = 30;
    console.log(x, z);
}

foo();


// Lexical Environment
function outer() {
    let a = 10;

    function inner() {
        console.log(a);
    }

    inner();
}

outer();


// Closures
function counter() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const increment = counter();

increment();
increment();
increment();


// Temporal Dead Zone (TDZ)
// console.log(a); // ReferenceError
// let a = 5;


// let b;
// console.log(b); // undefined


// Event Loop (Microtask vs Macrotask)
console.log("start");

setTimeout(() => {
    console.log("timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("promise");
});

console.log("end");


// this Binding
// const obj = {
//     name: "JS",
//     show() {
//         console.log(this.name);
//     }
// };

obj.show(); // "JS"

const fn = obj.show;
fn(); // undefined (strict mode)



const obj2 = {
    name: "Arrow",
    show: () => {
        console.log(this.name);
    }
};

obj2.show(); // undefined


// Hidden Classes (Performance Concept)
const a = {};
a.x = 1;
a.y = 2;

const b = {};
b.y = 2;
b.x = 1;


const obj = { x: 0, y: 0 };


// Primitive Boxing
const str = "hello";

console.log(str.toUpperCase());



// Abstract Equality (==)
console.log(null == undefined); // true
console.log(0 == false);        // true
console.log("5" == 5);          // true
console.log(null === undefined); // false


// Garbage Collection & Memory Leaks
function attachHandler() {
    const bigData = new Array(1000000).fill("*");

    document.body.onclick = function () {
        console.log(bigData.length);
    };
}

attachHandler();



//works without error
let a = 10;

function shadowing() {
    var a = 20;
    console.log(a);
}
shadowing();
console.log(a);


// illegal shadowing (Cannot redeclare block-scoped variable 'a'.)
let a = 10;

{
    var a = 20;
    console.log(a);
}
console.log(a);