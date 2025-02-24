const radius = [3, 12, 1, 24];

const area = (r) => {
    return Math.PI * r * r;
}
const diameter = (r) => {
    return 2 * r;
}
const circumference = (r) => {
    return 2 * Math.PI * r;
}
function Calculate(arr, cb) {
    let output = [];
    arr.map((item) => output.push(cb(item)));
    return output;
}

// here Calculate is higher order fn and diameter is callback fn
console.log(Calculate(radius, diameter));    // [6,24,2,48]
// console.log(Calculate(radius, circumference)); 


// console.log(radius.map(diameter));
// console.log(radius.map(circumference)); 


//map, filter, reduce are higher order functions
const mappedBinary = radius.map((item) => item.toString(2));  // outputs [ '11', '1100', '1', '11000' ]

const filtered = radius.filter((x) => x%2 != 0);  // outputs [3,1]

const reduced = radius.reduce((acc,x) => acc + x, 0);  // outputs 40

const highest = radius.reduce((max,curr) => {
    if(curr > max) {
        max = curr;
    }
    return max;  //outputs 24
}, 0);


Array.prototype.arithmetic = function (logic) {
    const output = [];
    for(let i=0;i<this.length;i++) {
        output.push(logic(this[i]));
        //here this refers to radius from line 44
    }
    return output;
}

console.log(radius.arithmetic(diameter)); // Here arithmetic is POLYFILL for map 
// [6, 24, 2, 48]

function All(r) {
    // All operations inside one function
    let circleArea = [];
    let circleDiameter = [];
    let circleCircumference = [];
    r.map((item) => {
        circleArea.push(Math.PI * item * item);
        circleDiameter.push(2 * item);
        circleCircumference.push(2 * Math.PI * item);
    });
    console.log("Area", circleArea);
    console.log("Circumference", circleCircumference);
    console.log("Diameter", circleDiameter);
}
// All(radius);

//log the frequency of age using reduce
const users = [
    { name: "Ejaz", age: 25 },
    { name: "Ahmad", age: 20 },
    { name: "Shaik", age: 25 },
];

const output = users.reduce((acc, curr) => {
    if(acc[curr.age]){
        ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(output);  // { '20': 1, '25': 2 }


// output the names of users whose age is below 24
const young = users.filter((x) => x.age < 24 ).map((x) => x.name);
console.log(young);    // outputs ['Ahmad']

// same output using reduce instead of chaining filter and map 
const reducedAge = users.reduce((acc,curr) => {
    if(curr.age < 24){
        acc.push(curr.name)
    }
    return acc;
}, []);

console.log(reducedAge);  // outputs ['Ahmad']
