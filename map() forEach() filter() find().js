const friends = [
    {name: "Zooel", age: 20, roll: 20025, present: true},
    {name: "Sizan", age: 22, roll: 20034, present: false},
    {name: "Sakib", age: 21, roll: 20088, present: true},
    {name: "Rakib", age: 19, roll: 20018, present: true},
    {name: "Maruf", age: 23, roll: 20097, present: false}
];
// map  //returns array
const allName = friends.map(eachObj => eachObj.name);
console.log(allName);

// forEach  
const allName2 = friends.forEach(eachObj => console.log(eachObj.name));

// filter
const filterNames = friends.filter(eachObj => eachObj.present !== false);
console.log(filterNames);

// find
const findRoll = friends.find(eachObj => eachObj.roll === 20097);
console.log(findRoll);