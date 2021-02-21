/* array destructure */
const persons = ["Zooel", "Sizan", "Piash"];

const [x, y, z] = persons;
console.log(x, y, z);




/* obj destructure */
const  students = [
    {name: "Zooel", age: 20, eyeColor: "black", height: 5.6, weight: 64 },
    {name: "Mehrab", age: 21, eyeColor: "brown", height: 5.4, weight: 54 },
    {name: "Piash", age: 22, eyeColor: "blue", height: 5.7, weight: 73 }
];

const {name, height} = students[0]
console.log(name, height);



/* persons is an array but ...persons is not. cause ...persons return the elements of the persons array */
console.log(Array.isArray(...persons));
/* output is false */