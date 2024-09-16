//spread operator (...): is used to convert an array into a comma seperated list of values
// and an object into a comma seperated key-value pairs.

a1 = [1,2,3,4]
a2 = [6,7,8,9]

console.log(a1);
console.log(a2);

a3 = [a1,a2]; // [ [1,2,3,4] , [6,7,8,9] ]
console.log(a3); 

a4 = [...a1,...a2] //let a4 = [1,2,3,4,6,7,8,9]
console.log(a4);

c1 = {cid:101,name:'Vamsy',mobile:'9052224753',email:'vamsy@gmail.com'};
console.log(c1);
c1 = {...c1,alternateMobile:'9948016004'};
//c1 = {cid:101,name:'Vamsy',mobile:'9052224753',email:'vamsy@gmail.com',alternateMobile:'9948016004'};
console.log(c1);
