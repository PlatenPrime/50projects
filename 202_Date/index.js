const date = new Date();
console.log(date);
console.log(date.getTime());


const date2 = new Date(2024, 1, 16, 10, 40, 0, 0);
console.log(date2);
console.log(date2.getTime());

console.log(date2.getFullYear());

date.setFullYear(1993);
console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getTime());
console.log(date.getDay());


console.log(Date.now());
console.log(Date.now().toString());

console.log(new Date().toString());
console.log(new Date().toDateString());
console.log(new Date().toTimeString());
console.log(new Date().toLocaleString());
console.log(new Date().toLocaleTimeString());












